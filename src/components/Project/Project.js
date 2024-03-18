import React from "react";
import "./Project.css";
import Line from "../../assets/images/line-purple.svg";
import TTT from "../../assets/images/TTT.PNG";
import Youtube from "../../assets/images/youtube.png";
import AppLogin from "../../assets/images/App-Login.jpg";
import ipay2 from "../../assets/images/ipay2.PNG";
import pic1 from "../../assets/images/pic1.PNG"
import pic2 from "../../assets/images/pic2.PNG"
import pic3 from "../../assets/images/pic3.PNG"
function Project() {
  return (
    <>
      <p className="purple-text text-center mt-5">
        ‍💻 Open Source -
        <span className="purple-smoke-text"> Visit my latest projects </span>{" "}
      </p>
      <div className="resp">
        {/*  */}
        <section id="projects" className="container container-project">
          <p className="purple-smoke-text text-center m-0"> Web Applications </p>{" "}

          {/* Application dashboard and login */}

          {/* IPay */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">IPay</span>
              <p className="gray-text text-box">
              The IPay website, developed using the MERN stack and styled with Material-UI, offers a streamlined platform for sending money to your list of friends. With its intuitive interface and robust technology, users can easily manage transactions and ensure secure money transfers within their network, making financial interactions convenient and reliable.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={ipay2} className="project-picture" alt="Project React Simple Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/iPay.git" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>React js</li>
                  <li>Mui</li>
                  <li>Express js</li>
                </ul>
              </div>
                <p className="gray-text">
                  Check demo {" "}
                  <img
                    className="mb-1 little-icon-2"
                    src={Youtube}
                    alt="GitHub"
                  />{" "}
                  <a href="https://www.youtube.com/watch?v=yZh67M_WGXE" target="_blank" className="text-figma">Youtube</a> .
                </p>
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/iPay.git" target="_blank" className="white-text text-figma">Github</a>.
              </p>
            </div>
          </div>


          {/* shop store React  */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">Shopping Store</span>
              <p className="gray-text text-box">
                A ReactJS shop store using Reactstrap and Redux for state management. Includes product listings, cart, and checkout process.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={pic1} className="project-picture" alt="Shop Store" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/ecomReact.git" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>React js</li>
                  <li>bootstrap</li>
                  <li>CSS3</li>
                </ul>
              </div>
                <p className="gray-text">
                  Check demo {" "}
                  <img
                    className="mb-1 little-icon-2"
                    src={Youtube}
                    alt="GitHub"
                  />{" "}
                  <a href="https://www.youtube.com/watch?v=W58BsdM4VhU&t=61s" target="_blank" className="text-figma">Youtube</a> .
                </p>
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/ecomReact.git" target="_blank" className="white-text text-figma">Github</a>.
              </p>
            </div>
          </div>

          {/* TTT */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">Tic Tac Toe</span>
              <p className="gray-text text-box">
                A simple Tic tac toe game.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={TTT} className="project-picture" alt="Project React Simple Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/JS-Projects/tree/master/tictactoe" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              {/* <p className="gray-text">
                See also {" "}
                <img
                  className="mb-1 little-icon"
                  src={Visible}
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/JS-Projects/tree/master/tictactoe" target="_blank" className="text-figma">Live</a> view.
              </p> */}
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/Noulamin/Jeu-Tic-Tac-Toe-simple-en-javascript" target="_blank" className="white-text text-figma">Github</a>.
              </p>
            </div>
          </div>

          {/* Managemen-School-App  */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">Managemen-School-App </span>
              <p className="gray-text text-box">
              The Management School App website, built using PHP and JavaScript, offers seamless management solutions for educational institutions. 
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={AppLogin} className="project-picture" alt="Project React Simple Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/Managemen-School-App.git" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>PHP - native </li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/Managemen-School-App.git" target="_blank" className="white-text text-figma">Github</a>.
              </p>
            </div>
          </div>
        </section>

        {/* alx */}
        <section id="projects" className="col container container-project">
          <p className="purple-smoke-text text-center m-0"> Alx - Software Engineer </p>{" "}
          <div>

          {/* Portfolio */}
          <div className="project-header">
            <div className="project-box">
              <span className="white-text">Portfolio</span>
              <p className="gray-text text-box">
                A digital portfolio showcasing web apps and projects.
              </p>
            </div>
            <img className="project-line" src={Line} alt="abajo" />
          </div>
          <div className="project-details">
            <img src={pic3} className="project-picture" alt=" Portfolio" />
            <div className="details-left">
              <p className="gray-text">
                See this Project on{" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="" target="_blank" className="text-figma">Github</a>.
              </p>
              <div className="details-stack">
                <span className="white-text">Technologies</span>
                <ul className="gray-text">
                  <li>React js</li>
                </ul>
              </div>
              {/* <p className="gray-text">
                See also {" "}
                <img
                  className="mb-1 little-icon"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/" target="_self" className="text-figma">Live</a> view.
              </p> */}
              <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/" target="_blank" className="white-text text-figma">Github</a>.
              </p>
            </div>
          </div>


            {/* Renting Car */}
            <div className="project-header">
              <div className="project-box">
                <span className="white-text">Rent-A-Car</span>
                <p className="gray-text text-box">
                  The Rent-A-Car Website is a comprehensive online platform designed to provide a seamless and convenient experience for renting cars. Whether you're planning a business trip, a family vacation, or simply need a temporary vehicle, our website offers a wide selection of cars to suit your needs.
                </p>
              </div>
              <img className="project-line" src={Line} alt="abajo" />
            </div>
            <div className="project-details">
              <img src={pic2} className="project-picture" alt="Shop Store" />
              <div className="details-left">
                <p className="gray-text">
                  See this Game on{" "}
                  <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                  <a href="https://github.com/mooka007/Car/" target="_blank" className="text-figma">Github</a>.
                </p>
                <div className="details-stack">
                  <span className="white-text">Technologies</span>
                  <ul className="gray-text">
                    <li>React js</li>
                    <li>Node js</li>
                    <li>Tailwind</li>
                  </ul>
                </div>
                <p className="gray-text">
                  Check demo {" "}
                  <img
                    className="mb-1 little-icon-2"
                    src={Youtube}
                    alt="GitHub"
                  />{" "}
                  <a href="https://www.youtube.com/watch?v=qtDlWeXQxUI" target="_blank" className="text-figma">Youtube</a> .
                </p>
                <p className="gray-text">
                A little star on {" "}
                <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                <a href="https://github.com/mooka007/Car/" target="_blank" className="white-text text-figma">Github</a>.
              </p>
              </div>
            </div>


            {/* first alx */}
            <div className="project-header">
              <div className="project-box">
                <span className="white-text">printf</span>
                <p className="gray-text text-box">
                  A versatile function in programming languages that outputs formatted text to the console or other output streams
                </p>
              </div>
              <img className="project-line" src={Line} alt="abajo" />
            </div>
            <div className="project-details">
              {/* <img src={WayHome} className="project-picture" alt="Project React Simple Portfolio" /> */}
              <div className="details-left">
                <p className="gray-text">
                  See this Project on{" "}
                  <img
                  className="mb-1"
                  src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                  alt="GitHub"
                />{" "}
                  <a href="https://github.com/mooka007/_printf" target="_blank" className="text-figma">Github</a>.
                </p>
                <div className="details-stack">
                  <span className="white-text">Technologies</span>
                  <ul className="gray-text">
                    <li>C Language</li>
                  </ul>
                </div>
                <p className="gray-text">
                  Check demo {" "}
                  <img
                    className="mb-1 little-icon-2"
                    src={Youtube}
                    alt="GitHub"
                  />{" "}
                  <a href="" target="_blank" className="text-figma">Youtube</a> video.
                </p>
              </div>
            </div>

            

          </div>
          
        </section>
      </div>
    </>
  );
}

export default Project;
