import React,{useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCard.css';

const TinderCards = ()=> {
    const [people,setPeople] = useState([]);

    //Piece of code which runs based on a condition
    useEffect(() => {
        //this is where the code runs..
        const unsubcribe = database
            .collection('people')
            .onSnapshot((snapshot) => {
                console.log(snapshot.docs)
                setPeople(snapshot.docs.map((doc) => doc.data()))
            });
        return () => {
            unsubcribe();
        } 
        //this will run ONCE when the components loads, and never again. if [] is empty else it with run when inside the array change
    }, [])
    //Good , push in REACT
    //setPeople([...people,'sonny','quazi'])
    return (
        <div>
            <div className="cardContainer">
                {people.map( person => (
                <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}>
                    <div style={{backgroundImage: `url(${person.url})`}} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    );
}
export default TinderCards;