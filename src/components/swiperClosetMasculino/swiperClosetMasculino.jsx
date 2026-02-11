import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Modal from "react-modal"; // Importa a biblioteca do modal
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperClosetMasculino.module.css";

import closetMasculino1 from "../../assets/closetMasculino1.avif";
import closetMasculino2 from "../../assets/closetMasculino2.avif";
import closetMasculino3 from "../../assets/closetMasculino3.avif";
import closetMasculino4 from "../../assets/closetMasculino4.avif";
import closetMasculino5 from "../../assets/closetMasculino5.avif";

// Definir o elemento raiz para acessibilidade
Modal.setAppElement("#root");

function SwiperClosetMasculino() {
  const imgsOrder = [
    closetMasculino1,
    closetMasculino2,
    closetMasculino3,
    closetMasculino4,
    closetMasculino5,
  ];

  const imgs = imgsOrder.sort(() => Math.random() - 0.5);

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
              alt={`closet masculino ${index + 1}`}
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
        {selectedImg && (
          <img
            src={selectedImg}
            alt="Closet Masculino Ampliado"
            className={styles.modal_img}
          />
        )}
      </Modal>
    </div>
  );
}

export default SwiperClosetMasculino;
