function CTA() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="cta">
            <div className="container">
                <div className="cta-content">
                    <h2>Ready to Make a Difference?</h2>
                    <p className="cta-description">
                        Join thousands of supporters who are helping us create lasting change
                        in communities around the world. Every contribution matters.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                            Donate Today
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                            Become a Volunteer
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
