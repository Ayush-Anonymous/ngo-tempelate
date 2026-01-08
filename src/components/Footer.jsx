function Footer() {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Our Mission', href: '#mission' },
        { name: 'Programs', href: '#programs' },
        { name: 'Get Involved', href: '#contact' }
    ]

    const programs = [
        { name: 'Education', href: '#programs' },
        { name: 'Healthcare', href: '#programs' },
        { name: 'Skills Training', href: '#programs' },
        { name: 'Community Development', href: '#programs' }
    ]

    const support = [
        { name: 'Donate', href: '#contact' },
        { name: 'Volunteer', href: '#contact' },
        { name: 'Partner With Us', href: '#contact' },
        { name: 'Contact Us', href: '#contact' }
    ]

    const scrollToSection = (e, sectionId) => {
        e.preventDefault()
        const element = document.getElementById(sectionId.replace('#', ''))
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <div className="logo-icon-wrapper" style={{ width: '40px', height: '40px', fontSize: '1.2rem' }}>
                                <span>🌱</span>
                            </div>
                            <span>HopeRise</span>
                        </a>
                        <p className="footer-description">
                            Empowering communities and transforming lives through sustainable
                            development programs.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="footer-social-link" aria-label="Facebook">f</a>
                            <a href="#" className="footer-social-link" aria-label="Twitter">𝕏</a>
                            <a href="#" className="footer-social-link" aria-label="Instagram">📷</a>
                            <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-links-wrapper">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul className="footer-links">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="footer-link"
                                            onClick={(e) => scrollToSection(e, link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Programs</h4>
                            <ul className="footer-links">
                                {programs.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="footer-link"
                                            onClick={(e) => scrollToSection(e, link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h4>Support</h4>
                            <ul className="footer-links">
                                {support.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="footer-link"
                                            onClick={(e) => scrollToSection(e, link.href)}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>© {currentYear} HopeRise Foundation. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>

                <div className="footer-credit">
                    <p>
                        Template by <a href="https://matchlessgiftz.com" target="_blank" rel="noopener noreferrer" className="credit-link">Matchlessdigital Network</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
