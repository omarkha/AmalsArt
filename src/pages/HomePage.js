import React from "react";
import { Zoom } from "react-reveal";
import paintingKnights from "../media/painting-w.jpg";
import paintingEyes from "../media/painting-x.jpg";
import paintingY from "../media/painting-y.jpg";
import lamp from "../media/lamp.png";
const HomePage = () => {
  return (
    <div>
      <div className="container">
        <div className="container">
          <Zoom>
            <div className="usp">
              <h3>
                De-Stress and Get Inspired as You Delve Into Traditional
                Mesopotamian Artwork
              </h3>
              <h5>By Artist Amal Maseer</h5>
              <img src={lamp} />
            </div>
          </Zoom>
        </div>

        <section className="artwork-examples">
          <div className="art-example">
            <div
              className="img"
              style={{ backgroundImage: `url(${paintingY})` }}
            />
            <div className="text">
              <h3>Refresh Your Creativity</h3>
              <p>
                Picture yourself sitting at the laptop doing your work, stress
                starts seeping to your muscles, and the creative juices are
                running out. But you look at your walls and notice the
                traditional Mesopotamian paintings you hung up there. As the
                aesthetics capture your interest, a lovely feeling emerges
                within your soul. As you delve into the picture on your wall,
                sensing the spirit of a place captured somewhere far and a
                moment in a time that is so rich in culture, it refreshes your
                soul every time. Thats the power of art.
              </p>
            </div>
          </div>
          <div className="art-example">
            <div
              className="img"
              style={{ backgroundImage: `url(${paintingKnights})` }}
            />
            <div className="text">
              <h3>Make Home Feel Like Home</h3>
              <p>
                Traditional values are in our genes. My paintings have a
                consistent theme of old times that are more simpler and more
                pleasant. The authenticity of these paintings and originality
                will have you feeling like you’re in a true, cultured and
                customized home. Having one of these painting on your wall adds
                a hint of hospitality to your house or apartment. So you can
                feel cozy, comfortable and at home!
              </p>
            </div>
          </div>
          <div className="art-example">
            <div
              className="img"
              style={{ backgroundImage: `url(${paintingEyes})` }}
            />
            <div className="text">
              <h3>Our Story</h3>
              <p>
                The ArtBridge was first founded in 19xx in Baghdad, Iraq by me
                and some of my friends from the US. Our purpose was introducing
                the West and particularly the US to Iraqi Art. But the world
                changed drastically since then, people began to sink into their
                technological gadgets, and stress started to seep into peoples
                lives. So I figured I can help with my style of traditional
                painting to reduce stress for you, make you feel more
                comfortable and offer you relaxed energy. At The ArtBridge we
                value tradition, friendliness, and spirituality. We strive to
                deliver art that inspires you spiritually in your personal and
                professional life by adding inspiration and sophistication to
                your environment. My mentor Hafiz Al-Doroubi was the student of
                renown Spanish artist Salvador Dali, and so the artwork that I
                create merges the best of Western art concepts to the richness
                of Mesopotamian history and culture.
              </p>
            </div>
          </div>
        </section>

        <section className="CTA">
          <h3 className="px-5">
            View my portfolio, read more about me, or See What I Have In Store
            Today! Right Now{" "}
          </h3>
          <div className="btn">Shop</div>

          <div className="btn ">Portfolio</div>

          <div className="btn ">About</div>
        </section>
        <section className="CTA-email">
          <h3>
            To enjoy these painting further I suggest you listen to my
            carefully-currated Mesopotamian music playlist.
          </h3>
          <h5>
            Enter Your Email Address and Recieve a Link to the finest
            Mesopotamian music!
          </h5>
          <input type="text" placeholder="This is my Email..." />
          <div className="btn ">Send Me Mesopotamian Music</div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
