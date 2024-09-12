import React from 'react';
import PropTypes from 'prop-types';

const ServicesSection = ({ title, description, services }) => {
  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="icon flex-shrink-0">
                <i className={service.icon}></i>
              </div>
              <div>
                <h4 className="title">
                  <a href={service.link} className="stretched-link">
                    {service.title}
                  </a>
                </h4>
                <p className="description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

ServicesSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

ServicesSection.defaultProps = {
  title: 'Services',
  description: 'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
  services: [
    {
      icon: 'bi bi-briefcase',
      title: 'Lorem Ipsum',
      description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      link: 'service-details.html',
    },
    {
      icon: 'bi bi-card-checklist',
      title: 'Dolor Sitema',
      description: 'Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata',
      link: 'service-details.html',
    },
    {
      icon: 'bi bi-bar-chart',
      title: 'Sed ut perspiciatis',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      link: 'service-details.html',
    },
    {
      icon: 'bi bi-binoculars',
      title: 'Magni Dolores',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      link: 'service-details.html',
    },
    {
      icon: 'bi bi-brightness-high',
      title: 'Nemo Enim',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
      link: 'service-details.html',
    },
    {
      icon: 'bi bi-calendar4-week',
      title: 'Eiusmod Tempor',
      description: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi',
      link: 'service-details.html',
    },
  ],
};

export default ServicesSection;
