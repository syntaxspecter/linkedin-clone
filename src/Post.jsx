import { Avatar } from '@mui/material';
import React from 'react';
import './css/Post.css';
import FeedOptions from './FeedOptions';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name , description , message }) {
    return ( 
        <div className="post">
            <div className="post__header">
            <Avatar src='https://avatars.githubusercontent.com/u/45850768?v=4'></Avatar>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>               
            </div>
            <div className="post__body">
                    <p>{message}</p>
            </div>
            <div className="post__options">
                <FeedOptions title = "Like" color = "gray" Icon = {ThumbUpIcon} ></FeedOptions>
                <FeedOptions title = "Comment" color = "gray" Icon = {CommentIcon} ></FeedOptions>
                <FeedOptions title = "Share" color = "gray" Icon = {ShareIcon} ></FeedOptions>
                <FeedOptions title = "Send" color = "gray" Icon = {SendIcon} ></FeedOptions>
            </div>

        </div>
     );
}

export default Post;
