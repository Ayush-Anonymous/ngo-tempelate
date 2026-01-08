function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="hero-badge-dot"></span>
                            Making a Difference Since 2010
                        </div>
                        <h1 className="hero-title">
                            Empowering Communities,<br />
                            <span>Transforming Lives</span>
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
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-wrapper">
                            <div className="hero-image">
                                🤝
                            </div>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <div className="hero-stat-number">50K+</div>
                                <div className="hero-stat-label">Lives Changed</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-number">120+</div>
                                <div className="hero-stat-label">Projects</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
