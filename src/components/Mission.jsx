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
                    <span className="section-subtitle">Our Mission</span>
                    <h2 className="section-title">Creating Lasting Change Through Compassion</h2>
                    <p className="section-description">
                        Our mission is to empower underserved communities by providing access to
                        education, healthcare, and economic opportunities that create sustainable change.
                    </p>
                </div>

                <div className="values-grid">
                    {values.map((value, index) => (
                        <div className="value-card" key={index}>
                            <div className="value-icon">{value.icon}</div>
                            <h3 className="value-title">{value.title}</h3>
                            <p className="value-description">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Mission
