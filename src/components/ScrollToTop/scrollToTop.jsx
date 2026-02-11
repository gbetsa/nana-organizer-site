import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Rola para o topo quando a rota mudar
    window.scrollTo(0, 0);
  }, [location.pathname]); // A dependência 'location' garante que a ação seja executada sempre que a URL mudar.

  return null;
}

export default ScrollToTop;
