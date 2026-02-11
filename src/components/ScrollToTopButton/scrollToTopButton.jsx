import React, { useState, useEffect } from 'react';
import styles from './scrollToTopButton.module.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Função que será chamada toda vez que o usuário rolar a página
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Exibe o botão quando rolar mais de 300px
      } else {
        setIsVisible(false); // Oculta o botão quando o usuário rolar para o topo
      }
    };

    // Adiciona o listener de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
