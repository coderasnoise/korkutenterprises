import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaHeart } from 'react-icons/fa';

const FooterWrapper = styled.footer`
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.secondary} 50%,
        ${({ theme }) => theme.colors.accent} 100%
    );
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, 
            transparent 0%,
            ${({ theme }) => theme.colors.glassBorder} 50%,
            transparent 100%
        );
    }
`;

const FooterContent = styled.div`
    padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing['2xl']};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing['2xl']};
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
        gap: ${({ theme }) => theme.spacing.xl};
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const ColumnTitle = styled.h4`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -${({ theme }) => theme.spacing.sm};
        left: 0;
        width: 40px;
        height: 2px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.colors.accent} 0%,
            ${({ theme }) => theme.colors.accentLight} 100%
        );
        border-radius: ${({ theme }) => theme.borderRadius.full};
    }
`;

const CompanyDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.8;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding: ${({ theme }) => theme.spacing.sm} 0;
    transition: ${({ theme }) => theme.transitions.normal};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    
    &:hover {
        background: ${({ theme }) => theme.colors.hover};
        transform: translateX(4px);
        padding-left: ${({ theme }) => theme.spacing.sm};
    }
    
    svg {
        margin-right: ${({ theme }) => theme.spacing.md};
        color: ${({ theme }) => theme.colors.accent};
        font-size: ${({ theme }) => theme.fontSizes.lg};
        transition: ${({ theme }) => theme.transitions.normal};
    }
    
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: ${({ theme }) => theme.fontSizes.base};
        transition: ${({ theme }) => theme.transitions.normal};
    }
    
    &:hover {
        svg {
            color: ${({ theme }) => theme.colors.accentLight};
            transform: scale(1.1);
        }
        
        span {
            color: ${({ theme }) => theme.colors.text};
        }
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SocialIcon = styled.a`
    width: 48px;
    height: 48px;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    background: ${({ theme }) => theme.colors.glassBackground};
    backdrop-filter: blur(10px);
    border: 1px solid ${({ theme }) => theme.colors.glassBorder};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    transition: ${({ theme }) => theme.transitions.smooth};
    
    &:hover {
        background: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.text};
        transform: translateY(-4px) scale(1.05);
        box-shadow: ${({ theme }) => theme.shadows.lg};
        border-color: ${({ theme }) => theme.colors.accentLight};
    }
    
    &:active {
        transform: translateY(-2px) scale(1.02);
    }
`;

const FooterBottom = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
    text-align: center;
    background: ${({ theme }) => theme.colors.backgroundCard}50;
    backdrop-filter: blur(20px);
`;

const CopyRight = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xs};
    
    svg {
        color: ${({ theme }) => theme.colors.accent};
        animation: heartbeat 2s ease-in-out infinite;
    }
    
    @keyframes heartbeat {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;

const Footer = () => (
    <FooterWrapper>
        <FooterContent>
            <Column className="animate-slide-in-left">
                <ColumnTitle>Korkut Enterprises</ColumnTitle>
                <CompanyDescription>
                    Çeşitli sektörlerde faaliyet gösteren, inovatif çözümler sunan bir şirketiz. 
                    Teknoloji, sağlık, eğitim ve finans alanlarında öncü hizmetler sunarak, 
                    müşterilerimizin dijital dönüşümünü destekliyoruz.
                </CompanyDescription>
            </Column>
            
            <Column className="animate-fade-in-up">
                <ColumnTitle>İletişim Bilgileri</ColumnTitle>
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
                    <span>info@korkutenterprises.com</span>
                </ContactItem>
            </Column>
            
            <Column className="animate-fade-in-up">
                <ColumnTitle>Bizi Takip Edin</ColumnTitle>
                <CompanyDescription>
                    Sosyal medya hesaplarımızdan son gelişmelerimizi ve 
                    sektördeki yeniliklerimizi takip edebilirsiniz.
                </CompanyDescription>
                <SocialIcons>
                    <SocialIcon href="#" aria-label="Facebook">
                        <FaFacebookF />
                    </SocialIcon>
                    <SocialIcon href="#" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIcon>
                    <SocialIcon href="#" aria-label="LinkedIn">
                        <FaLinkedinIn />
                    </SocialIcon>
                </SocialIcons>
            </Column>
        </FooterContent>
        
        <FooterBottom>
            <CopyRight>
                © {new Date().getFullYear()} Korkut Enterprises. Tüm hakları saklıdır.
                <FaHeart />
                Geleceği şekillendirenler için tasarlandı.
            </CopyRight>
        </FooterBottom>
    </FooterWrapper>
);

export default Footer;
