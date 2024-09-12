import React from 'react';
import PropTypes from 'prop-types';

const ContactSection = ({ contactInfo, mapSrc, formAction }) => {
    return (
        <section id="contact" className="contact section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
                <h2>Contact</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            {/* End Section Title */}

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4">
                    {/* Contact Information */}
                    <div className="col-lg-5">
                        <div className="info-wrap">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="info-item d-flex"
                                    data-aos="fade-up"
                                    data-aos-delay={(index + 1) * 100}
                                >
                                    <i className={`bi ${info.icon} flex-shrink-0`}></i>
                                    <div>
                                        <h3>{info.title}</h3>
                                        <p>{info.details}</p>
                                    </div>
                                </div>
                            ))}
                            <iframe
                                src={mapSrc}
                                frameBorder="0"
                                style={{ border: '0', width: '100%', height: '270px' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    {/* End Contact Information */}

                    {/* Contact Form */}
                    <div className="col-lg-7">
                        <form action={formAction} method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <label htmlFor="name-field" className="pb-2">Your Name</label>
                                    <input type="text" name="name" id="name-field" className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email-field" className="pb-2">Your Email</label>
                                    <input type="email" className="form-control" name="email" id="email-field" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="subject-field" className="pb-2">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject-field" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="message-field" className="pb-2">Message</label>
                                    <textarea className="form-control" name="message" rows="10" id="message-field" required></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                    <button type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* End Contact Form */}
                </div>
            </div>
        </section>
    );
};

ContactSection.propTypes = {
    contactInfo: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired,
        })
    ).isRequired,
    mapSrc: PropTypes.string.isRequired,
    formAction: PropTypes.string.isRequired,
};

ContactSection.defaultProps = {
    contactInfo: [
        {
            icon: 'bi-geo-alt',
            title: 'Address',
            details: 'A108 Adam Street, New York, NY 535022',
        },
        {
            icon: 'bi-telephone',
            title: 'Call Us',
            details: '+1 5589 55488 55',
        },
        {
            icon: 'bi-envelope',
            title: 'Email Us',
            details: 'info@example.com',
        },
    ],
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus',
    formAction: 'forms/contact.php',
};

export default ContactSection;
