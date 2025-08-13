import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
    color: white;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1000;
`;

const Logo = styled.h1`
    font-size: 1.6rem;
    letter-spacing: 1px;
`;

const NavLinks = styled.nav`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    margin-left: 20px;
    color: white;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.background};
    }
`;

const Hamburger = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
        div {
            width: 28px;
            height: 3px;
            background: white;
            margin: 5px 0;
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        &.open div:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        &.open div:nth-child(2) { opacity: 0; }
        &.open div:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    }
`;

const MobileMenu = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        background: ${({ theme }) => theme.colors.primary};
        overflow: hidden;
        max-height: ${({ isOpen }) => (isOpen ? '400px' : '0')};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
        transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-20px)')};
        pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
        transition: max-height 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
        z-index: 1010;
    }
`;

const MobileLink = styled(Link)`
  padding: 15px 0;
  width: 100%;
  text-align: center;
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <HeaderWrapper>
            <Logo>Şirketimiz</Logo>
            <NavLinks>
                <NavLink to="/">Ana Sayfa</NavLink>
                <NavLink to="/sector/1">Sektör 1</NavLink>
                <NavLink to="/sector/2">Sektör 2</NavLink>
                <NavLink to="/sector/3">Sektör 3</NavLink>
                <NavLink to="/sector/4">Sektör 4</NavLink>
                <NavLink to="/contact">İletişim</NavLink>
            </NavLinks>
            <Hamburger className={isOpen ? 'open' : ''} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <MobileMenu isOpen={isOpen}>
                <MobileLink to="/" onClick={() => setIsOpen(false)}>Ana Sayfa</MobileLink>
                <MobileLink to="/sector/1" onClick={() => setIsOpen(false)}>Sektör 1</MobileLink>
                <MobileLink to="/sector/2" onClick={() => setIsOpen(false)}>Sektör 2</MobileLink>
                <MobileLink to="/sector/3" onClick={() => setIsOpen(false)}>Sektör 3</MobileLink>
                <MobileLink to="/sector/4" onClick={() => setIsOpen(false)}>Sektör 4</MobileLink>
                <MobileLink to="/contact" onClick={() => setIsOpen(false)}>İletişim</MobileLink>
            </MobileMenu>
        </HeaderWrapper>
    );
};

export default Header;
