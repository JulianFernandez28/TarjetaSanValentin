import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [currentStep, setCurrentStep] = useState(0); 
  const [noButtonPosition, setNoButtonPosition] = useState(null); 
  const [noOpacity, setNoOpacity] = useState(1); // Opacidad inicial del botón "No"
  

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleYesClick = () => {
    setCurrentStep(5);
  };

  const handleNoMouseEnter = () => {
    const randomTop = Math.random() * 60 + 20; 
    const randomLeft = Math.random() * 60 + 20; 
    setNoButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  const handleNoClick = () => {
    setNoOpacity(Math.max(0, noOpacity - 0.2)); 
    handleNoMouseEnter(); // También mueve el botón
  };

  const closeSecondModal = () => {
    window.location.reload();
  };

  const renderModal = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="modal">
            <div className="modal-content">
              <h1>HOLA AMOR</h1>
              <p>Prepare esto para ti</p>
              <button className="no-button" onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="modal">
            <div className="modal-content">
              <h2>Lo que siento por ti 💖</h2>
              <p>Desde que llegaste a mi vida, todo tiene más sentido. Cada sonrisa tuya alegra mis días y cada abrazo me recuerda que estoy en el lugar correcto.</p>
              <button className="no-button" onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="modal">
            <div className="modal-content">
              <h2>Eres mi estrella 💕</h2>
              <p>Eres mi estrella en la noche, mi calma en la tormenta, mi razón para seguir soñando. En cada latido de mi corazón hay un susurro que dice tu nombre, porque contigo todo se transforma en magia.</p>
              <button className="no-button" onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="modal">
            <div className="modal-content">
              <h2>Mi alegría diaria ❤️</h2>
              <p>Me encanta cómo haces que lo simple se vuelva especial: una conversación, una mirada, los momentos juntos. Gracias por ser mi alegría diaria y por enseñarme que el amor se vive sin importar la distancia y las circunstancias.</p>
              <button className="no-button" onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="modal">
            <div className="modal-content">
              <h2>¿Quieres ser mi San Valentín? 💖</h2>
              <div className="buttons">
                <button className="yes-button" onClick={handleYesClick}>Sí ❤️</button>
                <button 
                  className="no-button" 
                  style={{
                    ...(noButtonPosition ? { position: 'absolute', top: noButtonPosition.top, left: noButtonPosition.left } : {}),
                    opacity: noOpacity 
                  }}
                  onMouseEnter={handleNoMouseEnter}
                  onClick={handleNoClick}
                >
                  No 😢
                </button>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="modal">
            <div className="modal-content">
              <h2>Sabía que ibas a decir que sí, te amo 💕</h2>
              <button className="no-button" onClick={closeSecondModal}>Cerrar</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      {renderModal()}
      <footer className="footer">By Tars</footer>
    </div>
  );
}

export default App;