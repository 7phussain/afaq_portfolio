import React, { useEffect, useState } from 'react';
import 'intersection-observer'; // Import the polyfill if needed
import '../StylingSheets/Tools.css';
import ReactPic from '../assets/images/SKILLS/React.jpg';
import React_Native from '../assets/images/SKILLS/ReactNative.png';
import JavaScript from '../assets/images/SKILLS/JS.png';
import mongo from '../assets/images/SKILLS/mongo.jpg';
import Express from '../assets/images/SKILLS/express.png';
import NodeJSs from '../assets/images/SKILLS/nide.jpg';
import PostgreSql from '../assets/images/SKILLS/postgresql.webp';
import Firebase from '../assets/images/SKILLS/firebase.png';
import csss from '../assets/images/SKILLS/css.jpeg';
import Redux from '../assets/images/SKILLS/redux.png';
import Py from '../assets/images/SKILLS/py.png';
import AI from '../assets/images/SKILLS/AI.jpg';
import vision from '../assets/images/SKILLS/vision.jpg';
import JAVA from '../assets/images/SKILLS/java.png';
import OOP from '../assets/images/SKILLS/oop2.png';
import PHP from '../assets/images/SKILLS/php.png';
import HTML from '../assets/images/SKILLS/html.jpeg';
import MUI from '../assets/images/SKILLS/mui.png';
import CC from '../assets/images/SKILLS/Csharp.png';
import RestAPI from '../assets/images/SKILLS/RestApi.png';
import Sockets from '../assets/images/SKILLS/socket.png';

const skillsData = [
  {
    name: 'React Js',
    pic: ReactPic,
    perc: 'Expert',
  },
  {
    name: 'React Native',
    pic: React_Native,
    perc: 'Expert',
  },
  {
    name: 'Java Script',
    pic: JavaScript,
    perc: 'Expert',
  },
  {
    name: 'Mongo DB',
    pic: mongo,
    perc: 'Expert',
  },
  {
    name: 'Express Js',
    pic: Express,
    perc: 'Expert',
  },
  {
    name: 'Node JS',
    pic: NodeJSs,
    perc: 'Expert',
  },
  {
    name: 'Firebase',
    pic: Firebase,
    perc: 'Expert',
  },
  {
    name: 'Rest APIS',
    pic: RestAPI,
    perc: 'Expert',
  },

  {
    name: 'CSS',
    pic: csss,
    perc: 'Expert',
  },
  {
    name: 'HTML',
    pic: HTML,
    perc: 'Expert',
  },
  {
    name: 'Material UI',
    pic: MUI,
    perc: 'Expert',
  },
  {
    name: 'Redux',
    pic: Redux,
    perc: 'Intermediate',
  },
  {
    name: 'Python',
    pic: Py,
    perc: 'Intermediate',
  },
  {
    name: 'AI',
    pic: AI,
    perc: 'Intermediate',
  },

  {
    name: 'JAVA',
    pic: JAVA,
    perc: 'Expert',
  },
  {
    name: 'OOP',
    pic: OOP,
    perc: 'Expert',
  },

  {
    name: 'Sockets.io',
    pic: Sockets,
    perc: 'Intermediate',
  },
];

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    const boxElement = document.getElementById('box');
    observer.observe(boxElement);

    // Cleanup the observer
    return () => {
      observer.unobserve(boxElement);
    };
  }, []);
  return (
    <div id="tools">
      <div className="space"></div>
      <div className="tools">
        <h2 className="titleName">"Discover my diverse skill set"</h2>
        <div
          id="box"
          className={`container ${isVisible ? 'visible' : ''}`}
        >
          {skillsData.map((data, index) => (
            <div className="skillCOntainer" key={index}>
              <img className="img" src={data.pic} alt={data.name} />
              <h4 className="skillName">{data.name}</h4>
              <p className="Experties">{data.perc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
