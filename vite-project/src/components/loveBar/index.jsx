import { useState } from "react";
import { calculateLove } from "../../controller/loveApi";
import Button from "../atoms/button";
import Input from "../atoms/input";

export default function LoveBar() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const sectionStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    textAlign: "center",
  };

  const calculatorCardStyle = {
    backgroundColor: "#FFF",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    marginTop: "20px",
  };

  const handleCalculate = async (e) => {
    if (e) e.preventDefault();

    if (!name1.trim() || !name2.trim()) {
      alert("Preencha ambos os nomes para consultar o destino!");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await calculateLove(name1, name2);
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({
        percentage: "X",
        result: "Erro na API.",
        fname: name1,
        sname: name2,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section style={sectionStyle}>
        <h1
          style={{ color: "#9E7F68", fontSize: "2.5rem", marginBottom: "10px" }}
        >
          Calculadora do Amor
        </h1>
        <p style={{ color: "#8D6E63", marginBottom: "30px" }}>
          Título, slogan e o formulário principal de cálculo.
        </p>

        <div style={calculatorCardStyle}>
          <form onSubmit={handleCalculate}>
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
                  placeholder="Seu nome..."
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
              {loading
                ? "Consultando as Estrelas..."
                : "Calcular Compatibilidade"}
            </Button>
          </form>
        </div>
      </section>

      {result && (
        <section style={sectionStyle}>
          <div
            style={{
              backgroundColor: "#9E7F68",
              color: "#FFF",
              padding: "30px",
              borderRadius: "20px",
              marginTop: "40px",
            }}
          >
            <h2 style={{ margin: 0 }}>
              Resultado da Compatibilidade com {result.sname}
            </h2>
            <div
              style={{
                fontSize: "4rem",
                fontWeight: "bold",
                margin: "10px 0",
                animation: "fadeIn 1s ease-out",
              }}
            >
              {result.percentage}%
            </div>
            <p style={{ fontSize: "1.2rem" }}>{result.result}</p>
          </div>
        </section>
      )}
    </>
  );
}
