
import './ServiceCards.css'

function ServicesCards({ limit }) {
  const servicesData = [
    {
      id: 1,
      icon: "fas fa-globe",
      title: "Custom Website Development",
      description:
        "Bespoke websites built with modern frameworks like React, Next.js, and Laravel for optimal performance and scalability.",
    },
    {
      id: 2,
      icon: "fas fa-shopping-cart",
      title: "E-Commerce Solutions",
      description:
        "Powerful online stores with Shopify, WooCommerce, or custom carts — secure payments, inventory, and seamless UX.",
    },
    {
      id: 3,
      icon: "fas fa-mobile-alt",
      title: "Custom Mobile App Development",
      description: 
        "High-performance Android and iOS apps built with React Native and native technologies for smooth UX, performance, and scalability.",
    },
    {
      id: 4,
      icon: "fas fa-mobile-alt",
      title: "Responsive Web Design",
      description:
        "Mobile-first designs that look stunning on all devices, improving user engagement and conversion rates.",
    },
    {
      id: 5,
      icon: "fas fa-chart-line",
      title: "SEO & Performance Optimization",
      description:
        "Lightning-fast load times, Core Web Vitals, and SEO-friendly code to rank higher on search engines.",
    },
  ];

  const services = limit
    ? servicesData.slice(0, limit)
    : servicesData;

  return (
    <>
      {services.map((service) => (
        <div
          className="col-lg-4 col-md-6"
          key={service.id}
        >
          <div className="service-card">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>

            <h4>{service.title}</h4>

            <p>{service.description}</p>

            <a href="#" className="service-link">
              Learn More{" "}
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default ServicesCards;