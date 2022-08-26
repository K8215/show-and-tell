import React from 'react';

const Photos = (currentType) => {
  const photoList = currentType.currentType.photos;
  const photos = photoList.split(',')

  const openModal = (e) => {
    const photoSrc = e.target.src;
    const photoModal = document.querySelector('.photo-modal');
    var newImg = document.createElement('img');

    newImg.src = photoSrc;    
    photoModal.innerHTML = "";
    photoModal.classList.add("photo-modal--open");
    photoModal.appendChild(newImg);
  }
  const closeModal = () => {
    const photoModal = document.querySelector('.photo-modal');
    photoModal.classList.remove("photo-modal--open");
  }
  
  return (
    <div className="photos">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <button onClick={openModal} className="photo-grid__photo js-photoBtn" key={index}>
            <img src={`./img/${photo}`} alt={`${index}`} />
          </button>
        ))}
      </div> 
    
      <div onClick={closeModal} className="photo-modal"></div>
    </div>   
  )
}

export default Photos