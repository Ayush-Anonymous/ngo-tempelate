function Hero() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="hero" id="hero">
            <div className="hero-bg"></div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="badge">
                            <span className="badge-dot"></span>
                            Making a Difference Since 2010
                        </div>
                        <h1 className="hero-title animate-slide-up">
                            Empowering Communities,<br />
                            <span className="text-gradient">Transforming Lives</span>
                        </h1>
                        <p className="hero-description animate-slide-up" style={{ animationDelay: '0.1s' }}>
                            We are dedicated to creating sustainable change in underserved communities
                            through education, healthcare, and economic empowerment programs that
                            uplift and inspire.
                        </p>
                        <div className="hero-cta animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                                Get Involved →
                            </button>
                            <button className="btn btn-secondary" onClick={() => scrollToSection('programs')}>
                                Our Programs
                            </button>
                        </div>

                        <div className="hero-stats-new animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="stat-item text-center">
                                <h3 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>50K+</h3>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0' }}>Lives Changed</p>
                            </div>
                            <div style={{ width: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
                            <div className="stat-item text-center">
                                <h3 className="text-gradient-accent" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>120+</h3>
                                <p style={{ color: '#6b7280', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0' }}>Active Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
