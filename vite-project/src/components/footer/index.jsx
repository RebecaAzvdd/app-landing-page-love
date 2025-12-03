import React from "react";
import instagramIcon from "../../assets/instagram.png";
import twitterIcon from "../../assets/twitter.png";
import facebookIcon from "../../assets/facebook.png";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F5ECE6",
        padding: "40px 20px",
        color: "#4A3B2D",
        fontFamily: "Arial, sans-serif",
        width: "100vw",   
        position: "relative",  
        left: "49%",        
        marginLeft: "-50vw", 
        boxSizing: "border-box",
        marginTop: "40px",
        top: "50px", 
        marginBottom: "-50px", 
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div style={{ width: "30%", minWidth: "200px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>♡ Calculadora do Amor</h3>
          <p style={{ fontSize: "14px" }}>Descubra a magia da compatibilidade e deixe o amor guiar seu caminho.</p>
        </div>

        <div style={{ width: "30%", minWidth: "200px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>Links Rápidos</h3>
          <a style={linkStyle}>Sobre Nós</a>
          <a style={linkStyle}>Como Funciona</a>
          <a style={linkStyle}>Privacidade</a>
          <a style={linkStyle}>Termos de Uso</a>
        </div>

        <div style={{ width: "30%", minWidth: "200px" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>Redes Sociais</h3>

          <div style={{ display: "flex" }}>
            <span style={iconBox}><img src={instagramIcon} alt="Instagram" style={iconImg} /></span>
            <span style={iconBox}><img src={twitterIcon} alt="Twitter" style={iconImg} /></span>
            <span style={iconBox}><img src={facebookIcon} alt="Facebook" style={iconImg} /></span>
          </div>
        </div>
      </div>

      <p style={{
          marginTop: "25px",
          paddingTop: "15px",
          fontSize: "13px",
          borderTop: "1px solid #D7CCC8",
          textAlign: "center",
        }}
      > © 2025 Calculadora do Amor. Feito com ♡ para você.</p>
    </footer>
  );
}
const linkStyle = {
  display: "block",
  marginBottom: "6px",
  textDecoration: "none",
  color: "#4A3B2D",
  fontSize: "14px",
};
const iconBox = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  border: "1px solid #D7CCC8",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "10px",
  background: "#FFF",
  overflow: "hidden",
  cursor: "pointer",
};
const iconImg = {
  width: "22px",
  height: "22px",
  objectFit: "contain",
};