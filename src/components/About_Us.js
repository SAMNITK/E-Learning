import React from 'react'
import "./About_Us.css";
import Profile_Image from "../Images/02.jpg";
import logoImage from "../Images/03.jpg";
import ReactPlayer from "react-player";
function About_Us() {
    return (
    <div className = "about-main">
     <div className = "about-container">
      <div className = "teach-des">
        <img
          className = "about-img"
          src = {Profile_Image}
          alt = ""
        />
      </div>
      <div className = "teach-det">
        <h1 className = "name">Karamjeet Singh</h1>
        <p>B.Tech, M.Tech, B.Ed,<br/>
        15 years teaching experience,<br/>
        Special in mathematics,<br/>
        Currently teaching in "Akal Academy Kauri Wara",<br/>
        Contact : 95014-42503
        </p>
      </div>
      <div className = "channel-des">
        <img
          className = "logo"
          src = {logoImage}
          alt = ""
        />
      </div>
    </div>
    <div className = "about-content">
    <h3>In 2019 I have started my YouTube Channel "PERRY STUDY ONLINE".</h3>
    <p>
        Here we are providing all chapters and excercises of 6th to 10th solved in videos on our YouTube channel and 
        as well as in the form of text on our website. We are provinding NCERT full solved in english as well as in
        punjabi.
    </p>
    <p>
        We are providing free live classes and doubt sessions also.
    </p>
    <p>
        The main motive to create my own YouTube channel and website is to providing free study to all deserving students
        which can not afford those so costly courses. So then i decided to create "PERRY STUDY ONLINE" 
        to provide education free of cost to the students.
    </p>
    </div>
    <h2 className = "about-link"><a href="https://www.youtube.com/channel/UC85GeF8LHrPnqiD-zMlLA_g" target="_blank">Check Out Our YouTube Channel</a></h2>
    <div className = "about-channel">
    <ReactPlayer className = "player" width = "300px" height = "180px" url = "https://www.youtube.com/watch?v=FHxh-5iwmEs&list=PL20UyHE1zWU3kQRPoGrdTVZ1xEMAGgTVR"/>
    <ReactPlayer className = "player" width = "300px" height = "180px" url = "https://www.youtube.com/watch?v=9s4tVOyJdmA&list=PL20UyHE1zWU2hGWKZLmagKku9LcmhLSXU"/>
    <ReactPlayer className = "player" width = "300px" height = "180px" url = "https://www.youtube.com/watch?v=IpRIR9LMjEk&list=PL20UyHE1zWU0jo6EmSwMUDgutbYHEZ8kZ"/>
    </div>
    </div>
    )
}

export default About_Us
