import React, { useState, useEffect } from 'react';
import '../App.css'; 

// Componentes
import Hero from '../components/hero';
import LoveBar from '../components/loveBar';
import Section from '../components/section'; 
import Input from '../components/atoms/input';
import Button from '../components/atoms/button';
import Footer from '../components/footer'; 
import ShareSection from '../components/shareSection'; // Se existir, senão comente

// Controller
import { calculateLove } from '../controller/loveApi';

// IMAGENS LOCAIS
import cauaImg from '../assets/cauaImg.jpg'; 
import anittaImg from '../assets/anittaImg.jpg';
import neymarImg from '../assets/neymarImg.jpeg'; 
import beyonceImg from '../assets/beyonceImg.jpg';
import chrisImg from '../assets/chrisImg.jpg';
import zendayaImg from '../assets/zendayaImg.jpg';
import estrelaImg from '../assets/estrela-vazada.png'; 

export default function Home() {
  // --- ESTADOS DA CALCULADORA PRINCIPAL ---
  const [userName, setUserName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [calcData, setCalcData] = useState({ name1: "", name2: "", trigger: false });

  // --- ESTADOS DA SEÇÃO DE FAMOSOS ---
  const [famousUserName, setFamousUserName] = useState('');
  const [famousResult, setFamousResult] = useState(null); // Resultado exclusivo daqui
  const [famousLoading, setFamousLoading] = useState(false);

  const famosos = [
    { id: 1, nome: 'Cauã Reymond', tag: 'Ator', img: cauaImg },
    { id: 2, nome: 'Anitta', tag: 'Cantora', img: anittaImg },
    { id: 3, nome: 'Neymar Jr', tag: 'Atleta', img: neymarImg },
    { id: 4, nome: 'Beyoncé', tag: 'Diva Pop', img: beyonceImg },
    { id: 5, nome: 'Chris Hemsworth', tag: 'Ator', img: chrisImg },
    { id: 6, nome: 'Zendaya', tag: 'Atriz', img: zendayaImg }
  ];

  // --- EFEITO PARA A CALCULADORA PRINCIPAL ---
  useEffect(() => {
    if (!calcData.trigger) return;

    async function runCalculation() {
      setLoading(true);
      try {
        const data = await calculateLove(calcData.name1, calcData.name2);
        if (data) {
          setResult(data);
          setTimeout(() => {
            document.getElementById('result-area')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } catch (error) {
        console.error("Erro API:", error);
      } finally {
        setLoading(false);
        setCalcData(prev => ({ ...prev, trigger: false }));
      }
    }
    runCalculation();
  }, [calcData.trigger]);

  const handleCalculateMain = () => {
    if (!userName.trim() || !partnerName.trim()) {
      alert('Por favor, preencha os nomes na calculadora!');
      return;
    }
    setCalcData({ name1: userName, name2: partnerName, trigger: true });
  };

  // --- LÓGICA ESPECÍFICA PARA FAMOSOS (Resultado Embaixo) ---
  const onFamousClick = async (famousName) => {
    const user = famousUserName.trim() || userName.trim();

    if (!user) {
      alert("Por favor, digite seu nome no campo abaixo das fotos primeiro!");
      document.getElementById('famous-input-field')?.focus();
      return;
    }

    setFamousLoading(true);
    setFamousResult(null); // Limpa resultado anterior para dar feedback visual

    try {
        // Chama a API diretamente aqui
        const data = await calculateLove(user, famousName);
        if (data) {
            // Salva no estado LOCAL desta seção
            setFamousResult({
                percentage: data.percentage,
                message: data.result,
                name1: user,
                name2: famousName
            });
        }
    } catch (error) {
        console.error(error);
        alert('Erro ao calcular compatibilidade.');
    } finally {
        setFamousLoading(false);
    }
  };

  return (
    <div>
      <Hero />
      
      {/* Calculadora Principal (Topo) */}
      <LoveBar 
        name1={userName} setName1={setUserName}
        name2={partnerName} setName2={setPartnerName}
        onCalculate={handleCalculateMain} 
        loading={loading}
      />

      {/* Resultado da Calculadora Principal */}
      {result && (
        <section id="result-area" className="section-wrapper container">
          <div className="calculator-card" style={{ backgroundColor: '#9E7F68', color: 'white' }}>
            <h2 style={{ fontSize: '4rem', margin: 0 }}>{result.percentage}%</h2>
            <p style={{ fontSize: '1.5rem', color: '#F2ECE9', fontStyle: 'italic' }}>"{result.message}"</p>
            <p style={{ marginTop: '20px', opacity: 0.8 }}>
              Compatibilidade entre {calcData.name1} & {calcData.name2}
            </p>
          </div>
        </section>
      )}

      {/* Seção Famosos */}
      <section id="famous-section" className="section-wrapper container">
        <span className="hero-tag" style={{ background: 'transparent', padding: 0, color: '#D7CCC8' }}>
          CURIOSIDADE
        </span>
        <h2 className="section-title">Compatibilidade com Famosos</h2>
        <p className="section-subtitle">
          Descubra sua compatibilidade com casais famosos de Hollywood.
        </p>
        
        {/* 1. Grid de Famosos */}
        <div className="grid-cards" style={{ marginBottom: '50px' }}>
          {famosos.map(f => (
            <div key={f.id}>
              <Section 
                title={f.nome}
                tag={f.tag}
                description="Clique para testar"
                image={f.img}
                isClickable
                onClick={() => onFamousClick(f.nome)}
              />
            </div>
          ))}
        </div>

        {/* 2. Formulário e Resultado Local */}
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
            
            {/* Input e Botão */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Input 
                    id="famous-input-field"
                    label="Seu Nome"
                    placeholder="Digite seu nome..." 
                    value={famousUserName}
                    onChange={(e) => setFamousUserName(e.target.value)}
                    style={{ marginBottom: 0 }} 
                />
                
                <button 
                    onClick={() => {
                        if (!famousUserName.trim()) return alert("Digite um nome!");
                        const random = famosos[Math.floor(Math.random() * famosos.length)].nome;
                        onFamousClick(random);
                    }}
                    disabled={famousLoading}
                    style={{
                        backgroundColor: '#E4A496', 
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '14px 24px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: famousLoading ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        width: '100%',
                        transition: 'opacity 0.2s',
                        marginTop: '5px',
                        opacity: famousLoading ? 0.7 : 1
                    }}
                >
                    <img 
                      src={estrelaImg} 
                      alt="★" 
                      style={{ width: '18px', height: '18px', display: 'block' }} 
                      onError={(e) => e.target.style.display='none'} 
                    />
                    {famousLoading ? "Calculando..." : "Calcular com Celebridade"}
                </button>
            </div>

            {/* 3. RESULTADO DOS FAMOSOS (Aparece logo abaixo do botão) */}
            {famousResult && (
                <div style={{ 
                    marginTop: '30px', 
                    padding: '30px', 
                    backgroundColor: '#FFF', 
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                    textAlign: 'center',
                    border: '1px solid #E4A496',
                    animation: 'fadeIn 0.5s ease-out'
                }}>
                    <h3 style={{ color: '#E4A496', fontSize: '1.2rem', marginBottom: '10px' }}>Resultado do Match</h3>
                    <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#3E2723', lineHeight: '1' }}>
                        {famousResult.percentage}%
                    </div>
                    <p style={{ fontSize: '1.1rem', color: '#6D4C41', margin: '15px 0', fontStyle: 'italic' }}>
                        "{famousResult.message}"
                    </p>
                    <p style={{ fontSize: '0.9rem', color: '#8D6E63' }}>
                        {famousResult.name1} + {famousResult.name2}
                    </p>
                </div>
            )}

        </div>
      </section>

      {/* Seção Compartilhar */}
      <ShareSection />

      <Footer />
    </div>
  );
};