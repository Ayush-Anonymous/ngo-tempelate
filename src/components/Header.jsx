import { useState, useEffect } from 'react'

function Header({ isScrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        closeMobileMenu()
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isMobileMenuOpen && !e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
                closeMobileMenu()
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMobileMenuOpen])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    return (
        <>
            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={closeMobileMenu}
            ></div>

            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <nav className="nav">
                        <a href="#" className="logo" onClick={() => scrollToSection('hero')}>
                            <div className="logo-icon-wrapper">
                                <span className="logo-icon-text">🌱</span>
                            </div>
                            <span>HopeRise</span>
                        </a>

                        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                            <div className="mobile-menu-header">
                                <div className="mobile-logo">
                                    <div className="logo-icon-wrapper" style={{ width: '36px', height: '36px', fontSize: '1rem' }}>
                                        <span>🌱</span>
                                    </div>
                                    <span>HopeRise</span>
                                </div>
                                <button className="mobile-close-btn" onClick={closeMobileMenu}>✕</button>
                            </div>
                            <div className="nav-links-inner">
                                <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
                                    About
                                </a>
                                <a href="#mission" className="nav-link" onClick={() => scrollToSection('mission')}>
                                    Mission
                                </a>
                                <a href="#programs" className="nav-link" onClick={() => scrollToSection('programs')}>
                                    Programs
                                </a>
                                <a href="#impact" className="nav-link" onClick={() => scrollToSection('impact')}>
                                    Impact
                                </a>
                                <a href="#team" className="nav-link" onClick={() => scrollToSection('team')}>
                                    Team
                                </a>
                                <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                                    Contact
                                </a>
                            </div>
                            <div className="nav-cta">
                                <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                                    Donate Now
                                </button>
                            </div>
                        </div>

                        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}></span>
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
