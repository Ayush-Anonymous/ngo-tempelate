function Team() {
    const team = [
        {
            name: 'Sarah Johnson',
            role: 'Executive Director',
            avatar: '👩‍💼'
        },
        {
            name: 'Michael Chen',
            role: 'Programs Director',
            avatar: '👨‍💻'
        },
        {
            name: 'Aisha Patel',
            role: 'Community Outreach',
            avatar: '👩‍🏫'
        },
        {
            name: 'David Okonkwo',
            role: 'Field Operations',
            avatar: '👨‍🔧'
        }
    ]

    return (
        <section className="section team" id="team">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Our Team</span>
                    <h2 className="section-title">Meet the People <span className="text-gradient">Behind Our Mission</span></h2>
                    <p className="section-description">
                        Our dedicated team brings together diverse expertise and a shared passion
                        for making a difference in the world.
                    </p>
                </div>

                <div className="grid-4">
                    {team.map((member, index) => (
                        <div className="card-premium text-center" key={index} style={{ padding: '2rem' }}>
                            <div className="team-avatar glass-dark" style={{ width: '100px', height: '100px', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', border: '4px solid white', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>{member.avatar}</div>
                            <h3 className="team-name mb-1" style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                            <p className="team-role text-primary" style={{ color: 'var(--color-primary)', fontWeight: '500', fontSize: '0.9rem', marginBottom: '1rem' }}>{member.role}</p>
                            <div className="team-social" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                                <a href="#" className="team-social-link" aria-label="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                    in
                                </a>
                                <a href="#" className="team-social-link" aria-label="Twitter" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                    𝕏
                                </a>
                                <a href="#" className="team-social-link" aria-label="Email" style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                    ✉
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
