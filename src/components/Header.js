import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
    background: ${({ scrolled }) => scrolled 
        ? 'rgba(10, 10, 10, 0.95)' 
        : 'linear-gradient(135deg, rgba(10, 10, 10, 0.9) 0%, rgba(26, 47, 58, 0.8) 50%, rgba(45, 74, 91, 0.9) 100%)'
    };
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.glassBorder};
    color: ${({ theme }) => theme.colors.text};
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    transition: ${({ theme }) => theme.transitions.smooth};
    box-shadow: ${({ scrolled, theme }) => scrolled 
        ? theme.shadows.glass 
        : 'none'
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    }
`;

const Logo = styled.h1`
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: 600;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.colors.text} 0%, 
        ${({ theme }) => theme.colors.accentLight} 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: ${({ theme }) => theme.transitions.smooth};
    cursor: pointer;
    
    &:hover {
        transform: translateY(-1px);
        filter: brightness(1.1);
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        font-size: ${({ theme }) => theme.fontSizes.xl};
    }
`;

const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: none;
    }
`;

const NavLink = styled(Link)`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    position: relative;
    overflow: hidden;
    transition: ${({ theme }) => theme.transitions.smooth};
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, 
            transparent, 
            ${({ theme }) => theme.colors.hover}, 
            transparent
        );
        transition: ${({ theme }) => theme.transitions.smooth};
    }
    
    &:hover {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.glassBackground};
        backdrop-filter: blur(10px);
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.sm};
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(0);
    }
`;

const Hamburger = styled.div`
    display: none;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        padding: ${({ theme }) => theme.spacing.sm};
        border-radius: ${({ theme }) => theme.borderRadius.md};
        background: ${({ theme }) => theme.colors.glassBackground};
        backdrop-filter: blur(10px);
        border: 1px solid ${({ theme }) => theme.colors.glassBorder};
        transition: ${({ theme }) => theme.transitions.smooth};
        
        &:hover {
            background: ${({ theme }) => theme.colors.hover};
            transform: scale(1.05);
        }
        
        div {
            width: 20px;
            height: 2px;
            background: ${({ theme }) => theme.colors.text};
            margin: 2px 0;
            border-radius: ${({ theme }) => theme.borderRadius.sm};
            transition: ${({ theme }) => theme.transitions.smooth};
            transform-origin: center;
        }
        
        &.open {
            div:nth-child(1) { 
                transform: rotate(45deg) translate(4px, 4px); 
            }
            div:nth-child(2) { 
                opacity: 0;
                transform: scale(0);
            }
            div:nth-child(3) { 
                transform: rotate(-45deg) translate(4px, -4px); 
            }
        }
    }
`;

const MobileMenu = styled.div`
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: ${({ theme }) => theme.spacing.lg};
        right: ${({ theme }) => theme.spacing.lg};
        background: ${({ theme }) => theme.colors.backgroundCard};
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid ${({ theme }) => theme.colors.glassBorder};
        border-radius: ${({ theme }) => theme.borderRadius.xl};
        box-shadow: ${({ theme }) => theme.shadows.xl};
        overflow: hidden;
        max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
        transform: ${({ isOpen }) => (isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)')};
        pointer-events: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 1010;
        margin-top: ${({ theme }) => theme.spacing.sm};
    }
`;

const MobileLink = styled(Link)`
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.base};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    transition: ${({ theme }) => theme.transitions.smooth};
    position: relative;
    overflow: hidden;
    
    &:last-child {
        border-bottom: none;
    }
    
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.colors.accent}20,
            ${({ theme }) => theme.colors.accentLight}20
        );
        transition: ${({ theme }) => theme.transitions.smooth};
    }
    
    &:hover {
        color: ${({ theme }) => theme.colors.text};
        background: ${({ theme }) => theme.colors.hover};
        padding-left: ${({ theme }) => theme.spacing['2xl']};
        
        &::before {
            width: 4px;
        }
    }
    
    &:active {
        transform: scale(0.98);
    }
`;

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            setScrolled(isScrolled);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleMobileMenuToggle = () => {
        setIsOpen(!isOpen);
    };
    
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    
    return (
        <>
            <HeaderWrapper scrolled={scrolled} className="animate-fade-in">
                <Logo as={Link} to="/">
                    Korkut Enterprises
                </Logo>
                <NavLinks>
                    <NavLink to="/">Ana Sayfa</NavLink>
                    <NavLink to="/sector/1">Teknoloji</NavLink>
                    <NavLink to="/sector/2">Sağlık</NavLink>
                    <NavLink to="/sector/3">Eğitim</NavLink>
                    <NavLink to="/sector/4">Finans</NavLink>
                    <NavLink to="/contact">İletişim</NavLink>
                </NavLinks>
                <Hamburger 
                    className={isOpen ? 'open' : ''} 
                    onClick={handleMobileMenuToggle}
                    aria-label="Menü"
                    role="button"
                >
                    <div />
                    <div />
                    <div />
                </Hamburger>
                <MobileMenu isOpen={isOpen}>
                    <MobileLink to="/" onClick={handleLinkClick}>Ana Sayfa</MobileLink>
                    <MobileLink to="/sector/1" onClick={handleLinkClick}>Teknoloji</MobileLink>
                    <MobileLink to="/sector/2" onClick={handleLinkClick}>Sağlık</MobileLink>
                    <MobileLink to="/sector/3" onClick={handleLinkClick}>Eğitim</MobileLink>
                    <MobileLink to="/sector/4" onClick={handleLinkClick}>Finans</MobileLink>
                    <MobileLink to="/contact" onClick={handleLinkClick}>İletişim</MobileLink>
                </MobileMenu>
            </HeaderWrapper>
            {/* Add padding to body content to account for fixed header */}
            <div style={{ height: scrolled ? '80px' : '96px' }} />
        </>
    );
};

export default Header;
