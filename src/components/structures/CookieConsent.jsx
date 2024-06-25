import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CookieConsent.module.css'; 

function CookieConsent({ giveCookieConsent }) {
  const [showConsent, setShowConsent] = useState(true);

  const handleAccept = () => {
    giveCookieConsent();
    setShowConsent(false); 
  };

  const handleDecline = () => {
    // Adicionar lógica para caso recusem o cookie
  };

  if (!showConsent) {
    return null; 
  }

  return (
    <div className={styles.cookieConsentBanner}>
      <div className={styles.cookieConsentBannerInner}>
        <div className={styles.CookieConsentBannerCopy}>
          <div className={styles.cookieConsentBannerHeader}>ESTE SITE UTILIZA COOKIES</div>
          <div className={styles.cookieConsentBannerDescription}>Usamos cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Também compartilhamos informações sobre o uso do nosso site com nossos parceiros de mídia social, publicidade e análise, que podem combiná-las com outras informações que você forneceu a eles ou que eles coletaram do uso de seus serviços. Você concorda com nossos cookies se continuar a usar nosso site.</div>
        </div>

        <div>
          <button onClick={handleAccept} className={styles.CookieConsentCannerAccepted}>
            Aceitar
          </button>
          
          <button onClick={handleDecline} className={styles.CookieConsentCannerButtonDecline}>
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
