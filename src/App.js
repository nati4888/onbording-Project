import './App.css';
import { Steps } from 'intro.js-react';
import React, { useState } from 'react';
import './css/style.css'
import './css/conatct.css'
import './css/services.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import image from "./image/phone.png"
import twiter from "./image/tw2.png"
import fb from "./image/Fb3.png"
import img1 from "./image/tutor1.png"
import img2 from "./image/web2.png"
import globe from "./image/globe.png"

function App() {

  const [enabled, setEnabled] = useState(true)
  const [initialStep, setInitialStep] = useState(0)

  const onExit = () => {
    setEnabled(false)
  }//servive_user service_web
  const steps = [
    {
      element: '#home',
      intro: 'home',
      position: 'left',
    },
    {
      element: '#service',
      intro: 'You can use this button to contact us',
    },
    {
      element: '#servive_user',
      intro: 'You can use this button to contact us',
    },
    {
      element: '#service_web',
      intro: 'You can use this button to contact us',
    },
    {
      element: '#contact',
      intro: 'You can use this button for help',
    },
    {
      element: '#name',
      intro: 'Fill in',
    },
    {
      element: '#email',
      intro: 'You can use this button for help',
    },
    {
      element: '#message',
      intro: 'You can use this button for help',
    },
    {
      element: '#extramesssage',
      intro: 'You can use this button for help',
    },
    {
      element: '#submit',
      intro: 'click here to submit',
    },
    {
      element: '#phone_no',
      intro: 'click here to submit',
    },
    {
      element: '#social_media',
      intro: 'click here to submit',
    },
    {
      element: '#archive',
      intro: 'You can use this button for help',
    },
    {
      element: '#about',
      intro: 'You can use this button for help',
    },
  ];
  return (
    <div>
      <Steps
        enabled={enabled}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
      />

      <nav className="navigation">

        <ul className="navigation menus">
          <li id="home"><a className="menus_items" href="../index.html">Home</a></li>
          <li id="eduacteAndWork"><a className="menus_items" href="../html/Education&work.html">My Life-TIme Education</a></li>
          <li id="service"><a className="menus_items" href="../html/services.html">Services</a></li>
          <li id="contact"><a className="menus_items" href="../html/contact.html">Contact</a></li>
          <li id="archive"><a className="menus_items" href="../html/archive.html">Archive</a></li>
          <li id="about"><a className="menus_items" href="about.html">About</a></li>

        </ul>
      </nav>
      <body class="page">

        <main className="page page_main">
          <div style={s}>
            <h1 style={s}>Home page</h1>
          </div>
          <div className="page_main services">
            <div className="image_description" id="servive_user">
              <img alt="turoring" className="image" src={img1}></img>
              <h1 className="description">TURORING</h1>
              <p>Papers show that if someone want to be a tutor he/she need to a student.
                Based on this research , I am more than qualifed to be a tutor,
                Furthermore I have 3 and more year experience in this tutoring field
              </p>
            </div>

            <div className="page_main columns">
              <table className="package_table">
                <tr className="header"><td className="data">Basic</td></tr>
                <tr className><td>pr-49$/month</td></tr>
                <tr><td>3 hours</td></tr>
                <tr><td>100 Queston</td> </tr>
                <tr><td>Exam Oriented</td></tr>
                <tr><td>Twice a week</td></tr>
                <tr className="grey"><td><a href="../html/contact.html" className="button">Contact</a></td></tr>
              </table>
            </div>
            <div className="page_main columns">
              <table className="package_table">
                <tr className="header"><td className="data">Premium</td></tr>
                <tr className><td>pr-49$/month</td></tr>
                <tr><td>4 hours</td></tr>
                <tr><td>300 Queston</td> </tr>
                <tr><td>Concept Oriented</td></tr>
                <tr><td>4 days a week</td></tr>
                <tr><td><a href="../html/contact.html" className="button">Contact</a></td></tr>
              </table>
            </div>
            </div>
          <div className="page_main services">
            <div className="image_description" id='service_web'>
              <img alt="webdevleoping" className="image" src={img2}></img>
              <h1 className="description">Websites</h1>
              <p> I can develop websites.Starting from frontend to Backend development.
                I develop websites using frontend frameworks like react and backend frameworks
                such as djnago,node and spring boot
              </p>
            </div>

            <div className="page_main columns">
              <table className="package_table">
                <tr className="header"><td className="data">Basic</td></tr>
                <tr><td>pr-500$/season</td></tr>
                <tr><td>java</td></tr>
                <tr><td>networking</td> </tr>
                <tr><td>psychology</td></tr>
                <tr><td>Angular</td></tr>
                <tr><td><a href="../html/contact.html" className="button">Contact</a></td></tr>
              </table>
            </div>
            <div className=" page_main columns">
              <table className="package_table">
                <tr className="header"><td className="data">Premium</td></tr>
                <tr><td>pr-500$/season</td></tr>
                <tr><td>Node in c++</td></tr>
                <tr><td>C# Gui</td> </tr>
                <tr><td>data structure</td></tr>
                <tr><td>html web design</td></tr>
                <tr ><td><a href="../html/contact.html" className="button">Contact</a></td></tr>
              </table>
            </div>
          </div>
        </main>
      </body>

      <header>
        <main className="page page_main">
          <div className="page page_main contacts">
            <form class="fieldset">
                <legend className=" fieldset legend">Contact details</legend>
                <label>Full Name: 
                  <input id="name" placeholder="your name" required className="div fieldset input" type="text" name="name" /></label>
                <label>Email:<br></br>
                  <input id="email" placeholder="email id" required className="div fieldset input" type="email" name="email" /></label>
                <label for="message">Message:
                  <textarea placeholder="What is your requeist?" id="message" required className="textarea" rows="3" cols="10"><br></br></textarea></label>
                <label for="extramesssage">Additional Detail:
                  <textarea id="extramesssage" className="textarea" rows="5" cols="10"></textarea><br></br></label>
                <input id="submit" className="div fieldset submit" type="submit" value="Submit"></input>

            </form>
            <div className="page page_main addresses">
              <ul className=" addresses address">
                <li className="lists"><h2 className=" lists center">Address detail</h2></li>
                <li className="lists"><img alt="globe" src={globe}  /> Addis Ababa University,information system</li>
                <li className="lists" id='phone_no'><img alt="phone" src={image} /> 0972326800</li>
                <li className="lists" id='social_media'>
                  links:
                  <ul className="footer_icons" >
                    <a className="fab" href="https://www.facebook.com"><img alt="fb socialmedia" src={fb} /></a>
                    <a className="fab" href="https://twitter.com/nati_gizachew"><img alt="twitter socialmedia" src={twiter} /></a>
                    <a className="fab" href="https://t.me/Mt0natisD"><img alt="telegram socialmedia" src={twiter} /></a>
                  </ul></li>
              </ul>
            </div>
          </div>
        </main>


      </header>
    </div>
  );
}
export default App;
const s = {
  justifyContent: 'center',
  alignItems: 'center',
}