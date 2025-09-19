import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { sectorData } from '../data/sectorData';

const SectorHero = styled.section`
    height: 80vh;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, 
            ${({ theme }) => theme.colors.primary}70 0%,
            ${({ theme }) => theme.colors.accent}50 50%,
            ${({ theme }) => theme.colors.primary}70 100%
        );
        backdrop-filter: blur(2px);
    }
    
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        background: linear-gradient(180deg, 
            transparent 0%,
            ${({ theme }) => theme.colors.background} 100%
        );
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        height: 60vh;
        background-attachment: scroll;
    }
`;

const HeroContent = styled.div`
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: ${({ theme }) => theme.spacing.xl};
`;

const HeroTitle = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    font-weight: 700;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    line-height: 1.2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
`;

const HeroSubtitle = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes.lg};
    }
`;

const ContentWrapper = styled.div`
    background: ${({ theme }) => theme.colors.background};
    position: relative;
`;

const ContentSection = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
    }
`;

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: ${({ theme }) => theme.spacing['3xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing['2xl']};
    }
`;

const MainContent = styled.div`
    
`;

const Sidebar = styled.div`
    
`;

const SectionTitle = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    color: ${({ theme }) => theme.colors.text};
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -${({ theme }) => theme.spacing.sm};
        left: 0;
        width: 60px;
        height: 3px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.colors.accent} 0%,
            ${({ theme }) => theme.colors.accentLight} 100%
        );
        border-radius: ${({ theme }) => theme.borderRadius.full};
    }
`;

const ContentParagraph = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
    background: ${({ theme }) => theme.colors.backgroundCard};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    padding: ${({ theme }) => theme.spacing.xl};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    backdrop-filter: blur(10px);
    transition: ${({ theme }) => theme.transitions.smooth};
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: ${({ theme }) => theme.shadows.lg};
        border-color: ${({ theme }) => theme.colors.accentLight};
    }
`;

const FeatureTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureDescription = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.6;
    margin: 0;
`;

const StatsCard = styled.div`
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.backgroundCard} 0%,
        ${({ theme }) => theme.colors.backgroundLight} 100%
    );
    border: 1px solid ${({ theme }) => theme.colors.glassBorder};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
    padding: ${({ theme }) => theme.spacing['2xl']};
    backdrop-filter: blur(20px);
    
    h3 {
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: ${({ theme }) => theme.colors.text};
        margin-bottom: ${({ theme }) => theme.spacing.lg};
        text-align: center;
    }
`;

const StatItem = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.spacing.lg} 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    
    &:last-child {
        border-bottom: none;
    }
    
    .number {
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
        font-weight: 700;
        color: ${({ theme }) => theme.colors.accent};
        display: block;
    }
    
    .label {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.textMuted};
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: ${({ theme }) => theme.spacing.xs};
    }
`;

