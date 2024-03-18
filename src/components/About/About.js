import "./About.css";
import iconImage from "../../assets/images/logo.jpg";


export const About = () => {
  return (
    <section id="about" className="container container-about">
      <div className="about-right">
        <img src={iconImage} alt="" />
      </div>
      <div className="about-left">
        <span className="purple-text">
            <span className="purple-smoke-text"> Introduction : </span>{" "}
          <span className="text-figma">Mohammed Yassine Marzouki ✋</span> {" "}
        </span>
        <p className="gray-text">
        As a MERN stack developer, I specialize in utilizing MongoDB, Express.js, React, and Node.js to craft dynamic and engaging web applications. My expertise spans both front-end and back-end development, allowing me to create seamless user experiences and robust server-side logic. With a deep understanding of JavaScript, I excel at building scalable and efficient full-stack solutions that drive innovation in web development.</p>
        <div className="d-flex justify-content-around">
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Web development
              </p>
            </p>
            <li className="fw-4">Front-end / Back-end
              <ul className="tech-stack m-0 mx-2">
                <li>React js / Node Js</li>
              </ul>
            </li>
          </ul>
          
        </div>
        <div className="d-flex justify-content-around">
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Tools
              </p>
            </p>
            <li>Git Bash</li>
            <li>MongoDbCompass</li>
            <li>MySql</li>
            <li>Xampp</li>
            <li>Vs Code</li>
            <li>Postman</li>
            <li>Adobe XD</li>
            <li>Trello</li>
          </ul>
          <ul className="tech-stack">
            <p className=" text-center">
              <p className="text-figma m-0">
                Technologies
              </p>
            </p>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>C Language</li>
            <li>PHP</li>
          </ul>
        </div>
      </div>

    </section>
  );
};
