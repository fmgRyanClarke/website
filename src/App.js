import logo from "./images/logo.png";
import candyflossLogo from "./images/candyflossLogo.png";
import ctrlfLogo from "./images/ctrlfLogo.png";
import inkdLogo from "./images/inkdLogo.png";
import kotLogo from "./images/kotLogo.png";
import dreamLogo from "./images/dreamLogo.png";
import explorerLogo from "./images/explorerLogo.png";
import colourLogo from "./images/colourLogo.png";
import Tabs from "./components/Tabs";
import ImageTabs from "./components/ImageTabs";
import "./App.css";
import Project from "./components/Project";

function App() {
  const cfmain = (
    <>
      Candyfloss is a pet project that I worked on in my downtime over the
      course of a year. I iterated on the system design many times with the help
      of a small tester group that I put together providing priceless feedback.
      The game is built in Unity and is available on the Google Play Store. An
      iOS version has been created but I don't currently have an Apple Dev
      account.
      <p>Main aspects of this project: </p>
      <ul>
        <li>Unity Ad implementation</li>
        <li>Persistent data and statistics tracking</li>
        <li>Hand crafted art assets</li>
        <li>Fun and challenging gameplay</li>
        <li>Adaptability for a multitude of screen sizes</li>
      </ul>
      <p>
        I loved working on this project, I put a lot of heart into it and am
        proud of what it came out as. I found much of my time invested in art
        asset creation. Honestly I'm not an artist and it took much longer than
        expected, I found that although I have a respect and appreciation for
        art, it's not something I want to be creating in the long term. I learnt
        a lot of other skills while developing this project specifically around
        finalising development and publishing.
      </p>
    </>
  );

  const ctrlmain = (
    <>
      <p>
        A short story based game where you play as a ctrl+f function helping
        deliver findings to users. You are tasked with unravelling the mystery
        behind the recent catastrophe. It's a casual, chill, story based game.
        Game was designed and built by myself for the Global Game Jam 2021.
      </p>
      <p>For this project I created:</p>
      <ul>
        <li>Story/Gameplay design</li>
        <li>Auto-typing</li>
        <li>Glitch effects</li>
        <li>Highlight and comparison functionality</li>
      </ul>
      <p>
        This was a solo project created in the space of 48 hours. It was
        delivered with all planned systems although there are definitely
        improvements that could have been made. I put in a lot of hours over
        that weekend and saw a spark in myself pushing hard to achieve my set
        goals. I've proven that I can design, create and complete within an
        incredibly restricted time scale.
      </p>
    </>
  );

  const kotmain = (
    <>
      <p>
        Knights of trash was built using Unreal Engine 4 using a combination of
        C++ and Blueprints. The player has limited ammo and must balance
        intercepting enemy shots to refill their ammunition and fighting back
        against their foes.
      </p>
      <ul>
        <p>My main roles on the project:</p>
        <li>Mechanics for main hand weapon (Push, Pull, Grabbing).</li>
        <li>
          Selecting, implementing and running play tests for multiple control
          schemes.
        </li>
        <li>
          Creating a Boss mechanics system that can be easily used by designers
          to come up with boss battles.
        </li>
        <li>Implementing UI.</li>
        <li>
          Creating a room management system that handles room transitions and
          room specific logic.
        </li>
      </ul>
      <p>
        Throughout this project I also played a pivotal role in helping team
        mates with version control holding introductory training sessions and
        providing support throughout. I also drove engagement with our kanban
        board system.
      </p>
    </>
  );

  const inkdmain = (
    <>
      <p>
        Ink'd is a game designed in the Unity Engine using C#. It aims to
        provide short levels so that it can be played in small bursts. It has an
        innovative physics based movement system that helps set it apart from
        other games.
      </p>
      <ul>
        <p>My main roles on the project:</p>
        <li>Movement system.</li>
        <li>Persistent data.</li>
        <li>Hazard creation.</li>
        <li>Rag-doll physics.</li>
        <li>Way point system.</li>
      </ul>
      <p>
        As a side project I have created an AI that is able to play the game
        through some basic levels. The AI checks its surroundings and chooses
        areas to grab if there is a good spot available, weighted towards better
        grabs locations.
      </p>
    </>
  );

  const dreammain = (
    <>
      <p>
        For my dissertation I wanted to look at ways of improving Lucid Dreaming
        Apps. I decided to test whether using speech to text as an instrument to
        record dreams would improve user engagement with the applications. I
        designed the application myself and built it within Android Studio using
        a combination of Java and XML. The application was uploaded to the
        Google Play Store and made available to a limited number of testers via
        a link.
      </p>
      <ul>
        <p>The application consisted of:</p>
        <li>
          Keyboard and speech input methods (Speech input used androids
          SpeechRecognizer which I extended to add functionality).
        </li>
        <li>
          SQLite database for diary entries, questionnaire answers and usage
          data.
        </li>
        <li>Notification reminders.</li>
        <li>
          Ability to e-mail data to researcher (Database was copied and diary
          entries removed before sending to ensure dreams were kept private).
        </li>
      </ul>
      <p>
        Creating this application gave me an interesting looking into possible
        development cycle for mobile applications and all round was an enjoyable
        experience.
      </p>
      <p>
        I have removed the application from the Play Store as the study has
        ended.
      </p>
    </>
  );

  const colourmain = (
    <>
      <p>
        I designed and built a customer controller along with a game to show it
        off. The idea is a guitar hero styled game where the player blocks the
        lights on the controller to block the corresponding lights in the game
        to save a scared caterpillar from being burnt alive. The light beams are
        randomly picked and set at different intervals, over time the speed
        increases to build difficulty.
      </p>
      <p>
        The Controller was digitally modeled and then 3D printed. It connects to
        an arduino using a sketch I created to control it. The game was written
        in C++.
      </p>
    </>
  );

  const explorermain = (
    <>
      <p>
        This project is built using OpenGl and SDL written in C++, the
        application was created from scratch by me. Most models are not my own
        and are used to to demonstrate the application.
      </p>
      <p>
        In Orrery Explorer you are an astral form able to fly around the system
        with a star in your hand, you are able to throw the star and return it
        too you. The goal of this project was to show off my OpenGL
        implementation focusing on how light and shadows react to your light
        source.
      </p>
    </>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tabs>
          <div label="Bio">
            <div className="column-text">
              <p>
                I specialise in Gameplay systems for video games but am capable
                of creating a plethora of development solutions for your
                software needs. I am well versed in multiple programming
                languages, design engines and IDE's.
              </p>
              <p>
                I am currently working full time for FMG Insurance in New
                Zealand as a Guidewire Developer.
              </p>
              <p>Feel free to contact me with any enquiries.</p>
            </div>
            Click{" "}
            <a href="/2022Resume.pdf" download>
              here
            </a>{" "}
            to download my CV
          </div>
          <div label="Projects">
            <ImageTabs>
              <div label="Candyfloss" image={candyflossLogo}>
                <Project
                  title="Candyfloss"
                  videos={[
                    {
                      src: 0,
                    },
                  ]}
                  body={cfmain}
                  link={[{ label: "Play Store", url: "" }]}
                />
              </div>
              <div label="Ctrl+f" image={ctrlfLogo}>
                <Project
                  title="Ctrl+f"
                  images={[
                    {
                      src: 0,
                    },
                  ]}
                  body={ctrlmain}
                  link={[{ label: "Game Jam", url: "" }]}
                />
              </div>
              <div label="KoT" image={kotLogo}>
                <Project
                  title="Knights of trash"
                  videos={[
                    {
                      src: 4,
                    },
                  ]}
                  body={kotmain}
                  link={[
                    {
                      label: "itch.io",
                      url: "https://lazy-mage.itch.io/knights-of-trash",
                    },
                  ]}
                />
              </div>
              <div label="Ink'd" image={inkdLogo}>
                <Project
                  title="Ink'd"
                  videos={[
                    {
                      src: 3,
                    },
                  ]}
                  body={inkdmain}
                  link={[
                    {
                      label: "GitHub",
                      url: "https://github.com/HoaxShark/inkdSourceCode",
                    },
                  ]}
                />
              </div>
              <div label="DreamDiary" image={dreamLogo}>
                <Project
                  title="Dream Diary Study"
                  images={[
                    {
                      src: 1,
                    },
                  ]}
                  body={dreammain}
                  download={[
                    {
                      label: "Paper",
                      url: "DisPaper.pdf",
                    },
                  ]}
                />
              </div>
              <div label="Explorer" image={explorerLogo}>
                <Project
                  title="Orrery Explorer"
                  videos={[
                    {
                      src: 2,
                    },
                  ]}
                  body={explorermain}
                  link={[
                    {
                      label: "GitHub",
                      url: "https://github.com/HoaxShark/comp220-worksheetA",
                    },
                  ]}
                />
              </div>
              <div label="Colour Code" image={colourLogo}>
                <Project
                  title="Colour Code"
                  videos={[
                    {
                      src: 1,
                    },
                  ]}
                  body={colourmain}
                  link={[
                    {
                      label: "GitHub",
                      url: "https://github.com/HoaxShark/CustomController",
                    },
                  ]}
                />
              </div>
            </ImageTabs>
          </div>
          <div label="Contact">
            <h5>
              <p>Auckland, New Zealand</p>
              <p>otiumcodes@gmail.com</p>
            </h5>
          </div>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
