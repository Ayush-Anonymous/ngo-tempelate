function Programs() {
    const programs = [
        {
            icon: '📚',
            category: 'Education',
            title: 'School Building Initiative',
            description: 'Constructing and equipping schools in remote areas to provide quality education for children who would otherwise have no access.'
        },
        {
            icon: '🏥',
            category: 'Healthcare',
            title: 'Mobile Health Clinics',
            description: 'Bringing essential healthcare services to underserved communities through our fleet of fully-equipped mobile medical units.'
        },
        {
            icon: '💼',
            category: 'Economic',
            title: 'Skills Training Program',
            description: 'Vocational training and micro-loan programs that help individuals start businesses and achieve financial independence.'
        }
    ]

    return (
        <section className="section programs" id="programs">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Programs</span>
                    <h2 className="section-title">Making Impact Where It Matters</h2>
                    <p className="section-description">
                        Our comprehensive programs address the root causes of poverty and inequality,
                        creating pathways to a better future.
                    </p>
                </div>

                <div className="programs-grid">
                    {programs.map((program, index) => (
                        <div className="program-card" key={index}>
                            <div className="program-image">{program.icon}</div>
                            <div className="program-content">
                                <span className="program-category">{program.category}</span>
                                <h3 className="program-title">{program.title}</h3>
                                <p className="program-description">{program.description}</p>
                                <a href="#" className="program-link">
                                    Learn More <span>→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Programs
