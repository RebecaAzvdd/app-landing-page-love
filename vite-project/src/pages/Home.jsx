import { useEffect, useState } from "react";
import "../App.css";
import Hero from "../components/hero";
import LoveBar from "../components/loveBar";
import Section from "../components/section";
import Footer from "../components/footer";
import { calculateLove } from "../controller/loveApi";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldCalculate, setShouldCalculate] = useState(false);

  const handleCalculate = () => {
    setShouldCalculate(true);
  };

  const famosos = [
    { id: 1, nome: "Cauã Reymond", tag: "Ator", img: "/cauaImg.jpg" },
    { id: 2, nome: "Anitta", tag: "Cantora", img: "/anittaImg.jpg" },
    { id: 3, nome: "Neymar Jr", tag: "Atleta", img: "/neymarImg.jpeg" },
    { id: 4, nome: "Beyoncé", tag: "Diva Pop", img: "/beyonceImg.jpg" },
    { id: 5, nome: "Chris Hemsworth", tag: "Ator", img: "/chrisImg.jpg" },
    { id: 6, nome: "Zendaya", tag: "Atriz", img: "/zendayaImg.jpg" },
  ];

  useEffect(() => {
    if (!shouldCalculate) return; // impede execução automática

    async function run() {
      if (!userName.trim() || !partnerName.trim()) return;

      setLoading(true);
      const result = await calculateLove(userName, partnerName);
      setResult(result);
      setLoading(false);
    }

    run();
    setShouldCalculate(false); // reseta
  }, [shouldCalculate]);

  const onFamousClick = (famousName) => {
    setPartnerName(famousName);
    handleCalculate(userName, famousName);
  };

  return (
    <div>
      <Hero />
      <LoveBar
        name1={userName}
        setName1={setUserName}
        name2={partnerName}
        setName2={setPartnerName}
        onCalculate={() => handleCalculate()}
        loading={loading}
      />
      {result && (
        <section id="result-area" className="section-wrapper container">
          <div
            className="calculator-card"
            style={{ backgroundColor: "#9E7F68", color: "white" }}
          >
            <h2 style={{ fontSize: "4rem", margin: 0 }}>
              {result.percentage}%
            </h2>

            <p
              style={{
                fontSize: "1.5rem",
                color: "#F2ECE9",
                fontStyle: "italic",
              }}
            >
              "{result.result}"
            </p>

            <p style={{ marginTop: "20px", opacity: 0.8 }}>
              Compatibilidade entre {result.firstName} & {result.secondName}
            </p>

            <p style={{ marginTop: "20px", opacity: 0.8 }}>{result.tips}</p>
          </div>
        </section>
      )}

      <section id="famous-section" className="section-wrapper container">
        <span
          className="hero-tag"
          style={{ background: "transparent", padding: 0, color: "#D7CCC8" }}
        >
          CURIOSIDADE
        </span>
        <h2 className="section-title">Compatibilidade com Famosos</h2>
        <p className="section-subtitle">
          Digite o seu nome na calculadora acima e clique num famoso para ver se
          dá match!
        </p>

        <div className="grid-cards">
          {famosos.map((f) => (
            <Section
              key={f.id}
              title={f.nome}
              tag={f.tag}
              image={f.img}
              description="Clique para testar"
              isClickable
              onClick={() => onFamousClick(f.nome)}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
