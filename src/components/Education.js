import React from 'react';
import './Education.css';
const Education = () => {
  return (
    <div className="Container" id="education">
      <h2 className="Title">Education:</h2>
      <div className="btmContainer">
        <div className="degree">
          <h5 style={{ textAlign: 'center' }}>Matriculation</h5>
          <p>From: New Muslim Public School</p>
          <p>Data: 2015-2017</p>
          <p>Marks : 793/1100</p>
          <p>Grade : A</p>
          <p>Percentage : 72.09%</p>
        </div>
        <div className="degree">
          <h5 style={{ textAlign: 'center' }}>ICS</h5>
          <p>From: HIMS Degree College Peshawar</p>
          <p>Date: 2017-2019</p>
          <p>Marks : 770/1100</p>
          <p>Grade : A</p>
          <p>Percentage : 81.18%</p>
        </div>
        <div className="degree">
          <h5 style={{ textAlign: 'center' }}>
            BS Software Engineering
          </h5>
          <p>From: Comsats Institute of Information Technology</p>
          <p>Date: 2019-2023</p>
          <p>CGPA : 2.85</p>
          <p>Grade : A</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
