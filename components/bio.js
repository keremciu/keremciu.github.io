import Hero from "./hero";
import Tippy from "@tippyjs/react";

export default function Bio() {
  return (
    <div data-style="secondary" className="wrapper">
      <div className="container">
        <section>
          <Hero
            label="LIFELONG LEARNER"
            title="biography"
            description={
              <span>
                playing with words, singing nonsense or changing my look often
                helps me
                <br />
                express my inner change to the mother earth and earthlings
              </span>
            }
          />
        </section>
        <div className="textwrapper">
          <div className="longtext row">
            <div className="column">
              <p>
                Happy to see that you’d like to know more about me.
                <br />
                  In our sometimes chaotic world, I often feel like a bit of a wanderer.
                  I adopt a collective mindset to navigate through ambiguous chaos, aiming for harmony.
              </p>
              <p>
                I believe sharing what we have can break down the walls between us
                and help us discover where we belong.
              </p>
              <p>
                When I was little, my curiosity took me to the game universe. I
                played games then{" "}
                <Tippy
                  theme="light"
                  content={
                    <div className="tooltipcontent">
                      <h3>Game patches</h3>
                      <p>
                        my first digital creations were game patches for a
                        soccer game called FIFA. You can see one of them{" "}
                        <a
                          target="_blank"
                          rel="license noopener noreferrer"
                          href="https://soccercenter.net/dosyalar/fifa-07-08-edition_1385"
                        >
                          here
                        </a>{" "}
                        from 2007.
                      </p>
                      <hr />
                      <p>
                        I created a website to share my knowledge about game
                        patches, this was my very first website. You can see it{" "}
                        <a
                          target="_blank"
                          rel="license noopener noreferrer"
                          href="https://keremciu.github.io/first-website/"
                        >
                          here
                        </a>{" "}
                        🤦‍♂️
                      </p>
                    </div>
                  }
                  interactive
                >
                  <strong className="tooltiptrigger">changed</strong>
                </Tippy>{" "}
                what I played. This universe has driven me to become a
                self-taught developer who has a design spirit inside. I like to
                share what I learn on my way.
              </p>
              <p>
                Thanks to the internet and freelance web projects, I started
                working early then I studied Visual Communication Design and
                practiced different visual disciplines.
              </p>
            </div>
            <div className="column second">
              <p>
                On the professional side, I'm trying to call myself a React
                enthusiast and an evangelist of Design Standards.
              </p>
              <p style={{ width: "101%" }}>
                Throughout my entire career, I've built many{" "}
                <Tippy
                  theme="light"
                  content={
                    <div className="tooltipcontent">
                      <h3>Time savers</h3>
                      <p>
                        I was lucky to work on projects related to both frontend
                        and design. You can find many plugins/scripts on my{" "}
                        <a
                          target="_blank"
                          rel="license noopener noreferrer"
                          href="https://github.com/keremciu/"
                        >
                          GitHub
                        </a>
                        .
                      </p>
                      <hr />
                      <p>
                        My passion comes from communication. I love talking and
                        underlying how we'd like to work together then it's easy
                        to create some useful tools to save time!
                      </p>
                    </div>
                  }
                  interactive
                >
                  <strong className="tooltiptrigger">bridges</strong>
                </Tippy>{" "}
                between frontend and design. I am a good observer when it comes
                to identifying communication issues between people / tools.
              </p>
              <p>
                I believe working together will be like playing with Legos if we
                build a structure with well-defined constraints.
              </p>
              <p>
                On the social side, I feel a mix of a carpenter and a koala. You
                might find me trying to be a spiritual man at a table full of
                rational people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .textwrapper {
          margin: 0 auto 4rem;
        }
        .tooltipcontent {
          padding: 4px 18px 10px;
        }
        .longtext {
          background: var(--bg-color);
          border-radius: 1rem;
          color: var(--heading-color);
        }
        .longtext a {
          // color: white;
        }
        .longtext a:hover {
          text-decoration: none;
        }
        .longtext .tooltiptrigger {
          font-weight: 600;
          text-decoration-thickness: .125em!important;
          text-decoration: underline;
        }
        .longtext .tooltiptrigger:hover {
          text-decoration: none;
        }
        .column {
          min-height: 100px;
          max-width: 37rem;
          padding: 3rem 4rem;
        }
        .column.second {
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
          background: var(--secondary-text-bg-color);
        }
        @media (max-width: 1000px) {
          .row {
            margin-left: 0px;
            flex-direction: column;
          }
          .column {
            padding: 1rem 2rem;
          }
          .tooltipcontent {
            font-size: 11px;
            padding: 0px 6px 2px;
          }
        }
      `}</style>
    </div>
  );
}
