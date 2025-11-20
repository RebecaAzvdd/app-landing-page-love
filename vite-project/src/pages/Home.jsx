import React, { useState } from 'react';
import Button from '../components/atoms/button';
import Input from '../components/atoms/input';
import CardInfos from '../components/cardInfos'; 
import { calculateLove } from '../controller/loveApi'; 

const Home = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const famosos = [
    { id: 1, nome: 'Anitta', signo: 'Áries', tag: 'A Cantora' },
    { id: 2, nome: 'Neymar', signo: 'Aquário', tag: 'O Atleta' },
    { id: 3, nome: 'Beyoncé', signo: 'Virgem', tag: 'A Diva' },
    { id: 4, nome: 'Caio Castro', signo: 'Capricórnio', tag: 'O Ator' },
  ];

  const handleCalculate = async (e) => {
    if (e) e.preventDefault();
    
    if (!name1.trim() || !name2.trim()) {
      alert('Preencha ambos os nomes para consultar o destino!');
      return;
    }

    setLoading(true);
    setResult(null); 

    try {
      const data = await calculateLove(name1, name2);
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({ percentage: 'X', result: 'Erro na API.', fname: name1, sname: name2 });
    } finally {
      setLoading(false);
    }
  };

  const handleFamousClick = (famousName) => {
    if (!name1.trim()) {
      alert('Por favor, digite seu nome primeiro na calculadora!');
      return;
    }
    setName2(famousName); 
    handleCalculate(); 
  };

  const sectionStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
  };

  const calculatorCardStyle = {
    backgroundColor: '#FFF',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
    marginTop: '20px',
  };

  return (
    <div style={{ backgroundColor: '#F9F6F2', minHeight: '100vh', paddingBottom: '50px' }}>
      
      {}
      <section style={sectionStyle}>
        <h1 style={{ color: '#9E7F68', fontSize: '2.5rem', marginBottom: '10px' }}>
          Calculadora do Amor
        </h1>
        <p style={{ color: '#8D6E63', marginBottom: '30px' }}>
          Título, slogan e o formulário principal de cálculo.
        </p>

        <div style={calculatorCardStyle}>
          <form onSubmit={handleCalculate}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
              
              <div style={{ flex: 1, minWidth: '250px' }}>
                <Input 
                  label="Seu Nome" 
                  placeholder="Seu nome..." 
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                />
              </div>
              
              <div style={{ flex: 1, minWidth: '250px' }}>
                <Input 
                  label="Nome do Parceiro(a)" 
                  placeholder="Nome do parceiro(a)..." 
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                />
              </div>
            </div>

            <Button width="100%" type="submit" disabled={loading}>
              {loading ? 'Consultando as Estrelas...' : 'Calcular Compatibilidade'}
            </Button>
          </form>
        </div>
      </section>

      {}
      {result && (
        <section style={sectionStyle}>
          <div style={{ 
            backgroundColor: '#9E7F68', 
            color: '#FFF', 
            padding: '30px', 
            borderRadius: '20px',
            marginTop: '40px'
          }}>
            <h2 style={{ margin: 0 }}>Resultado da Compatibilidade com {result.sname}</h2>
            <div style={{ 
              fontSize: '4rem', 
              fontWeight: 'bold', 
              margin: '10px 0',
              animation: 'fadeIn 1s ease-out' 
            }}>
              {result.percentage}%
            </div>
            <p style={{ fontSize: '1.2rem' }}>{result.result}</p>
          </div>
        </section>
      )}

      {}
      <section style={sectionStyle}>
        <h2 style={{ color: '#8D6E63', margin: '50px 0 30px 0' }}>
          Compatibilidade com Famosos
        </h2>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {famosos.map((famoso) => (
            
            <CardInfos 
              key={famoso.id}
              title={famoso.nome}
              tag={famoso.tag}
              description={`Signo: ${famoso.signo}. Clique para testar!`}
              isClickable={true} 
              onClick={() => handleFamousClick(famoso.nome)}
            />
          ))}
        </div>
      </section>

      {}
      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#A1887F' }}>
        <p>Desenvolvido na plataforma de colaboração. 💜</p>
      </footer>

    </div>
  );
};

export default Home;