import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // For a static website, just show an alert
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
    }

    const contactInfo = [
        {
            icon: '📍',
            title: 'Our Address',
            text: '123 Hope Street, Community Center\nNew York, NY 10001'
        },
        {
            icon: '📞',
            title: 'Phone Number',
            text: '+1 (555) 123-4567\n+1 (555) 987-6543'
        },
        {
            icon: '✉️',
            title: 'Email Address',
            text: 'info@hoperise.org\nsupport@hoperise.org'
        }
    ]

    return (
        <section className="section contact" id="contact" style={{ background: '#f8fafc' }}>
            <div className="container">
                <div className="contact-content grid-2" style={{ gap: '4rem' }}>
                    <div className="contact-info">
                        <span className="badge">Contact Us</span>
                        <h2 style={{ marginBottom: '1.5rem' }}>Get in Touch <span className="text-gradient">With Us</span></h2>
                        <p className="contact-description" style={{ marginBottom: '3rem' }}>
                            Have questions about our work or want to get involved?
                            We'd love to hear from you. Reach out and let's make
                            a difference together.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <div className="contact-item card-premium" key={index} style={{ display: 'flex', gap: '1rem', padding: '1.5rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                                    <div className="contact-icon" style={{ fontSize: '1.5rem', background: 'var(--color-primary-soft)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.icon}</div>
                                    <div>
                                        <div className="contact-item-title" style={{ fontWeight: '700', marginBottom: '0.25rem' }}>{item.title}</div>
                                        <div className="contact-item-text text-gray-500" style={{ whiteSpace: 'pre-line', fontSize: '0.9rem' }}>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form card-premium" onSubmit={handleSubmit} style={{ padding: '3rem' }}>
                            <div className="grid-2 gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="firstName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-input"
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="lastName" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-input"
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid-2 gap-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                                <label className="form-label" htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group" style={{ marginBottom: '2rem' }}>
                                <label className="form-label" htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', fontSize: '0.9rem' }}>Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', minHeight: '150px' }}
                                    placeholder="Tell us about your inquiry..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary form-submit" style={{ width: '100%' }}>
                                Send Message →
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
