function Programs() {
    const programs = [
        {
            image: '/images/program-education.png',
            category: 'Education',
            title: 'School Building Initiative',
            description: 'Constructing and equipping schools in remote areas to provide quality education for children who would otherwise have no access.'
        },
        {
            image: '/images/program-healthcare.png',
            category: 'Healthcare',
            title: 'Mobile Health Clinics',
            description: 'Bringing essential healthcare services to underserved communities through our fleet of fully-equipped mobile medical units.'
        },
        {
            image: '/images/program-economic.png',
            category: 'Economic',
            title: 'Skills Training Program',
            description: 'Vocational training and micro-loan programs that help individuals start businesses and achieve financial independence.'
        }
    ]

    return (
        <section className="section programs" id="programs" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="badge">Our Programs</span>
                    <h2 className="section-title">Making Impact <span className="text-gradient">Where It Matters</span></h2>
                    <p className="section-description">
                        Our comprehensive programs address the root causes of poverty and inequality,
                        creating pathways to a better future.
                    </p>
                </div>

                <div className="grid-3">
                    {programs.map((program, index) => (
                        <div className="card-premium" key={index}>
                            <div className="program-image-wrapper" style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <img src={program.image} alt={program.title} className="program-image" loading="lazy" style={{ width: '100%', height: '240px', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                            </div>
                            <div className="program-content">
                                <span className="program-category text-sm font-bold text-primary mb-2 display-block" style={{ color: 'var(--color-primary-light)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem', display: 'block' }}>{program.category}</span>
                                <h3 className="program-title mb-3" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{program.title}</h3>
                                <p className="program-description text-gray-500 mb-4" style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>{program.description}</p>
                                <a href="#" className="program-link" style={{ fontWeight: '600', color: 'var(--color-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
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
