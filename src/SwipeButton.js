import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
import './SwipeButton.css';

const SwipeButton = ()=> {
    return (
        <div className="swipeButtons">
            <IconButton className="replay">
                <ReplayIcon fontSize="large"></ReplayIcon>
            </IconButton>
            <IconButton className="close">
                <CloseIcon fontSize="large"></CloseIcon>
            </IconButton>
            <IconButton className="star">
                <StarRateIcon fontSize="large"></StarRateIcon>
            </IconButton>
            <IconButton className="favorite">
                <FavoriteIcon fontSize="large"></FavoriteIcon>
            </IconButton>
            <IconButton className="flash">
                <FlashOnIcon fontSize="large"></FlashOnIcon>
            </IconButton>
        </div>
    );
}
export default SwipeButton;