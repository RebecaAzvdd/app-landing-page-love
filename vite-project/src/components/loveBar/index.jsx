import React from "react";
import Button from "../atoms/button";
import Input from "../atoms/input";

// Recebe name1, setName1, etc. da Home (Lifting State Up)
// Isso permite que o clique no Famoso atualize o input aqui dentro.
export default function LoveBar({ name1, setName1, name2, setName2, onCalculate, loading }) {

  // Estilos Inline 
  const sectionStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#FDFBF9" // Fundo leve para diferenciar a seção
  };

  const calculatorCardStyle = {
    backgroundColor: "#FFF",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    marginTop: "20px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <section id="calculator" style={sectionStyle}>
      <div className="container">
         {/* Tag visual igual ao design */}
        <span style={{ 
            color: "#D7CCC8", 
            fontWeight: "bold", 
            fontSize: "0.8rem", 
            textTransform: "uppercase", 
            display: "block", 
            marginBottom: "5px" 
        }}>
          DESTINO
        </span>

        <h1 style={{ color: "#9E7F68", fontSize: "2.5rem", marginBottom: "10px", fontFamily: '"Playfair Display", serif' }}>
          Calculadora do Amor
        </h1>
        <p style={{ color: "#6D4C41", marginBottom: "30px" }}>
          Descubra a compatibilidade perfeita entre dois corações através da magia dos nomes.
        </p>

        <div style={calculatorCardStyle}>
          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <div style={{ flex: 1, minWidth: "250px" }}>
                <Input
                  label="Seu Nome"
                  placeholder="Digite seu nome..."
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                />
              </div>

              <div style={{ flex: 1, minWidth: "250px" }}>
                <Input
                  label="Nome do Parceiro(a)"
                  placeholder="Nome do parceiro(a)..."
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                />
              </div>
            </div>

            <Button width="100%" type="submit" disabled={loading}>
              {loading ? "Consultando as Estrelas..." : "Calcular Compatibilidade"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}