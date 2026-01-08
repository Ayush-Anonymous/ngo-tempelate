function Impact() {
    const stats = [
        { number: '50,000+', label: 'Lives Impacted' },
        { number: '120+', label: 'Projects Completed' },
        { number: '35', label: 'Partner Organizations' },
        { number: '18', label: 'Countries Reached' }
    ]

    return (
        <section className="section impact" id="impact" style={{ background: 'var(--color-dark)', color: 'white', position: 'relative', overflow: 'hidden' }}>
            <div className="bg-gradient-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', background: 'radial-gradient(circle at center, rgba(45, 125, 70, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="impact-content grid-2 align-items-center">
                    <div className="impact-text">
                        <span className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>Our Impact</span>
                        <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Numbers That Tell <span className="text-gradient">Our Story</span></h2>
                        <p className="impact-description" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            Every number represents a life changed, a community empowered, and a step
                            closer to a world where everyone has the opportunity to thrive. Our impact
                            spans continents and touches lives in meaningful, measurable ways.
                        </p>

                        <div className="impact-stats grid-2" style={{ marginTop: '3rem' }}>
                            {stats.map((stat, index) => (
                                <div className="impact-stat" key={index}>
                                    <div className="impact-stat-number text-gradient-accent" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>{stat.number}</div>
                                    <div className="impact-stat-label" style={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="impact-visual relative">
                        <div style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', borderRadius: '24px', padding: '2rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                            {/* Abstract visual representation instead of missing image */}
                            <div className="grid-2 " style={{ gap: '1rem' }}>
                                <div className="stat-card glass-dark p-4 rounded-xl text-center float" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(0,0,0,0.3)' }}>
                                    <div style={{ fontSize: '3rem' }}>🌏</div>
                                    <div style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Global Reach</div>
                                </div>
                                <div className="stat-card glass-dark p-4 rounded-xl text-center float-delay" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(0,0,0,0.3)', marginTop: '3rem' }}>
                                    <div style={{ fontSize: '3rem' }}>❤️</div>
                                    <div style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.8)' }}>Compassion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
