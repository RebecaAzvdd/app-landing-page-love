import React from 'react';
import CardPhoto from '../cardPhoto'; 

const CardInfos = ({ title, description, tag, image, isClickable, onClick }) => {
  
  const cardStyle = {
    backgroundColor: '#FFF', 
    borderRadius: '16px',
    padding: '16px',
    width: '260px', // Largura fixa para alinhar no grid
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
    border: '1px solid #E5E0DC',
    cursor: isClickable ? 'pointer' : 'default',
    transition: 'transform 0.2s, box-shadow 0.2s',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  return (
    <div 
      style={cardStyle} 
      onClick={isClickable ? onClick : undefined}
      className="hover-card" // Classe auxiliar para hover (se estiver no CSS)
      onMouseEnter={(e) => {
         if(isClickable) { 
           e.currentTarget.style.transform = 'translateY(-5px)';
           e.currentTarget.style.boxShadow = '0 10px 20px rgba(158, 127, 104, 0.15)';
         }
      }}
      onMouseLeave={(e) => {
         if(isClickable) {
           e.currentTarget.style.transform = 'translateY(0)';
           e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
         }
      }}
    >
      {/* Só renderiza a foto se a prop 'image' for passada (ex: Famosos) */}
      {image && (
        <CardPhoto src={image} height="220px" />
      )}
      
      <div style={{ marginTop: image ? '10px' : '0' }}>
        {tag && (
          <span style={{ 
            background: '#9E7F68', color: '#fff', 
            padding: '4px 10px', borderRadius: '20px', 
            fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase',
            display: 'inline-block', marginBottom: '8px'
          }}>
            {tag}
          </span>
        )}
        
        <h3 style={{ color: '#3E2723', margin: '5px 0', fontSize: '1.2rem', fontFamily: 'serif' }}>
          {title}
        </h3>
        
        {description && (
          <p style={{ color: '#8D6E63', fontSize: '0.9rem', margin: '0' }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardInfos;