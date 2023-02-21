import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Section from './components/Section';
import "../src/css/Reviews.css"
import About from './components/About';
import Booking from './components/Booking';
import "../src/css/form.css"
import "./css/map.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingPage />
        <Section
          className="reviews"
          sectionContent={<>
            <div class="review">
              <p>"Amazing treatment, very satisfying and Beneficial.
                Would highly recommend for aches and pains."</p>
              <p> &#11088; &#11088; &#11088; &#11088; &#11088; </p>
            </div>
            <div class="review">
              <p>"Great advice, friendly and helped with some shoulder/neck issues!"</p>
              <p> &#11088; &#11088; &#11088; &#11088; &#11088; </p>
            </div>
            <div class="review">
              <p>"Fair play, thought I got loose on the weekends but not as loose as
                my quad was after seeing Jack. Service with a smile. Would recommend"</p>
              <p> &#11088; &#11088; &#11088; &#11088; &#11088; </p>
            </div>
            <a href="https://www.facebook.com/JtreatPR" className='underline-on-hover uppercase-text' target="_blank" rel="noreferrer">Leave a review</a></>}
        />

        <Section
          id="about"
          className="aboutMe"
          sectionTitle={"About Me"}
          sectionContent={<About />}
        />

        <Section
          id="booking"
          className="booking"
          sectionTitle="Pricing and Booking"
          sectionContent={<Booking />}
        />

        <Section
          id="contact"
          className="contact"
          sectionTitle="Get in Touch"
          sectionContent={
            <form action="https://formspree.io/f/xbjerogk" method="POST">
              <fieldset>
                <div class="textBoxes">
                  <input type="text" name="name" id="name" placeholder="Name" required />
                  <input type="email" name="email" id="email" placeholder="Email" />
                  <input type="tel" name="tel" id="tel" tel placeholder="Phone" />
                </div>
                <textarea type="text" name="message" id="message" placeholder="Message" required></textarea>
              </fieldset>
              <button id="submitButton" type="submit"> Submit </button>
            </form>
          } />

        <Section
          id="find"
          className="find"
          sectionContent={
            <>
               <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15421.489527495614!2d-3.1411936831092953!3d51.64246599930709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e201f52f8bd05%3A0x653f369623446c16!2sExert%20Fitness!5e0!3m2!1sen!2suk!4v1669923662195!5m2!1sen!2suk"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
            </>
          }
        />

        <footer>&#169; JTreat 2023</footer>

      </main>
    </>

  );
}

export default App;
