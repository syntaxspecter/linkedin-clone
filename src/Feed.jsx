import React, { useEffect, useState } from 'react';
import FeedOptions from './FeedOptions';
import Post from './Post';
import './css/feed.css';
import { Avatar } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { db } from './firebase';
import {collection,getDocs,addDoc ,onSnapshot,orderBy,query,serverTimestamp} from "firebase/firestore";


 function Feed() {
     const [input , setInput] = useState("");
     const [posts , setPosts] = useState ([]);

     const postCollRef = collection(db , "posts")
     const q = query(postCollRef , orderBy('timestamp' , 'desc'))

     useEffect(()=>{
      
        const getPosts = async () => {
            const data = await getDocs(postCollRef)
            onSnapshot(q , 
                (snap) => setPosts(snap.docs.map((doc)=>({...doc.data(),id:doc.id})))
            )

        }

        getPosts();
     },[])
     
     
     const sendPost = async (e) =>{
         e.preventDefault();

        await addDoc(postCollRef , {
             name: "Saurabh Kumar Rai",
             description : "Full Stack Developer" ,
             message: input ,
             photoUrl: "checking" ,
             timestamp : serverTimestamp()
            });

            setInput("");
     }

    return ( 
        <div className="feed">
            <div className="feed__top">
                <div className="feed__search">
                <Avatar className='feedSearch__avatar' src='https://avatars.githubusercontent.com/u/45850768?v=4'></Avatar>
                       
                    <form className='search__form'>
                        <input value={input} onChange={(event)=>{setInput(event.target.value)}} type='text' placeholder='Start a post' className='feed__input'></input>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__options">
                    <FeedOptions title = "Photo" color = "#70B5F9" Icon = {InsertPhotoIcon} ></FeedOptions>
                    <FeedOptions title = "Video" color = "#7FC15E" Icon = {VideoLibraryIcon} ></FeedOptions>
                    <FeedOptions title = "Event" color = "#E7A33E" Icon = {EventIcon} ></FeedOptions>
                    <FeedOptions title = "Article" color = "#FC9295" Icon = {AssignmentIcon} ></FeedOptions>
                
                </div>
                
                 {posts.map((post)=>(
                <Post
                key={post.id}
                name ={post.name}
                description={post.description}
                message={post.message}>

                </Post>
                ))} 
                </div>
        </div>
     );
}

export default Feed;