const SectorPage = () => {
    const { id } = useParams();
    const sector = sectorData.find((item) => item.id === parseInt(id, 10));
    
    // Enhanced content based on sector
    const sectorContent = {
        1: { // Technology
            features: [
                { title: 'Yapay Zeka Çözümleri', description: 'Makine öğrenmesi ve derin öğrenme teknolojileri ile işletmenizi geleçeğe hazırlıyoruz.' },
                { title: 'Bulut Mimarisi', description: 'Esneklik ve ölçeklenebilirlik sağlayan modern bulut çözümleri geliştiriyoruz.' },
                { title: 'Siber Güvenlik', description: 'Veri güvenliğinizi ve sistem bütünlüğünü en üst seviyede koruyoruz.' }
            ],
            stats: [
                { number: '500+', label: 'Proje' },
                { number: '99.9%', label: 'Güvenilirlik' },
                { number: '24/7', label: 'Destek' }
            ]
        },
        2: { // Health
            features: [
                { title: 'Dijital Sağlık', description: 'Hastaların sağlık verilerini güvenli bir şekilde yöneten modern çözümler.' },
                { title: 'Telemedicine', description: 'Uzaktan sağlık hizmetleri ile hastaların evlerinde kaliteli bakım almalarını sağlıyoruz.' },
                { title: 'AI Tanı Sistemleri', description: 'Yapay zeka destekli tanı sistemleri ile erken teşhis ve tedavi imkanları sunuyoruz.' }
            ],
            stats: [
                { number: '1M+', label: 'Hasta' },
                { number: '150+', label: 'Hastane' },
                { number: '95%', label: 'Memnuniyet' }
            ]
        },
        3: { // Education
            features: [
                { title: 'E-Öğrenme Platformları', description: 'Etkileşimli ve kişiselleştirilebilir e-öğrenme deneyimleri sunuyoruz.' },
                { title: 'Sanal Sınıflar', description: 'Modern sanal sınıf çözümleri ile uzaktan eğitimi daha verimli hale getiriyoruz.' },
                { title: 'Eğitim Analitiği', description: 'Öğrenci performansını analiz ederek kişiselleştirilmiş eğitim yolları oluşturuyoruz.' }
            ],
            stats: [
                { number: '250K+', label: 'Öğrenci' },
                { number: '1000+', label: 'Okul' },
                { number: '98%', label: 'Başarı Oranı' }
            ]
        },
        4: { // Finance
            features: [
                { title: 'Fintech Çözümleri', description: 'Modern finansal teknolojiler ile bankacılık ve ödeme sistemlerini daha verimli hale getiriyoruz.' },
                { title: 'Blockchain Teknolojisi', description: 'Güvenli ve şeffaf finansal işlemler için blockchain tabanlı çözümler geliştiriyoruz.' },
                { title: 'Risk Yönetimi', description: 'Gelişmiş algoritimalarla finansal riskleri önceden tespit ediyor ve yönetiyoruz.' }
            ],
            stats: [
                { number: '₺10M+', label: 'İşlem Hacmi' },
                { number: '99.99%', label: 'Güvenlik' },
                { number: '50+', label: 'Finans Kurumu' }
            ]
        }
    };

    if (!sector) {
        return (
            <ContentWrapper>
                <ContentSection>
                    <SectionTitle>Sektör Bulunamadı</SectionTitle>
                    <ContentParagraph>
                        Aradığınız sektör bulunamadı. Lütfen ana sayfaya dönerek diğer sektörlerimizi inceleyin.
                    </ContentParagraph>
                </ContentSection>
            </ContentWrapper>
        );
    }

    const currentSectorContent = sectorContent[sector.id] || sectorContent[1];

    return (
        <>
            <Helmet>
                <title>{sector.name} - Korkut Enterprises</title>
                <meta name="description" content={`${sector.name} alanında öncü çözümlerimiz ve hizmetlerimiz hakkında detaylı bilgi.`} />
            </Helmet>
            
            <SectorHero bg={sector.imageUrl} className="animate-fade-in">
                <HeroContent>
                    <HeroTitle className="animate-fade-in-up">
                        {sector.name}
                    </HeroTitle>
                    <HeroSubtitle className="animate-fade-in-up">
                        {sector.description}
                    </HeroSubtitle>
                </HeroContent>
            </SectorHero>
            
            <ContentWrapper>
                <ContentSection>
                    <ContentGrid>
                        <MainContent>
                            <SectionTitle className="animate-fade-in-up">
                                Hizmetlerimiz
                            </SectionTitle>
                            
                            <ContentParagraph className="animate-fade-in-up">
                                {sector.name} alanında yılların verdiği deneyim ve inovasyonla, 
                                sektörün en güncel teknolojilerini kullanarak çözümler geliştiriyoruz. 
                                Müşterilerimizin ihtiyaçlarını anlayıp, onlara özel çözümler sunmak bizim en büyük önceliğimizdir.
                            </ContentParagraph>
                            
                            {currentSectorContent.features.map((feature, index) => (
                                <FeatureCard 
                                    key={index} 
                                    className="animate-fade-in-up"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <FeatureTitle>{feature.title}</FeatureTitle>
                                    <FeatureDescription>{feature.description}</FeatureDescription>
                                </FeatureCard>
                            ))}
                            
                            <ContentParagraph className="animate-fade-in-up">
                                Ekibimiz, sürekli gelişen teknolojilere ayak uydurarak, 
                                sektörün geleceğini şekillendirecek çözümler üretmektedir. 
                                Projelerimizde kalite, güvenilirlik ve müşteri memnuniyetini ön planda tutuyoruz.
                            </ContentParagraph>
                        </MainContent>
                        
                        <Sidebar>
                            <StatsCard className="animate-fade-in-up">
                                <h3>Başarılarımız</h3>
                                {currentSectorContent.stats.map((stat, index) => (
                                    <StatItem key={index}>
                                        <span className="number">{stat.number}</span>
                                        <span className="label">{stat.label}</span>
                                    </StatItem>
                                ))}
                            </StatsCard>
                        </Sidebar>
                    </ContentGrid>
                </ContentSection>
            </ContentWrapper>
        </>
    );
};

export default SectorPage;
