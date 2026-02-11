import { useState } from "react";
import Modal from "react-modal"; // Importa a biblioteca do modal
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperCozinha.module.css";

import cozinha1 from "../../assets/cozinha1.avif";
import cozinha2 from "../../assets/cozinha2.avif";
import cozinha3 from "../../assets/cozinha3.avif";
import cozinha4 from "../../assets/cozinha4.avif";
import cozinha5 from "../../assets/cozinha5.avif";
import cozinha6 from "../../assets/cozinha6.avif";
import cozinha7 from "../../assets/cozinha7.avif";
import cozinha8 from "../../assets/cozinha8.avif";
import cozinha9 from "../../assets/cozinha9.avif";
import cozinha10 from "../../assets/cozinha10.avif";

// Definir o elemento raiz para acessibilidade do modal
Modal.setAppElement("#root");

function SwiperCozinha() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const imgsOrder = [cozinha1, cozinha2, cozinha3, cozinha4, cozinha5, cozinha6, cozinha7, cozinha8, cozinha9, cozinha10];
  const imgs = imgsOrder.sort(() => Math.random() - 0.5);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
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
            slidesPerView: 2, // Exibe 2 slides acima de 1024px
          },
        }}
        loop={true}
        className={styles.swiper}
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <img
              src={img}
              alt="Cozinha"
              onClick={() => openModal(img)}
              className={styles.clickable_image} // Classe para indicar clique
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal para exibir a imagem ampliada */}
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
        {selectedImage && <img src={selectedImage} alt="Imagem ampliada" />}
      </Modal>
    </div>
  );
}

export default SwiperCozinha;
