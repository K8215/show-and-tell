import { React, useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './assets/scss/main.min.css';
import Fossils from './assets/data/db.json';
import Home from './pages/Home';
import Presentation from './pages/Presentation';

function App() {
  const [sectionNav, setSectionNav] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = Fossils.fossilTypes; 

  const showSectionNav = ()=> {
    setSectionNav(true);
  };
  const hideSectionNav = ()=> {
    setSectionNav(false);
  };

  const changeCurrentSection = (e)=> {
    const newSection = e.target.getAttribute('data-id');
    setCurrentSection(newSection);
  }

  return (
    <div className="app-container">
      <BrowserRouter>
        <div className="navigation">
          <nav>
            <Link to="/" onClick={hideSectionNav}><img src="./icons/home.png" alt="home icon" /></Link>
            <Link to="/presentation" onClick={showSectionNav}><img src="./icons/monitor.png" alt="presentation icon" /></Link>
          </nav>

          {sectionNav && (
            <div className="btn-wrap">     
              {sections.map((section, index) => (  
                <button className='btn' onClick={changeCurrentSection} data-id={index} key={index}>{index + 1}</button>
              ))}
            </div>
          )}      
        </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/presentation/*" element={<Presentation currentSection={currentSection}/>} />
        </Routes>
      </BrowserRouter>        
    </div>
  );
}

export default App;
