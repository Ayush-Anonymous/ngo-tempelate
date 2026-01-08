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
                    <span className="section-subtitle">Our Team</span>
                    <h2 className="section-title">Meet the People Behind Our Mission</h2>
                    <p className="section-description">
                        Our dedicated team brings together diverse expertise and a shared passion
                        for making a difference in the world.
                    </p>
                </div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-avatar">{member.avatar}</div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-social">
                                <a href="#" className="team-social-link" aria-label="LinkedIn">
                                    in
                                </a>
                                <a href="#" className="team-social-link" aria-label="Twitter">
                                    𝕏
                                </a>
                                <a href="#" className="team-social-link" aria-label="Email">
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
