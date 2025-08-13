import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const FooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 40px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    text-align: left;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 300px;
`;

const ColumnTitle = styled.h4`
  margin-bottom: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;

  a {
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Footer = () => (
    <FooterWrapper>
        <Column>
            <ColumnTitle>Şirketimiz</ColumnTitle>
            <p>Çeşitli sektörlerde faaliyet gösteren, inovatif çözümler sunan bir şirketiz. Misyonumuz, müşterilerimize en kaliteli hizmeti sağlamaktır.</p>
        </Column>
        <Column>
            <ColumnTitle>İletişim</ColumnTitle>
            <ContactItem>
                <FaMapMarkerAlt />
                <span>İstanbul, Türkiye</span>
            </ContactItem>
            <ContactItem>
                <FaPhone />
                <span>+90 212 123 45 67</span>
            </ContactItem>
            <ContactItem>
                <FaEnvelope />
                <span>info@firma.com</span>
            </ContactItem>
        </Column>
        <Column>
            <ColumnTitle>Sosyal Medya</ColumnTitle>
            <p>Bizi sosyal medya üzerinden takip edebilirsiniz:</p>
            <SocialIcons>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
            </SocialIcons>
        </Column>
    </FooterWrapper>
);

export default Footer;
