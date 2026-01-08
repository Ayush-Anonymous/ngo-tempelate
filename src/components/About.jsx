function About() {
    const features = [
        { icon: '✨', text: 'Transparent Operations' },
        { icon: '🤝', text: 'Community Focused' },
        { icon: '🌱', text: 'Sustainable Impact' },
        { icon: '⭐', text: 'Professional Team' }
    ]

    return (
        <section className="section about" id="about">
            <div className="container">
                <div className="about-content grid-2 align-items-center">
                    <div className="about-image-wrapper animate-slideInLeft">
                        <img src="/images/about.png" alt="Volunteer teaching child" className="about-image" />
                        <div className="about-experience glass-dark" style={{ position: 'absolute', bottom: '2rem', right: '2rem', padding: '1.5rem', borderRadius: '16px', color: 'white' }}>
                            <div className="about-experience-number text-gradient-accent" style={{ fontSize: '2.5rem', fontWeight: '800' }}>14+</div>
                            <div className="about-experience-text" style={{ fontSize: '0.9rem', opacity: '0.9' }}>Years of Impact</div>
                        </div>
                    </div>

                    <div className="about-text animate-slideInRight">
                        <span className="badge">About Us</span>
                        <h2>Dedicated to Building a <span className="text-gradient">Better Tomorrow</span></h2>
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

                        <div className="about-features grid-2">
                            {features.map((feature, index) => (
                                <div className="about-feature" key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div className="about-feature-icon" style={{ fontSize: '1.25rem' }}>{feature.icon}</div>
                                    <span className="about-feature-text font-weight-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-primary mt-lg" style={{ marginTop: '2rem' }}>Learn More About Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
