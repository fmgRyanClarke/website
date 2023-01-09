import logo from './logo.png';
import candyflossLogo from './candyflossLogo.png';
import ctrlfLogo from './ctrlfLogo.png';
import inkdLogo from './inkdLogo.png';
import kotLogo from './kotLogo.png';
import Tabs from "./components/Tabs";
import ImageTabs from './components/ImageTabs';
import './App.css';

const cvData = [
  { role: "Guidewire Developer", date: "November 2021 - Present", description: "I was lucky enough to land my self a job working for FMG after arriving in NZ. Getting my first full experience of an agile workflow within a large company. I managed to expand my skill set learning from many talented programmers." },
  { role: "Freelance Software Developer", date: "August 2020 - November 2021", description: "After graduating and taking on freelance development I have experienced repeating contracts from clients. I have also solo created projects and published to Google Play Store." },
  { role: "Computing Student", date: "September 2017 - May 2020", description: "Throughout this course I was able to build skills in many programming languages and use multiple different development engines, as well as getting experience similar to that of industry standard practice. Working in a team, in a studio, following agile philosophy, all to create complete products." },
  { role: "Information Technology Support Technician", date: "February 2013 - August 2017", description: "Provided support for the Social Sciences and International Studies section at the University of Exeter. Worked in a small team to provide quick and personal support to staff members. Handled software installation, hardware setup and repair, AV setup, connection and editing." },
]

const bio = "I specialise in Gameplay systems for video games but am capable of creating a  plethora of development solutions for your software needs.  I am well versed in multiple programming languages, design engines and IDE's.I am currently working full time for FMG Insurance in New Zealand as a Guidewire Developer. Feel free to contact me with any enquiries."

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tabs>
          <div label="Bio">
            <div className='column-text'>
              <p>I specialise in Gameplay systems for video games but am capable of creating a  plethora of development solutions for your software needs.  I am well versed in multiple programming languages, design engines and IDE's.</p>
              <p>I am currently working full time for FMG Insurance in New Zealand as a Guidewire Developer.</p>
              <p>Feel free to contact me with any enquiries.</p>
            </div>
            Click <a href='/2022Resume.pdf' download>here</a> to download my CV
          </div>
          <div label="Projects">
            <ImageTabs>
              <div label="Candyfloss" image={candyflossLogo}>
                Candyfloss details
              </div>
              <div label="ctrl+f" image={ctrlfLogo}>
                ctrl+f details
              </div>
              <div label="KoT" image={kotLogo}>
                kot details
              </div>
              <div label="inkd" image={inkdLogo}>
                inkd details
              </div>
              <div label="DreamDiary" image={ctrlfLogo}>
                DreamDiary details
              </div>
              <div label="Explorer" image={ctrlfLogo}>
              Orrery Explorer details
              </div>
              <div label="Colour Code" image={ctrlfLogo}>
                Colour Code
              </div>
            </ImageTabs>
          </div>
          <div label="Contact">
            Contact details here
          </div>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
