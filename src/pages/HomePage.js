import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { sectorData } from '../data/sectorData';

const HeroSection = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.background} 0%,
        ${({ theme }) => theme.colors.gradientMid} 50%,
        ${({ theme }) => theme.colors.gradientEnd} 100%
    );
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 30% 40%, 
            ${({ theme }) => theme.colors.accent}15 0%, 
            transparent 50%),
        radial-gradient(circle at 80% 20%, 
            ${({ theme }) => theme.colors.accentLight}10 0%, 
            transparent 50%);
        pointer-events: none;
    }
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
`;

const HeroTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['6xl']};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.text} 0%, 
        ${({ theme }) => theme.colors.accentLight} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: ${({ theme }) => theme.fontSizes['5xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
`;

const HeroSubtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing['3xl']};
    line-height: 1.6;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes.lg};
    }
`;

const ScrollIndicator = styled.div`
    position: absolute;
    bottom: ${({ theme }) => theme.spacing['2xl']};
    left: 50%;
    transform: translateX(-50%);
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 2px;
    
    &::after {
        content: '↓';
        display: block;
        margin-top: ${({ theme }) => theme.spacing.sm};
        font-size: ${({ theme }) => theme.fontSizes.lg};
        animation: bounce 2s infinite;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        60% {
            transform: translateY(-5px);
        }
    }
`;

const SectorsSection = styled.section`
    padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
    background: ${({ theme }) => theme.colors.backgroundLight};
    position: relative;
`;

const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing['3xl']};
    color: ${({ theme }) => theme.colors.text};
`;

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: ${({ theme }) => theme.spacing['2xl']};
    max-width: 1400px;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing.xl};
    }
`;

const CardWrapper = styled(Link)`
    display: block;
    text-decoration: none;
    color: inherit;
`;

const Card = styled.div`
    position: relative;
    height: 400px;
    border-radius: ${({ theme }) => theme.borderRadius['2xl']};
    overflow: hidden;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    box-shadow: ${({ theme }) => theme.shadows.lg};
    transition: ${({ theme }) => theme.transitions.smooth};
    cursor: pointer;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
            ${({ theme }) => theme.colors.primary}60 0%,
            transparent 50%,
            ${({ theme }) => theme.colors.accent}40 100%
        );
        opacity: 0.8;
        transition: ${({ theme }) => theme.transitions.smooth};
    }
    
    &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: ${({ theme }) => theme.shadows.xl};
        
        &::before {
            opacity: 0.6;
        }
    }
    
    &:active {
        transform: translateY(-8px) scale(1.01);
    }
`;

const CardOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: ${({ theme }) => theme.spacing['2xl']};
    background: linear-gradient(180deg, 
        transparent 0%, 
        ${({ theme }) => theme.colors.primary}95 100%
    );
    color: ${({ theme }) => theme.colors.text};
    z-index: 2;

    h3 {
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        font-weight: 600;
        margin-bottom: ${({ theme }) => theme.spacing.sm};
        color: ${({ theme }) => theme.colors.text};
    }
    
    p {
        font-size: ${({ theme }) => theme.fontSizes.base};
        color: ${({ theme }) => theme.colors.textSecondary};
        line-height: 1.6;
        margin: 0;
    }
`;

const CardIcon = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.spacing.xl};
    right: ${({ theme }) => theme.spacing.xl};
    width: 60px;
    height: 60px;
    border-radius: ${({ theme }) => theme.borderRadius.full};
    background: ${({ theme }) => theme.colors.glassBackground};
    backdrop-filter: blur(10px);
    border: 1px solid ${({ theme }) => theme.colors.glassBorder};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    z-index: 3;
    transition: ${({ theme }) => theme.transitions.smooth};
    
    ${Card}:hover & {
        transform: scale(1.1) rotate(5deg);
        background: ${({ theme }) => theme.colors.accent}30;
    }
`;

// Sector icons mapping
const sectorIcons = {
    1: '💻', // Technology
    2: '🏥', // Health
    3: '🎓', // Education
    4: '💰'  // Finance
};

const HomePage = () => (
    <>
        <Helmet>
            <title>Korkut Enterprises - İnovatif Çözümler</title>
            <meta name="description" content="Çeşitli sektörlerde faaliyet gösteren, inovatif çözümler sunan Korkut Enterprises ile tanışın." />
        </Helmet>
        
        <HeroSection className="animate-fade-in">
            <HeroContent>
                <HeroTitle className="animate-fade-in-up">
                    Geleceği Şekillendiren
                    <br />
                    İnovatif Çözümler
                </HeroTitle>
                <HeroSubtitle className="animate-fade-in-up">
                    Teknoloji, sağlık, eğitim ve finans sektörlerinde öncü çözümler sunarak,
                    işletmenizin dijital dönüşümünü destekliyoruz.
                </HeroSubtitle>
            </HeroContent>
            <ScrollIndicator>
                Keşfet
            </ScrollIndicator>
        </HeroSection>
        
        <SectorsSection>
            <SectionTitle className="animate-fade-in-up">
                Faaliyet Alanlarımız
            </SectionTitle>
            <CardGrid>
                {sectorData.map((sector, index) => (
                    <CardWrapper
                        key={sector.id}
                        to={`/sector/${sector.id}`}
                        className="animate-fade-in-up"
                        style={{
                            animationDelay: `${index * 0.15}s`
                        }}
                    >
                        <Card bg={sector.imageUrl}>
                            <CardIcon>
                                {sectorIcons[sector.id]}
                            </CardIcon>
                            <CardOverlay>
                                <h3>{sector.name}</h3>
                                <p>{sector.description}</p>
                            </CardOverlay>
                        </Card>
                    </CardWrapper>
                ))}
            </CardGrid>
        </SectorsSection>
    </>
);

export default HomePage;
