import { useState } from "react";
import Modal from "react-modal"; // Importando a biblioteca
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperHome.module.css";
import "./swiperHome.css";

// Definir o elemento raiz para acessibilidade (importante para React Modal)
Modal.setAppElement("#root");

function SwiperHome() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: [] });

  const texts = [
    {
      text: "Facilitamos o processo de mudança com serviços completos de planejamento, supervisão e organização de pertences, garantindo uma transição tranquila. Oferecemos desde o preparo inicial até a disposição final dos itens em seu novo espaço. Contrate o processo completo ou a etapa de sua preferência para uma mudança organizada e eficiente.",
      modal: {
        title: "Organização de Mudança",
        content: [
          "Mudar não é nada fácil! Causa estresse e tempo perdido, porque não sabe quais são as primeiras ações tomar para organizar uma mudança sem sofrimento. Conheça o processo de organização de mudança:",
          "Pré-mudança: Planejamento da mudança, indicação da transportadora, seleção, categorização e identificação dos itens que serão embalados.",
          "Gerenciamento da mudança: Supervisão e orientação dos profissionais contratados para realização da mudança (transportadora, limpeza, serviços gerais) desde a origem até a recepção da mudança no destino.",
          "Pós-mudança: Abertura das caixas, verificação da integridade dos pertences e organização dos ambientes.",
          "O serviço poderá ser contratado por completo (pré, gerenciamento e pós mudança) ou apenas uma das etapas.",
        ],
      },
    },
    {
      text: "Proporcione ordem e funcionalidade ao seu espaço. Realizamos a organização de quartos, salas, cozinha, banheiros, documentos, biblioteca e área de serviço, sempre respeitando suas necessidades e rotina para uma vida mais prática e organizada.",
      modal: {
        title: "Organização Pontual",
        content: [
          "Nosso serviço de organização pontual é ideal para quem deseja transformar um ambiente específico sem precisar reorganizar toda a casa.",
          "Trabalhamos categorizando e otimizando seus pertences para que cada item tenha seu devido lugar, tornando seu espaço mais funcional e agradável.",
          "A organização pode ser aplicada em diversos ambientes, como:",
          "- Quartos: Organização de guarda-roupas, gavetas e espaços de armazenamento.",
          "- Salas: Disposição eficiente de móveis e objetos decorativos.",
          "- Cozinha: Setorização de utensílios, mantimentos e eletrodomésticos.",
          "- Banheiros: Organização de produtos de higiene e otimização do espaço.",
          "- Biblioteca e Documentos: Arquivamento e categorização de livros e papéis.",
          "- Área de Serviço: Melhor aproveitamento de espaço para armazenamento e uso diário.",
          "Nosso objetivo é proporcionar praticidade e bem-estar, criando um ambiente mais funcional e harmonioso para o seu dia a dia."
        ],
      },
    },
    {
      text: "Transforme seu ambiente de trabalho em um espaço funcional e organizado. Realizamos a organização de estações de trabalho, arquivos físicos e digitais, salas de reunião, áreas de descanso, documentação administrativa e materiais de escritório, sempre respeitando a rotina e as necessidades do seu negócio para promover um ambiente mais produtivo e eficiente.",
      modal: {
        title: "Organização de Escritório",
        content: [
          "Pare de perder tempo procurando documentos e mantenha o seu escritório no controle!​ Deixe-me cuidar da organização do seu ambiente de trabalho para que você possa se concentrar no que realmente importa.",
          "- Estações de Trabalho",
          "- Arquivos Físicos e Digitais",
          "- Salas de Reunião",
          "- Área de Descanso",
          "- Documentação Administrativa",
          "- Materiais de Escritório",
          "- Equipamentos Eletrônico",
          "Assim como organizo residências com atenção às necessidades únicas de cada pessoa, também transformo escritórios, respeitando a rotina profissional e a dinâmica do ambiente. O objetivo? Proporcionar mais eficiência, bem-estar e harmonia no seu espaço de trabalho.​ É hora de criar uma atmosfera onde a criatividade flui, a produtividade ganha destaque, e o estresse não tem lugar.",
        ],
      },
    },
    {
      text: "Está procurando o presente perfeito para um aniversário, casamento, casa nova ou outra data especial? Em vez de um presente comum, que tal oferecer uma experiência transformadora que traga organização, tranquilidade e um toque de luxo à vida de quem você ama? Apresentamos nosso exclusivo serviço de Personal Organizer, um presente que encantará e surpreenderá, proporcionando mais do que apenas um objeto, mas uma verdadeira transformação no dia a dia.",
      modal: {
        title: "Mais que um Presente",
        content: [
          "Você está em busca do presente perfeito para celebrar um aniversário, casamento especial, casa nova e/ou nas datas ocasionais?",
          "Imagine oferecer mais do que um presente comum, mas sim uma experiência única que trará organização, tranquilidade e um toque de luxo à vida daqueles que você ama.",
          "Apresentamos nosso exclusivo serviço de Personal Organizer, um presente que vai encantar e surpreender!",
          "Surpreenda seus entes e amigos queridos com um presente que vai além do comum, proporcionando-lhes não apenas um objeto material, mas sim uma experiência que transformará suas vidas diárias.",
        ],
      },
    },
  ];
  const openModal = (modalData) => {
    setModalContent(modalData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={styles.swiper_container}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        className={styles.swiper}
      >
        {texts.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <div className={styles.swiper_text}>
              <p>{item.text}</p>
              <h4
                onClick={() => openModal(item.modal)}
                className={styles.read_more}
              >
                LEIA MAIS <span>+</span>
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal usando react-modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal_content}
        overlayClassName={styles.modal_overlay}
      >
        <div className={styles.line}></div>
        <button className={styles.close_button} onClick={closeModal}>
          X
        </button>
        <h2>{modalContent.title}</h2>
        <div className={styles.modal_text}>
          {modalContent.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default SwiperHome;
