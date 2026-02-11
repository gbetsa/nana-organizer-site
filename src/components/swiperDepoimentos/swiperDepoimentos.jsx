import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./swiperDepoimentos.module.css";

function SwiperDepoimentos() {

  const [depoimentos, setDepoimentos] = useState([
    {
      title: "Roberta Anchieta",
      text: "Experiência incrível ter o armário organizado! Hoje vejo todas as minhas roupas de forma mais fácil, além do visual ter ficado lindo! Agradeço a Nana pela mudança incrível no meu armário, que além de deixar mais bonito, tornou meu dia a dia muito mais prático. Até o bagunceiro do meu marido está conseguindo manter!​",
    },
    {
      title: "Paulo Marcondes",
      text: "Antes e depois, com a ajuda da @nanabernardoorganizer e suas 5 companheiras deram jeito no caos da mudança de um 3 quartos pra um dois quartos. Obviamente sobrou coisas para dar destino (descarte ou doação). Embalagem e transporte pela eficiente equipe da @apolluz_mudancas",
    },
    {
      title: "Jéssica Izidoro",
      text: "A Nana e equipe cuidaram muito bem do meu closet, e nos não poderíamos ter feito um investimento melhor para nossa organização e bem estar! Além da organização em si, a Nana também escolheu a dedo os apetrechos que auxiliaram não só na organização mas também no acabamento final dos armários. Tanto eu quanto meu marido amamos e estamos super satisfeitos com o cuidado com que nosso closet foi organizado.",
    },
    {
      title: "Luiza Torggler",
      text: "A Nana e a Camila foram excelentes!! Providenciaram todos os cabides e organizadores necessários, finalizaram o serviço em um dia e ainda fizeram companhia para a minha cachorrinha! Eu não tive que me preocupar com nada! Super recomendo!",
    },
    {
      title: "Michele Cerqueira",
      text: "Suas ideias e organização me ajudaram muito no meu dia a dia!",
    },
    {
      title: "Nice Morais",
      text: "A Nana resolveu tudo de forma funcional e prática, para o meu dia a dia as coisas, que eu achei que não dava para organizar. Amei o seu trabalho!",
    },
  ]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews'); 

        if (!response.ok) {
          throw new Error('Falha na requisição ao backend');
        }

        const data = await response.json();

        if (data.reviews) {
          const reviewsFormatted = data.reviews
            .map((review) => ({
              title: review.user.name || "Anônimo", 
              text: review.snippet || "Sem comentário", 
            }))
            .filter((review) => review.text !== "Sem comentário"); // Filtra as avaliações "Sem comentário"
          
          // Coloca as novas avaliações do Google no início da lista, mantendo as antigas também
          setDepoimentos((prevDepoimentos) => [
            ...reviewsFormatted, // Novas avaliações no início
            ...prevDepoimentos,  // Avaliações antigas abaixo
          ]);
        }
      } catch (error) {
        console.error('Erro ao buscar as avaliações:', error);
      }
    };

    fetchReviews();
  }, []);

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
            slidesPerView: 3, // Exibe 3 slides acima de 1024px
          },
        }}
        loop={true}
        className={styles.swiper}
      >
        {depoimentos.map((depoimento, index) => (
          <SwiperSlide key={index} className={styles.swiper_slide}>
            <div className={styles.swiper_text}>
              <h4>{depoimento.title}</h4>
              <p>"{depoimento.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperDepoimentos;
