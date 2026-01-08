function About() {
    const features = [
        { icon: '✓', text: 'Transparent Operations' },
        { icon: '✓', text: 'Community Focused' },
        { icon: '✓', text: 'Sustainable Impact' },
        { icon: '✓', text: 'Professional Team' }
    ]

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image">🌍</div>
                        <div className="about-experience">
                            <div className="about-experience-number">14+</div>
                            <div className="about-experience-text">Years of Impact</div>
                        </div>
                    </div>

                    <div className="about-text">
                        <span className="section-subtitle">About Us</span>
                        <h2>Dedicated to Building a Better Tomorrow</h2>
                        <p className="about-description">
                            HopeRise Foundation was established with a simple yet powerful vision:
                            to create lasting change in communities facing adversity. Over the years,
                            we've grown from a small grassroots initiative to an organization that
                            has touched the lives of thousands.
                        </p>
                        <p className="about-description">
                            Our approach combines immediate relief with long-term development strategies,
                            ensuring that our impact continues well beyond our direct involvement.
                            We believe in empowering individuals with the tools and knowledge they
                            need to build better futures for themselves and their families.
                        </p>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <div className="about-feature" key={index}>
                                    <div className="about-feature-icon">{feature.icon}</div>
                                    <span className="about-feature-text">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-primary">Learn More About Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
