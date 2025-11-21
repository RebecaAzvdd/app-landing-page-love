import React, { useState } from 'react';
import '../App.css'; 

// Componentes
import Hero from '../components/hero';
import CardNavigate from '../components/cardNavigate';
import LoveBar from '../components/loveBar';
import CardInfos from '../components/cardInfos';
import Section from '../components/section'; 

// Controller
import { calculateLove } from '../controller/loveApi';

// --- IMPORTAÇÃO DAS IMAGENS LOCAIS (Nomes Corrigidos pelo Print) ---
import cauaImg from '../assets/cauaImg.jpg'; 
import anittaImg from '../assets/anittaImg.jpg';
import neymarImg from '../assets/neymarImg.jpeg'; 
import beyonceImg from '../assets/beyonceImg.jpg';
import chrisImg from '../assets/chrisImg.jpg';
import zendayaImg from '../assets/zendayaImg.jpg';
import michaelImg from '../assets/micahelImg.jpg'; 
import brunaImg from '../assets/brunaImg.jpg';
import lazaroImg from '../assets/lazaroImg.jpg';
import rihannaImg from '../assets/rihannaImg.jpg';
import brunoImg from '../assets/brunoImg.jpeg'; 
import izaImg from '../assets/izaImg.jpg';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const famosos = [

    { id: 1, nome: 'Cauã Reymond', tag: 'Ator', img: cauaImg },
    { id: 2, nome: 'Anitta', tag: 'Cantora', img: anittaImg },
    { id: 3, nome: 'Neymar Jr', tag: 'Atleta', img: neymarImg },
    { id: 4, nome: 'Beyoncé', tag: 'Diva Pop', img: beyonceImg },
 
    { id: 5, nome: 'Chris Hemsworth', tag: 'Ator', img: chrisImg },
    { id: 6, nome: 'Zendaya', tag: 'Atriz', img: zendayaImg },
    { id: 7, nome: 'Michael B. Jordan', tag: 'Ator', img: michaelImg },
    { id: 8, nome: 'Bruna Marquezine', tag: 'Atriz', img: brunaImg },

    { id: 9, nome: 'Lázaro Ramos', tag: 'Ator', img: lazaroImg },
    { id: 10, nome: 'Rihanna', tag: 'Cantora', img: rihannaImg },
    { id: 11, nome: 'Bruno Mars', tag: 'Cantor', img: brunoImg },
    { id: 12, nome: 'Iza', tag: 'Cantora', img: izaImg }
  ];

  const handleCalculate = async (pName1, pName2) => {
    const n1 = pName1 || userName;
    const n2 = pName2 || partnerName;

    if (!n1.trim() || !n2.trim()) {
      alert('Por favor, preencha os nomes na calculadora!');
      document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await calculateLove(n1, n2);
      setResult(data);
      
      setTimeout(() => {
        document.getElementById('result-area')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (error) {
      console.error(error);
      alert('Erro ao consultar os astros.');
    } finally {
      setLoading(false);
    }
  };

  const onFamousClick = (famousName) => {
    setPartnerName(famousName);
    handleCalculate(userName, famousName);
  };

  return (
    <div>
      <Hero />
      <CardNavigate />
      
      <LoveBar 
        name1={userName} setName1={setUserName}
        name2={partnerName} setName2={setPartnerName}
        onCalculate={() => handleCalculate()} 
        loading={loading}
      />

      {result && (
        <section id="result-area" className="section-wrapper container">
          <div className="calculator-card" style={{ backgroundColor: '#9E7F68', color: 'white' }}>
            <h2 style={{ fontSize: '4rem', margin: 0 }}>{result.percentage}%</h2>
            <p style={{ fontSize: '1.5rem', color: '#F2ECE9', fontStyle: 'italic' }}>"{result.result}"</p>
            <p style={{ marginTop: '20px', opacity: 0.8 }}>Compatibilidade entre {result.fname} & {result.sname}</p>
          </div>
        </section>
      )}

      <section id="famous-section" className="section-wrapper container">
        <span className="hero-tag" style={{ background: 'transparent', padding: 0, color: '#D7CCC8' }}>
          CURIOSIDADE
        </span>
        <h2 className="section-title">Compatibilidade com Famosos</h2>
        <p className="section-subtitle">
          Digite o seu nome na calculadora acima e clique num famoso para ver se dá match!
        </p>
        
        <div className="grid-cards">
          {famosos.map(f => (
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
    </div>
  );
}