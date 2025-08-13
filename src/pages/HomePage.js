import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // Link bileşenini ekleyin
import { sectorData } from '../data/sectorData';

const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: -60px; /* kartları yukarı itmek için üst kenar boşluğunu negatif yapın */
`;

const Card = styled.div`
    position: relative;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
`;

const CardOverlay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 20px;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%);
    color: white;

    h3 {
        margin: 0 0 5px 0;
        font-size: 1.4rem;
    }
    p {
        margin: 0;
        font-size: 0.9rem;
    }
`;

const HomePage = () => (
    <>
        <Helmet>
            <title>Şirketimiz - Ana Sayfa</title>
        </Helmet>
        {/* Hero bölümü burada */}

        <CardGrid>
            {sectorData.map((sector) => (
                <Link
                    key={sector.id}
                    to={`/sector/${sector.id}`}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <Card bg={sector.imageUrl}>
                        <CardOverlay>
                            <h3>{sector.name}</h3>
                            <p>{sector.description}</p>
                        </CardOverlay>
                    </Card>
                </Link>
            ))}
        </CardGrid>
    </>
);

export default HomePage;
