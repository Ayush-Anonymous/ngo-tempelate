function Mission() {
    const values = [
        {
            icon: '💡',
            title: 'Empowerment',
            description: 'We believe in giving people the tools and knowledge to create their own success stories and break cycles of poverty.'
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'We work hand-in-hand with local communities, governments, and partners to maximize our collective impact.'
        },
        {
            icon: '🌱',
            title: 'Sustainability',
            description: 'Our programs are designed for long-term success, ensuring communities can thrive independently.'
        }
    ]

    return (
        <section className="section mission" id="mission">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Our Mission</span>
                    <h2 className="section-title">Creating Lasting Change Through <span className="text-gradient">Compassion</span></h2>
                    <p className="section-description">
                        Our mission is to empower underserved communities by providing access to
                        education, healthcare, and economic opportunities that create sustainable change.
                    </p>
                </div>

                <div className="grid-3">
                    {values.map((value, index) => (
                        <div className="card-premium text-center" key={index} style={{ padding: '3rem 2rem' }}>
                            <div className="value-icon" style={{ fontSize: '3rem', marginBottom: '1.5rem', background: 'var(--color-primary-soft)', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', margin: '0 auto 1.5rem' }}>{value.icon}</div>
                            <h3 className="value-title mb-3" style={{ fontSize: '1.5rem' }}>{value.title}</h3>
                            <p className="value-description text-gray-500">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Mission
