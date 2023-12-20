import { useEffect, useState } from "react";
import arch from "./assets/arch.png";
import georges from "./assets/georges.png";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import img6 from "./assets/img6.png";
import div from "./assets/div.png";
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import seven from "./assets/7.png";
import eight from "./assets/8.png";
import person from "./assets/person.png";
import first from "./assets/first p.png";

function App() {
  const [form, setForm] = useState("Start for free");
  const handleForm = () => {
    setForm("Press to enter card");
  };
  useEffect(() => {
    console.log("Free subcriber:", form);
  }, []);
  return (
    <>
      <div className="main-container">
        <header>
          <nav className="visible">
            <span>slite</span>
            <ul>
              <li>Product</li>
              <li>Templates</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Sign In</li>
              <button>Request a demo</button>
              <button onClick={handleForm}>{form}</button>
            </ul>
          </nav>
          <nav className="smart-visible">
            <span>slite</span>
            <button>Request a demo</button>
            <button onClick={handleForm}>{form}</button>
            <ul>
              <li>Product</li>
              <li>Templates</li>
              <li>Pricing</li>
              <li>Blog</li>
              <li>Sign In</li>
            </ul>
          </nav>
        </header>
        <hr className="header-break"/>
        <main>
          <div className="main-text">
            <h1>Bring clarity to your team</h1>
            <p>
              Slite is a modern knowledge base that drives action with
              structured docs,thoughtful collaboration and confident
              decision-making.
            </p>
          </div>
          <div className="main-input">
            <input type="text" placeholder="name@company.com" />
            <button>Start for free</button>
            <img src={arch} />
            <p>8:45 aM - PDT</p>
          </div>
          <figure>
            <div className="main-george">
              <img src={georges} />
              <p>
                <strong>Georges made some changes</strong>
                <br />
                The abnormal guide to remote
              </p>
            </div>
            <div className="main-george">
              <img src={georges} />
              <p>
                <strong>Georges made some changes</strong>
                <br />
                The abnormal guide to remote
              </p>
            </div>
            <div className="main-george">
              <img src={georges} />
              <p>
                <strong>Georges made some changes</strong>
                <br />
                The abnormal guide to remote
              </p>
            </div>
          </figure>
        </main>
        <aside>
          <p>200,000+ teams have found focus with Slite</p>
          <div className="aside-image">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
            <img src={img6} alt="" />
          </div>
        </aside>
        <section>
          <div className="section-header">
            <h2>A home for all of your knowledge.</h2>
            <p>
              Project, knowledge base, process – bring all your work to life in
              Docs.
            </p>
          </div>
          <div className="section-aside">
            <ul>
              <li>Wiki</li>
              <li>Projects</li>
              <li>Processes</li>
              <li>Onboarding</li>
              <li>Meetings</li>
              <li>Team updates</li>
              <li>1:1s</li>
              <li>User research</li>
              <li>More</li>
            </ul>
            <img src={div} alt="" />
          </div>
        </section>
        <div className="templates">
          <div className="templates-header">
            <h3>Beat the blank canvas with Templates</h3>
            <p>
              Ready-to-use Templates for product specs, company handbooks,
              meeting notes and more.
            </p>
            <button>Browse templates</button>
          </div>
          <div className="templates-images">
            <div className="pink-circle">
              <p>chris</p>
            </div>
            <div className="blue-circle">
              <p>Rosie</p>
            </div>
            <div className="templates-figure">
              <figure>
                <img src={one} alt="" />
                <figcaption>Creative brief</figcaption>
              </figure>
              <figure>
                <img src={two} alt="" />
                <figcaption>Employee handbook</figcaption>
              </figure>
              <figure>
                <img src={three} alt="" />
                <figcaption>Weekly reviews</figcaption>
              </figure>
              <figure>
                <img src={four} alt="" />
                <figcaption>Product planning</figcaption>
              </figure>
              <figure>
                <img src={five} alt="" />
                <figcaption>Onboarding checklist</figcaption>
              </figure>
              <figure>
                <img src={six} alt="" />
                <figcaption>Product specs</figcaption>
              </figure>
              <figure>
                <img src={seven} alt="" />
                <figcaption>Talent acquisition</figcaption>
              </figure>
              <figure>
                <img src={eight} alt="" />
                <figcaption>Stand-up meeting</figcaption>
              </figure>
            </div>
            <div className="orange-circle">
              <p>clara</p>
            </div>
          </div>
        </div>
        <div className="ideas">
          <h2>
            Move ideas forward. <br />
            Docs, meet Discussions.
          </h2>
          <p>
            Decisions don't work on their own, and neither does your team. In
            Slite, decision-making and async discussion <br />
            comes built-in, inside Docs. Say goodbye to scattered conversations
            and endless Slack threads.
          </p>
          <button>I want that too</button>
          <div className="video"></div>
        </div>
        <div className="speech">
          <h4>
            Slite let us bring the two most important communication bits in the
            same place: <br />
            documentation & decision-making. The connection between docs and
            <br />
            discussions makes decision-making more efficient, transparent &
            contextualized.
          </h4>
          <p>
            <strong>Sebastien Gendreau</strong> <br /> CPO of AGORAPULSE
          </p>
          <img src={person} alt="" />
        </div>
        <div className="subcription-plan">
          <div className="plan-header">
            <h2>A radical change at a fair price.</h2>
            <p>
              Give Slite a try. Save 16% on annual commitment. Big team? check
              the enterprise plan.
            </p>
            <button>Start for free</button>
            <button>Compare all Plans </button>
          </div>
          <div className="plan-box">
            <div className="plan-box1">
              <h2>Free</h2>
              <p>plan</p>
              <hr />
              <h1>$ 0 /month</h1>
              <h6>up to 50 docs</h6>
            </div>
            <div className="plan-box2">
              <h2>Standard</h2>
              <p>plan</p>
              <hr />
              <h1>$ 6 67/month</h1>
              <h6>per user</h6>
            </div>
          </div>
        </div>
        <div className="team-reviews">
          <h2>What happy teams have to say</h2>
          <div className="review-boxs">
            <div className="box">
              <p className="box-words">
                "The most important thing in a wiki
                <br />
                <span>
                  how tight the edit / collaboration loop is . Most wikis{" "}
                </span>{" "}
                are pretty bad there. But Slite is an example of a wiki that
                allows simultaneous editing."
              </p>
              <div className="box-section">
                <p>
                  <strong>jade rubick</strong>
                  <br />
                  CTO, GREMLIN <br />
                  80+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box-words">
                <span>
                  Communication is key to scale a businesslite is best to keep
                  <br />
                  Easy to use for everyone. Templates to adopt the best
                  practices.
                </span>{" "}
                Summary to stay up to date on all topics."
              </p>
              <div className="box-section">
                <p>
                  <strong>by LEE LIU</strong>
                  <br />
                  CTO, Log DNA <br />
                  150+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box-words">
                "Slite is easier to use on daily basis. We <br /> chose to avoid
                a distracting tool to offer
                <br />
                <span>a place of focus and clarity</span>
                The tips on how to structure our knowledge were also a big
                plus."
              </p>
              <div className="box-section">
                <p>
                  <strong>Thibault Morlot</strong>
                  <br />
                  VP Operations, Shippeo <br />
                  240+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box-words">
                "Slite let us bring the two most important communication bits in
                the same place: documentation & decision-making. The connection
                <br />
                <span>
                  makes decision-making more efficient, transparent &
                  contextualized{" "}
                </span>
              </p>
              <div className="box-section">
                <p>
                  <strong>Sebastien Gendreau</strong>
                  <br />
                  Head of product, AgoraPulse <br />
                  175+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box-words">
                <span>
                  The reasons why certain decisions were made can be found in
                  one place
                </span>{" "}
                scattered across different Slack channels."
              </p>
              <div className="box-section">
                <p>
                  <strong>by Jurgita Paulauskaite</strong>
                  <br />
                  Customer Success, Tymeshift <br />
                  75+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box-words">
                "As we're growing fast, the ease of adoption is a crucial
                element when choosing a new solution. You can see
                <br />
                <span>
                  Slite is more user friendly, and its similarities with Slack
                  make it easier to adopt.
                </span>
              </p>
              <div className="box-section">
                <p>
                  <strong>Martijn Hazelaar</strong>
                  <br />
                  Head of Digital, Vanmoof <br />
                  500+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box-words">
                We switched from Confluence
                <br />
                <span>
                  Slite is easy to use for the entire company, not just the
                  product team.
                </span>{" "}
                and organizes content in Slite.
              </p>
              <div className="box-section">
                <p>
                  <strong>Donald Sipe</strong>
                  <br />
                  Solutions Architect, JobTarget <br />
                  300+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <div className="box">
              <p className="box-words">
                "Perfect example of a product that
                <br />
                <span>
                  delivers the 80/20 rule. No fluff and simple. You give me the
                  top 20% of what I need that gets 80% done.
                </span>
                Great for managing internal teams, simplifying internal docs,
                onboarding docs and easy to find what you need."
              </p>
              <div className="box-section">
                <p>
                  <strong>ERIC FETTNER</strong>
                  <br />
                  Cofounder & COO, THE JOB SAUCE <br />
                  20+ teammates
                </p>
                <img src={first} alt="" />
              </div>
            </div>
            <p className="class">
              Read more <br />
              reviews
            </p>
          </div>
        </div>
        <div className="signin-section">
          <h2>Teams with clarity are teams that thrive.</h2>
          <p>Create space for your team to do their best work</p>
          <button>Sign me up</button>
        </div>
        <footer>
          <div className="footer-nav">
            <ul>
              <li>What it's for</li>
              <li>Knowledge base</li>
              <li>Working remotely</li>
              <li>Fix remote meetings</li>
              <li>Onboarding remotely</li>
              <li>Build human connection</li>
              <li>Handbooks</li>
            </ul>
            <ul>
              <li>How it works</li>
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>What's new</li>
              <li>Help center</li>
              <li>contact support</li>
            </ul>
            <ul>
              <li>Resources</li>
              <li>Templates</li>
              <li>Learn</li>
              <li>Blog</li>
              <li>Startup Bibles</li>
              <li>Remote handbook</li>
              <li>Management handbook</li>
              <li>Download apps</li>
              <li>Chrome extension</li>
            </ul>
            <ul>
              <li>Slite</li>
              <li>About us</li>
              <li>Find us on Twitter</li>
              <li>
                Careers <button>Hiring</button>
              </li>
              <li>Customers</li>
              <li>Press kit</li>
            </ul>
            <ul>
              <li>Compare</li>
              <li>Notion</li>
              <li>Confluence</li>
              <li>Google Docs</li>
              <li>Dropbox Paper</li>
              <li>All comparisons</li>
            </ul>
            <ul className="text">
              <li>Remote letters to read on your own time</li>
              <li>
                <input type="text" placeholder="Whats your email?" />
              </li>
              <li>
                100% homemade, no tricks or ponies or growth hacking nonsense.
                Just remote things we care about with a short surprising insight
                every week. No rush.
              </li>
            </ul>
          </div>
          <hr />
          <div className="bottom-nav">
            <ul>
              <li>Privacy</li>
              <li>Security</li>
              <li>User terms</li>
              <li>Customer terms</li>
            </ul>
            <p>©2022 Slite. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
