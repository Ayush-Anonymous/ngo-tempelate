import { useEffect, useRef } from 'react'

function Impact() {
    const sectionRef = useRef(null)

    const stats = [
        { number: '50K+', label: 'Lives Impacted', icon: '👥' },
        { number: '120+', label: 'Projects', icon: '📊' },
        { number: '35', label: 'Partners', icon: '🤝' },
        { number: '18', label: 'Countries', icon: '🌍' }
    ]

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.impact-card-3d')
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2

                const rotateX = (y / rect.height) * -10
                const rotateY = (x / rect.width) * 10

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
            })
        }

        const handleMouseLeave = () => {
            const cards = document.querySelectorAll('.impact-card-3d')
            cards.forEach((card) => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
            })
        }

        const section = sectionRef.current
        if (section) {
            section.addEventListener('mousemove', handleMouseMove)
            section.addEventListener('mouseleave', handleMouseLeave)
        }

        return () => {
            if (section) {
                section.removeEventListener('mousemove', handleMouseMove)
                section.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    return (
        <section className="impact-section" id="impact" ref={sectionRef}>
            <div className="impact-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>

            <div className="container">
                <div className="impact-header">
                    <span className="badge badge-light">Our Impact</span>
                    <h2 className="impact-title">
                        Numbers That Tell <span className="text-gradient-accent">Our Story</span>
                    </h2>
                    <p className="impact-subtitle">
                        Every number represents a life changed, a community empowered, and a step
                        closer to a world where everyone has the opportunity to thrive.
                    </p>
                </div>

                <div className="impact-stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            className="impact-card-3d"
                            key={index}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="impact-card-inner">
                                <div className="impact-card-icon">{stat.icon}</div>
                                <div className="impact-card-number">{stat.number}</div>
                                <div className="impact-card-label">{stat.label}</div>
                                <div className="impact-card-glow"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="impact-cta">
                    <button className="btn btn-accent">See Our Full Report →</button>
                </div>
            </div>
        </section>
    )
}

export default Impact
