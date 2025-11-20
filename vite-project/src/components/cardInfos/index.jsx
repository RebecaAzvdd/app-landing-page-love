import React from 'react';
import CardPhoto from '../cardPhoto'; 

const CardInfos = ({ title, description, tag, image, isClickable = false, onClick }) => {
  
  const cardStyle = {
    backgroundColor: '#FFF', 
    border: '1px solid #D7CCC8',
    borderRadius: '16px',
    padding: '16px',
    width: '100%',
    maxWidth: '300px', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    cursor: isClickable ? 'pointer' : 'default',
    transition: 'transform 0.2s, box-shadow 0.2s'
  };

  const tagStyle = {
    alignSelf: 'flex-start',
    backgroundColor: '#9E7F68',
    color: '#FFF',
    padding: '4px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold'
  };

  return (
    <div 
      style={cardStyle} 
      onClick={isClickable ? onClick : undefined}
      onMouseEnter={(e) => {
         if(isClickable) { 
           e.currentTarget.style.transform = 'translateY(-5px)';
           e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
         }
      }}
      onMouseLeave={(e) => {
         if(isClickable) {
           e.currentTarget.style.transform = 'translateY(0)';
           e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.05)';
         }
      }}
    >
      {}
      <CardPhoto src={image} />

      <div>
        {tag && <span style={tagStyle}>{tag}</span>}
        <h3 style={{ color: '#3E2723', margin: '10px 0 5px 0' }}>{title}</h3>
        <p style={{ color: '#6D4C41', fontSize: '14px', lineHeight: '1.4' }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardInfos;