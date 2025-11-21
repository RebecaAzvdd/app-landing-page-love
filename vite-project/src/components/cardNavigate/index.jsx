import React from 'react';
import CardInfos from '../cardInfos';

const items = [
  { id: 'calc', title: 'Calculadora', tag: 'Ferramenta', desc: 'Teste a sua compatibilidade amorosa.' },
  { id: 'signs', title: 'Signos', tag: 'Astrologia', desc: 'Mapa astral completo.' },
  { id: 'famous', title: 'Perfil Famoso', tag: 'Diversão', desc: 'Combine com celebridades.' },
  { id: 'services', title: 'Consulta', tag: 'Terapia', desc: 'Saiba como funciona a terapia.' },
];

export default function CardNavigate() {
  
  const handleNav = (id) => {
    let targetId = 'calculator'; 
    if (id === 'famous') targetId = 'famous-section';
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrapper container">
      {/* Título ajustado para bater com o design da secção de Navegação */}
      <h2 className="section-title">Explore Seu Caminho Amoroso</h2>
      <p className="section-subtitle">
        Ferramentas gratuitas para começar a sua jornada de autoconhecimento.
      </p>

      <div className="grid-cards">
        {items.map(item => (
          <CardInfos 
            key={item.id}
            title={item.title}
            tag={item.tag}
            description={item.desc}
            isClickable={true}
            onClick={() => handleNav(item.id)}
          />
        ))}
      </div>
    </section>
  );
}