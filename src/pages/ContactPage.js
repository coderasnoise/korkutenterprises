import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const ContactContainer = styled.div`
    max-width: 600px;
    margin: 60px auto;
    padding: 30px 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const InfoItem = styled.div`
  margin-bottom: 15px;
  font-size: 1rem;

  span {
    font-weight: bold;
  }
`;

const ContactPage = () => (
    <>
        <Helmet>
            <title>İletişim - Şirketimiz</title>
        </Helmet>
        <ContactContainer>
            <Title>Bizimle İletişime Geçin</Title>
            <InfoItem><span>Adres:</span> İstanbul, Türkiye</InfoItem>
            <InfoItem><span>Telefon:</span> +90 212 123 45 67</InfoItem>
            <InfoItem><span>E-posta:</span> info@firma.com</InfoItem>
            <p>Her türlü soru ve görüşünüz için bize ulaşabilirsiniz.</p>
        </ContactContainer>
    </>
);

export default ContactPage;
