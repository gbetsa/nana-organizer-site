import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import Logo from "../../assets/logo.png";

function Header() {
  const location = useLocation();
  const linksRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  function toggleMenu(event) {
    event.stopPropagation(); // Evita que o clique no menu se propague para o body
    setIsMenuOpen((prevState) => !prevState); // Alterna o estado de menu
  }

  function closeMenu() {
    setIsMenuOpen(false); // Fecha o menu
  }

  function closeMenuOnClickOutside(event) {
    if (
      !event.target.closest(`.${styles.menu}`) &&
      !event.target.closest(`.${styles.menu_icon}`)
    ) {
      closeMenu(); // Fecha o menu se o clique for fora
    }
  }

  useEffect(() => {
    // Bloqueia o scroll quando o menu estiver aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    document.addEventListener("click", closeMenuOnClickOutside);
    
    return () => {
      document.removeEventListener("click", closeMenuOnClickOutside);
      // Garantir que o scroll seja liberado quando o componente for desmontado
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const routs = [
    { path: "/", name: "Home" },
    { path: "/servicos", name: "Serviços" },
    { path: "/projetos", name: "Projetos" },
    { path: "/sobre", name: "Sobre" },
    { path: "/quem-sou", name: "Quem Sou" },
    { path: "/contatos", name: "Contatos" },
    { path: "/depoimentos", name: "Depoimentos" },
    { path: "/faqs", name: "FAQs" },
  ];

  if (window.innerWidth > 1024) {
    return (
      <div className={styles.header_container_desktop}>
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} />

        <div className={styles.menu_desktop}>
          <ul>
            {routs.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className={
                    location.pathname === route.path ? styles.active : ""
                  }
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.header_container}>
      <div className={styles.header}>
        <img src={Logo} alt="Logo" onClick={() => navigate("/")} />
        <div
          className={`${styles.menu_icon} ${isMenuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <ul ref={linksRef}>
          {routs.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={
                  location.pathname === route.path ? styles.active : ""
                }
                onClick={closeMenu}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
