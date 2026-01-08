function CTA() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="cta section" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', color: 'white', textAlign: 'center' }}>
            <div className="container">
                <div className="cta-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Make a <span style={{ color: 'var(--color-accent)' }}>Difference?</span></h2>
                    <p className="cta-description" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>
                        Join thousands of supporters who are helping us create lasting change
                        in communities around the world. Every contribution matters.
                    </p>
                    <div className="cta-buttons" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-accent" onClick={() => scrollToSection('contact')}>
                            Donate Today
                        </button>
                        <button className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }} onClick={() => scrollToSection('contact')}>
                            Become a Volunteer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
