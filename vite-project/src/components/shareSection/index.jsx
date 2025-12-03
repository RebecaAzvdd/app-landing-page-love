import React from 'react';
import Button from '../atoms/button';

export default function ShareSection() {
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copiado para a área de transferência!');
  };

  return (
    <section className="section-wrapper container" style={{ paddingBottom: '80px' }}>
      <div className="calculator-card" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', backgroundColor: '#FFF' }}>
        {/* Ícone de coração decorativo */}
        <div style={{ 
          width: '40px', height: '40px', background: '#F5EBE0', 
          borderRadius: '50%', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', margin: '0 auto 20px auto', 
          color: '#9E7F68', fontSize: '1.2rem'
        }}>
          ♥
        </div>

        <h2 className="section-title" style={{ fontSize: '2rem' }}>Compartilhe o Amor</h2>
        <p className="section-subtitle" style={{ marginBottom: '30px' }}>
          Ajude seus amigos a descobrirem a magia da compatibilidade! Compartilhe nossa calculadora e espalhe o amor.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* Botões sociais estilizados manualmente para bater com as cores das redes */}
          <button style={{ 
            backgroundColor: '#1DA1F2', color: 'white', border: 'none', 
            padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' 
          }}>
             Twitter
          </button>
          <button style={{ 
            backgroundColor: '#4267B2', color: 'white', border: 'none', 
            padding: '10px 20px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' 
          }}>
             Facebook
          </button>
          
          {/* Botão padrão do projeto na variante light */}
          <Button variant="light" onClick={handleCopyLink}>
            🔗 Copiar Link
          </Button>
        </div>
      </div>
    </section>
  );
}