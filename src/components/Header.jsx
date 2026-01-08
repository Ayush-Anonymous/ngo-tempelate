import { useState } from 'react'

function Header({ isScrolled }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <a href="#" className="logo" onClick={() => scrollToSection('hero')}>
                        <span className="logo-icon">🌱</span>
                        <span>HopeRise</span>
                    </a>

                    <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                        <li>
                            <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#mission" className="nav-link" onClick={() => scrollToSection('mission')}>
                                Mission
                            </a>
                        </li>
                        <li>
                            <a href="#programs" className="nav-link" onClick={() => scrollToSection('programs')}>
                                Programs
                            </a>
                        </li>
                        <li>
                            <a href="#impact" className="nav-link" onClick={() => scrollToSection('impact')}>
                                Impact
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="nav-link" onClick={() => scrollToSection('team')}>
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
                                Contact
                            </a>
                        </li>
                        <li className="nav-cta">
                            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                                Donate Now
                            </button>
                        </li>
                    </ul>

                    <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
                        <span className="hamburger"></span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
