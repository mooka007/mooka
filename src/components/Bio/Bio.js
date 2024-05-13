import {Tooltip} from "react-tooltip";

import "./Bio.css";

export const Bio = () => {

  const BIO = [
    {
      year: 2021,
      title: {
        where: "Ben Grir",
        cargo: "1337  (Pool) - C Language",
        description:
          "focus on mastering C programming through rigorous training and hands-on projects. They develop essential programming skills, preparing for diverse tech careers",
      },
    },
    {
      year: 2022,
      title: {
        where: "Youcode",
        cargo: "web Development : PHP & JS Native ",
        description: "Web development with PHP and JavaScript (JS) Native involves building dynamic and interactive websites using PHP for server-side scripting and JavaScript for client-side functionality.",
      },
    },
    {
      year: 2023,
      title: {
        where: "Youcode ",
        cargo: "Mern Stack  Developer",
        description:
          `A MERN stack developer builds web applications using MongoDB, Express.js, React, and Node.js, offering full-stack expertise in JavaScript development`,
      },
    },
    {
      year: 2024,
      title: {
        where: "Alx-africa ",
        cargo: "Software Engineer",
        description:
          "Still studying",
      },
    },
  ];
  
  return (
    <section className="container container-lines">
      <p className="purple-text">
        📚 Bio <span className="purple-smoke-text">- So it started here</span>{" "}
      </p>
      <div className="line"></div>
      {BIO.map((e, id) => (
        <div key={id} className="lines-items">
          <span className="white-text text-figma">{e.year}:</span>{" "}
          <span className="gray-text">
            {e.title.cargo}
            <br />
            {e.title.where} :
          </span>
          <span className="white-text"> {e.title.description}</span>
          {/* <Tooltip
        id={`tooltip-${id}`}
        getContent={() => `This little buddy is ${e.title.description}`}
        place="top"
        effect="float"
        className="custom-theme"
      /> */}
          <div className="line"></div>
        </div>
      ))}
    </section>
  );
};
