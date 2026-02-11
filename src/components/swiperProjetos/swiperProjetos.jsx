import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Modal from "react-modal"; // Importa a biblioteca do modal
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperProjetos.module.css";

import projetos1 from "../../assets/projetos1.avif";
import projetos2 from "../../assets/projetos2.avif";
import projetos3 from "../../assets/projetos3.avif";
import projetos4 from "../../assets/projetos4.avif";

// Definir o elemento raiz para acessibilidade
Modal.setAppElement("#root");

function SwiperProjetos() {
  const imgs = [projetos1, projetos2, projetos3, projetos4];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
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
          1024: { slidesPerView: 2 }, // Exibe 2 slides acima de 1024px
        }}
        loop={true}
        className={styles.swiper}
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <img 
              src={img} 
              alt="projetos" 
              className={styles.image} 
              onClick={() => openModal(img)} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal_content}
        overlayClassName={styles.modal_overlay}
      >
        <button className={styles.close_button} onClick={closeModal}>
          <span></span>
          <span></span>
        </button>
        {selectedImg && <img src={selectedImg} alt="Projeto Ampliado" className={styles.modal_img} />}
      </Modal>
    </div>
  );
}

export default SwiperProjetos;
