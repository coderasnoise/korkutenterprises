import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { sectorData } from '../data/sectorData';

const SectorHero = styled.section`
    height: 50vh;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        backdrop-filter: blur(2px);
        background-color: rgba(0, 0, 0, 0.4);
        padding: 10px 20px;
        border-radius: 6px;
    }
`;

const ContentSection = styled.section`
    max-width: 900px;
    margin: 40px auto;
    padding: 0 20px;
    line-height: 1.6;

    p {
        margin-bottom: 15px;
    }
`;

const SectorPage = () => {
    const { id } = useParams();
    const sector = sectorData.find((item) => item.id === parseInt(id, 10));

    if (!sector) {
        return <p>Sektör bulunamadı.</p>;
    }

    return (
        <>
            <Helmet>
                <title>{sector.name} - Sektör Bilgileri</title>
            </Helmet>
            <SectorHero bg={sector.imageUrl}>
                <h2>{sector.name}</h2>
            </SectorHero>
            <ContentSection>
                <p>{sector.description}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare, lectus non porttitor luctus, arcu neque dictum augue, sit amet rhoncus mi massa vel felis. Integer non felis sit amet nisi ullamcorper accumsan. Morbi interdum, libero in vehicula porta, augue nulla posuere odio, eget finibus arcu arcu non mauris.</p>
                <p>Nunc scelerisque nulla non massa interdum, non tristique augue faucibus. Cras varius semper elit, vel rhoncus ex mollis quis. Donec a sapien nec velit molestie bibendum id id risus.</p>
            </ContentSection>
        </>
    );
};

export default SectorPage;
