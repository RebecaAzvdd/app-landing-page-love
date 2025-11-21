import React from "react";
import CardPhoto from "../cardPhoto";

// Este componente representa um CARD individual dentro da secção de Famosos.
const Section = ({
  title,
  description,
  tag,
  image,
  isClickable = false,
  onClick,
}) => {
  
  const cardStyle = {
    backgroundColor: "#FFF",
    border: "1px solid #E5E0DC", // Ajustado para suavizar a borda (igual ao design)
    borderRadius: "16px",
    padding: "16px",
    width: "100%",
    maxWidth: "280px", // Largura fixa para alinhar no grid
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    cursor: isClickable ? "pointer" : "default",
    transition: "transform 0.2s, box-shadow 0.2s",
    textAlign: "center"
  };

  const tagStyle = {
    alignSelf: "center", // Centralizado para ficar bonito no card
    backgroundColor: "#9E7F68",
    color: "#FFF",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    display: "inline-block",
    marginBottom: "8px"
  };

  return (
    <div
      style={cardStyle}
      onClick={isClickable ? onClick : undefined}
      onMouseEnter={(e) => {
        if (isClickable) {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(158, 127, 104, 0.15)";
        }
      }}
      onMouseLeave={(e) => {
        if (isClickable) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.05)";
        }
      }}
    >
      {image && <CardPhoto src={image} height="220px" />}

      <div style={{ marginTop: image ? "10px" : "0" }}>
        {tag && <span style={tagStyle}>{tag}</span>}
        
        <h3 style={{ color: "#3E2723", margin: "5px 0", fontSize: "1.2rem", fontFamily: '"Playfair Display", serif' }}>
          {title}
        </h3>
        
        <p style={{ color: "#6D4C41", fontSize: "0.9rem", margin: "0" }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default Section;