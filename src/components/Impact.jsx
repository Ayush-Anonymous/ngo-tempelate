function Impact() {
    const stats = [
        { number: '50,000+', label: 'Lives Impacted' },
        { number: '120+', label: 'Projects Completed' },
        { number: '35', label: 'Partner Organizations' },
        { number: '18', label: 'Countries Reached' }
    ]

    return (
        <section className="section impact" id="impact">
            <div className="container">
                <div className="impact-content">
                    <div className="impact-text">
                        <span className="section-subtitle">Our Impact</span>
                        <h2>Numbers That Tell Our Story</h2>
                        <p className="impact-description">
                            Every number represents a life changed, a community empowered, and a step
                            closer to a world where everyone has the opportunity to thrive. Our impact
                            spans continents and touches lives in meaningful, measurable ways.
                        </p>

                        <div className="impact-stats">
                            {stats.map((stat, index) => (
                                <div className="impact-stat" key={index}>
                                    <div className="impact-stat-number">{stat.number}</div>
                                    <div className="impact-stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="impact-visual">
                        <div className="impact-image">🌏</div>
                        <div className="impact-image">👨‍👩‍👧‍👦</div>
                        <div className="impact-image">📖</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
