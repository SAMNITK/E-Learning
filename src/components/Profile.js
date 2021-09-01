import React from 'react';
import './Profile.css';
import Maths_Images from "../Images/04.jpg";
import learn_image from "../Images/05.jpg";
import Left_img from "../Images/07.jpg";
import Right_img from "../Images/06.jpg";
import Online_img from "../Images/08.jpg";
import Quiz_img from "../Images/09.jpg";
import Anywhere_img from "../Images/10.jpg";

function Profile() {
  return (
    <div className = "profile-container">

      <div className = "maths-image">
        <img
          src = "images/04.jpg"
          alt = ""
        />
      </div>

      <div className = "profile-container1">
        <div className = "left">
          <h1 >Most Appreciated Platform<br/>for Punjabi<br/>Mathematics Learning</h1>
        </div>
        <div className = "right">
            <img
              src = {learn_image}
              alt = ""
            />
        </div>
      </div>

      <div className = "profile-heading">
        <h1>Free Learning Videos</h1>
        <p>All Mathematics Video Tutorials available FREE in Punjabi | Free  learning  videos to Learn Mathemetics 
          . All videos are available of NCERT books. All classes, All chapters are solved and 
          well explained in the videos, 
          Practice MCQ's questions and  Exam preparation are 
          another highlight of the site. FREE education to all is the motive at the core. 
          This site gives you an interface to access all the videos through which 
          you can learn various Mathematics of 5th to 10th. Here we show case the highlights of 
          the learning platform:
        </p>
        <div className = "compt-board">
          <div className = "compt">
            <img
              src = {Left_img}
              alt = ""
            />
          </div>
          <div className = "board">
          <img
              src = {Right_img}
              alt = ""
            />
          </div>
        </div>

        <div className = "facilities">
          <div className = "online">
            <img
              src = {Online_img}
              alt = ""
            />
            <h2>Daily live classes</h2>
            <p>
              Chat with educator, ask questions,
               answer live polls, and get your 
               doubts cleared - all while the class is going on
            </p>
          </div>
          <div className = "quiz">
            <img
              src = {Quiz_img}
              alt = ""
            />
            <h2>Practice and revise</h2>
            <p>
              Learning isn't just limited to classes with our 
              practice section, mock tests and lecture notes 
              shared as PDFs for your revision
            </p>
          </div>
          <div className = "access">
            <img
              src = {Anywhere_img}
              alt = ""
            />
            <h2>Learn anytime, anywhere</h2>
            <p>
              you  can access to all our live and
             recorded classes to watch from the 
             comfort of any of your devices
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
