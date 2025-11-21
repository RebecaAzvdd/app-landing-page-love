import React from 'react';

const CardPhoto = ({ src, alt = "Foto romântica aleatória" }) => {
  
  const randomSrc = src || `https://placehold.co/400x300/F9F6F2/9E7F68?text=Imagem`;

  const style = {
    width: '100%',
    height: '150px', 
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#F9F6F2', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={style}>
      <img 
        src={randomSrc} 
        alt={alt} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default CardPhoto;