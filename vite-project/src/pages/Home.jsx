import React, { useState } from 'react';
import Button from '../components/atoms/button';
import Input from '../components/atoms/input';
import { calculateLove } from '../controller/loveApi'; 
import Section from '../components/section';
import { famosos } from '../types';
import LoveBar from '../components/loveBar';
import Footer from '../components/footer';

const Home = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleFamousClick = (famousName) => {
    if (!name1.trim()) {
      console.log('Por favor, digite seu nome primeiro na calculadora!');
      return;
    }
    setName2(famousName); 
    handleCalculate(); 
  };

  return (
    <div style={{ backgroundColor: '#F9F6F2', minHeight: '100vh', paddingBottom: '50px' }}>
      
      <LoveBar></LoveBar>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {famosos.map((famoso) => (
            
            <Section 
              key={famoso.id}
              title={famoso.nome}
              tag={famoso.tag}
              description={`Signo: ${famoso.signo}. Clique para testar!`}
              isClickable={true} 
              onClick={() => handleFamousClick(famoso.nome)}
            />
          ))}
        </div>
 

      <Footer></Footer>
    </div>
  );
};

export default Home;