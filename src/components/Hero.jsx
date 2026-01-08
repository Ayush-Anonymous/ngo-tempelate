function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content">
                        <div className="badge">
                            <span className="badge-dot"></span>
                            Making a Difference Since 2010
                        </div>
                        <h1 className="hero-title">
                            Empowering Communities,<br />
                            <span className="text-gradient">Transforming Lives</span>
                        </h1>
                        <p className="hero-description">
                            We are dedicated to creating sustainable change in underserved communities
                            through education, healthcare, and economic empowerment programs that
                            uplift and inspire.
                        </p>
                        <div className="hero-cta">
                            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                                Get Involved →
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection('programs')}>
                                Our Programs
                            </button>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <span className="hero-stat-number">50K+</span>
                                <span className="hero-stat-label">Lives Changed</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat">
                                <span className="hero-stat-number accent">120+</span>
                                <span className="hero-stat-label">Active Projects</span>
                            </div>
                            <div className="hero-stat-divider"></div>
                            <div className="hero-stat">
                                <span className="hero-stat-number">18</span>
                                <span className="hero-stat-label">Countries</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <img
                            src="/images/hero-bg.png"
                            alt="Community members working together"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
