import React from 'react';

const CardPhoto = ({ src, alt = "Foto", width = "100%", height = "auto" }) => {
  
  const containerStyle = {
    background: 'white',
    padding: '10px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(158, 127, 104, 0.15)', 
    display: 'inline-block',
    // Se a largura for 100%, ocupa o pai. Se for fixa (ex: 350px), respeita o fixo.
    width: width === "100%" ? "100%" : "auto" 
  };

  const imgStyle = {
    width: width === "100%" ? "100%" : width,
    height: height,
    objectFit: 'cover',
    borderRadius: '12px',
    display: 'block'
  };

  return (
    <div style={containerStyle}>
      {/* Se não vier imagem (src), usa um placeholder para não quebrar o layout */}
      <img 
        src={src || "https://placehold.co/400x500/9E7F68/FFF?text=Foto"} 
        alt={alt} 
        style={imgStyle} 
      />
    </div>
  );
};

export default CardPhoto;