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
        <section className="section contact" id="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <span className="section-subtitle">Contact Us</span>
                        <h2>Get in Touch With Us</h2>
                        <p className="contact-description">
                            Have questions about our work or want to get involved?
                            We'd love to hear from you. Reach out and let's make
                            a difference together.
                        </p>

                        <div className="contact-details">
                            {contactInfo.map((item, index) => (
                                <div className="contact-item" key={index}>
                                    <div className="contact-icon">{item.icon}</div>
                                    <div>
                                        <div className="contact-item-title">{item.title}</div>
                                        <div className="contact-item-text" style={{ whiteSpace: 'pre-line' }}>
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-input"
                                        placeholder="John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-input"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="form-input"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    placeholder="How can we help?"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    placeholder="Tell us about your inquiry..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary form-submit">
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
