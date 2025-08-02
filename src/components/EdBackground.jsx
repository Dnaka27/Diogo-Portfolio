import React, { useState } from 'react';
import './EdBackground.css';

const Skills = () => {
  const [activeSection, setActiveSection] = useState('EBCertifies');

  const handleMouseEnter = (section) => {
    setActiveSection(section);
  };

  // Array de cursos/certificados
  const certificates = [
    'DIO: Amazon Web Services',
    'DIO: Potência Tech Data Science',
    'Coursera: Google Data Analytics',
    'Udemy: Python Bootcamp',
    'Udemy: Fullstack Web Bootcamp',
    'Cubos Academy: Data Analysis',
  ];

  return (
    <section id='EB' className='sectionMain'>
      <h2 className='titleSection'>ACADEMIC BACKGROUND</h2>
      <div className='EBContent'>
        <div className='EBOptions'>
          <div
            className={`EBCertifies ${
              activeSection === 'EBCertifies' ? 'EBActive' : 'EBOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBCertifies')}
          >
            <h3>Courses/Certificates</h3>
          </div>
          <div
            className={`EBAcademic ${
              activeSection === 'EBAcademic' ? 'EBActive' : 'EBOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBAcademic')}
          >
            <h3>Academic</h3>
          </div>
        </div>
        <div className='EBCols'>
          <div
            className={`EBCertifiesCol ${
              activeSection === 'EBCertifies' ? 'EBColActive' : 'EBColOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBCertifies')}
          >
            <div className='EBCertifiesText'>
              <ul className='EBCertifiesList'>
                {certificates.map((certificate, index) => (
                  <li key={index}>{certificate}</li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className={`EBAcademicCol ${
              activeSection === 'EBAcademic' ? 'EBColActive' : 'EBColOff'
            }`}
            onMouseEnter={() => handleMouseEnter('EBAcademic')}
          >
            <p className='textDescription'>
              Information Technology Management (GTI) student at IFSC in
              Florianópolis. In the programming part, I carried out programming
              logic using <span className='styleTech styleCPP'>C++</span> and object orientation using <span className='styleTech styleJV'>Java</span>. Furthermore, I learned about network and management basics in disciplines such as: Network infrastructure, systems development processes, people management, and economic and financial management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
