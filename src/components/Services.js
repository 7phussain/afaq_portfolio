import React from 'react';
import '../StylingSheets/Services.css';
import Web_Development from '../assets/images/web.png';
import Mobile_Apps from '../assets/images/reactNative.png';
import MERN_Development from '../assets/images/MERN.jpg';
import language from '../assets/images/python.jpg';
import OOP_in_JAVA from '../assets/images/oop.png';
import Computer_Vision from '../assets/images/vision.png';
import webDesign from '../assets/images/webDesign.jpeg';
import { Link } from 'react-router-dom';
const serviceData = [
  {
    name: 'Web Development',
    urlname: 'Web_Development',
    srcPic: Web_Development,
    disc: 'I develop Web apps using React JS+ Firebase DB + Material UI + Redux + CSS. Responsive Desgin with attractive UI using Animations',
  },
  {
    name: 'Andriod & IOS Mobile Apps',
    urlname: 'Andriod_&_IOS_Mobile_Apps',
    srcPic: Mobile_Apps,
    disc: 'I develop Andriod & IOS apps using React Native+ Firebase DB or Mongo DB or PostGresQl  + Material UI + Redux + NODE JS+ Express JS+ CSS. Responsive Desgin with attractive UI',
  },
  {
    name: 'Website Design',
    urlname: 'Website_Design',
    srcPic: webDesign,
    disc: 'I pride myself on being experts in website design. My passion for creating visually stunning and user-friendly websites is unmatched.',
  },
  {
    disc: 'I specialize in MERN (MongoDB, Express.js, React.js, and Node.js) development, delivering cutting-edge web applications with seamless integration',
    name: 'MERN Development',
    urlname: 'MERN_Development',
    srcPic: MERN_Development,
  },
  {
    disc: 'I have expertise in C, C#, and Python programming languages, and I am proficient in handling various tasks within these languages.',
    srcPic: language,
    name: 'C,Python Code',
    urlname: 'Python_Code',
  },
  {
    disc: 'I have a strong understanding of Object-Oriented Programming (OOP) principles in Java and I am proficient in completing various tasks within this language',
    srcPic: OOP_in_JAVA,
    name: 'OOP in JAVA',
    urlname: 'OOP_in_JAVA',
  },
];

const Services = () => {
  return (
    <div className="services" id="services">
      <div style={{ marginBottom: '6vw' }}></div>
      <div>
        <h1 className="title" style={{ marginBottom: '2vw' }}>
          "I provide a comprehensive range of high-quality software
          services"
        </h1>

        <div className="servicesContainer">
          {serviceData.map((data, id) => {
            return (
              <Link key={id} to={`/serviceDetail/${data.urlname}`}>
                <div className="card">
                  <div className="cardup">
                    <img
                      className="cardImg"
                      src={data.srcPic}
                      alt={data.srcPic}
                    />
                  </div>
                  <div className="carddown">
                    <h5 className="cardTitle"> {data.name}</h5>
                    <p className="dis">{data.disc}</p>
                    <button className="cardBtn">
                      {' '}
                      check Details
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
