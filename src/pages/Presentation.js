import {React} from 'react';
import Photos from '../components/Photos';
import Fossils from '../assets/data/db.json';

const Presentation = (currentSection) => {
  const fossilTypes = Fossils.fossilTypes; 
  const currentType = fossilTypes[currentSection.currentSection];
      
  return (
    <main className="global-main">
      <div className="content-wrap content-wrap--start">
        <div className="box box--full box--animated">
          <h1>{currentType.title}</h1>
          <p>{currentType.body}</p>
        </div>

        <Photos currentType={currentType}/>
      </div>
    </main>
  )
}

export default Presentation