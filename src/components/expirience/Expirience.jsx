import React from "react";
import "./expirience.css";
const Expirience = () => {
  return (
    <div>
      <section id="expirience">
        <h5>What Skills I have</h5>
        <h2>My Expirience</h2>

        <div className="container expirience__container">
          <div className="expirience__frontend">
            <h3>Frontend Development</h3>
            <div className="expirience__content">
              <article className="expirience__details">
                <div>
                  <h4>HTML</h4>
                  
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>Css</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>React</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>Word Press</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="expirience__backend">
            <h3>Backend Development</h3>
            <div className="expirience__content">
              <article className="expirience__details">
                <div>
                  <h4>Php</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>MongoDb</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>Mysql</h4>
                  <small className="text-light">Expirienced</small>
                </div>
              </article>
              <article className="expirience__details">
                <div>
                  <h4>Python</h4>
                  <small className="text-light">Expirienced pro</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Expirience;
