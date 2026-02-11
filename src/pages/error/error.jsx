import styles from "./error.module.css";

import { Helmet } from "react-helmet-async";

function Error() {
  return (
    <div className={styles.errorContainer}>
      <Helmet>
        <title>
          404 - Página Não Encontrada | Nana Bernardo - Personal Organizer
        </title>
        <meta
          name="description"
          content="A página que você procurou não foi encontrada. Por favor, verifique o endereço ou volte à página inicial."
        />
        <meta
          name="keywords"
          content="erro 404, página não encontrada, erro, Nana Bernardo, personal organizer"
        />
        <meta name="author" content="Nana Bernardo" />

        {/* Open Graph (Facebook) */}
        <meta
          property="og:title"
          content="404 - Página Não Encontrada | Nana Bernardo - Personal Organizer"
        />
        <meta
          property="og:description"
          content="A página que você procurou não foi encontrada. Por favor, verifique o endereço ou volte à página inicial."
        />
        <meta
          property="og:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />
        <meta
          property="og:url"
          content="https://www.nanaorganizer.com.br/error"
        />

        {/* Twitter Card */}
        <meta
          name="twitter:title"
          content="404 - Página Não Encontrada | Nana Bernardo - Personal Organizer"
        />
        <meta
          name="twitter:description"
          content="A página que você procurou não foi encontrada. Por favor, verifique o endereço ou volte à página inicial."
        />
        <meta
          name="twitter:image"
          content="https://www.nanaorganizer.com.br/assets/logo.png"
        />

        {/* URL canônica */}
        <link rel="canonical" href="https://www.nanaorganizer.com.br/error" />
      </Helmet>

      <div className={styles.errorBox}>
        <h1 className={styles.errorNumber}>404</h1>
        <h2 className={styles.errorText}>Página Não Encontrada</h2>
        <p className={styles.organizing}>
          Estamos organizando as coisas aqui...
        </p>
      </div>
      <div className={styles.itemsContainer}>
        <div className={`${styles.item} ${styles.item1}`}></div>
        <div className={`${styles.item} ${styles.item2}`}></div>
        <div className={`${styles.item} ${styles.item3}`}></div>
        <div className={`${styles.item} ${styles.item4}`}></div>
      </div>
    </div>
  );
}

export default Error;
