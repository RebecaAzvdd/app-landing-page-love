import React from 'react';
import CardPhoto from '../cardPhoto';
import Button from '../atoms/button';

export default function Hero() {
  const scrollToCalc = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="container hero-wrapper">
      {/* LADO ESQUERDO: TEXTOS */}
      <div className="hero-content">
        <span className="hero-tag">Psicóloga & Taróloga</span>
        <h1 className="hero-title">Dra. Ana Silva</h1>
        
        <p className="hero-desc">
          Com mais de 15 anos de experiência, ajudo pessoas a encontrarem 
          clareza emocional e construírem relacionamentos saudáveis através 
          da psicologia e dos astros.
        </p>

        <div className="hero-actions">
          <Button onClick={scrollToCalc}>Agendar Consulta</Button>
          <Button variant="light" onClick={() => alert('Em breve')}>Saiba Mais</Button>
        </div>

        <div className="hero-stats">
          <div><strong>1500+</strong><span>Casais</span></div>
          <div><strong>15</strong><span>Anos Exp.</span></div>
          <div><strong>4.9</strong><span>Nota</span></div>
        </div>
      </div>

      {/* LADO DIREITO: FOTO */}
      <div className="hero-image">
        <CardPhoto 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=688&q=80" 
          alt="Dra Ana Silva" 
          width="350px" 
          height="480px" 
        />
      </div>
    </section>
  );
}