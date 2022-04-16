import React from 'react'
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
    return  <div className='feed'>
        <MessageSender/>
        <Post
        profilePic="https://l.facebook.com/l.php?u=https%3A%2F%2Fscontent.fbkk6-1.fna.fbcdn.net%2Fv%2Ft1.6435-9%2F43750641_2172855369652024_2227380613915082752_n.jpg%3F_nc_cat%3D100%26ccb%3D1-5%26_nc_sid%3D09cbfe%26_nc_ohc%3DHc4zqIg2LOwAX_veIu5%26_nc_ht%3Dscontent.fbkk6-1.fna%26oh%3D00_AT9cWM01SRgdizERARy5PqGHo7Dcux6MZy658krlXZ-1sw%26oe%3D627E745C&h=AT0TaSpgyFxRCmizgABrcilAsMdS7NlSIr1amGDDLnoQ1dHBxCzldPYyDuq-beUMg4T-Ksy8bTjG9wo6zokV5nmahgaAmL6pdzXNg4FgR4lpmMymHbzzYh2iqg7zpCtSnLpxWhc_7EQ"
        message="Test If it's works"
        timestamp="Time Stamp"
        username='Test1'
        image="https://i.pinimg.com/564x/b8/c0/02/b8c002255a2222c8a33927d28ce87dcf.jpg"
        />
    


    </div>;

}

export default Feed;
