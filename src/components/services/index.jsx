import React from "react";
import "./style.scss";

import { ReactComponent as MenusIcon } from "../../assets/icons/menu.svg";
import { ReactComponent as DeliveryIcon } from "../../assets/icons/delivery.svg";
import { ReactComponent as OffersIcon } from "../../assets/icons/offer.svg";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="wrapper">
        <div className="services-section__content">
          <div className="flow-content">
            <span className="section-subtitle">Reason</span>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <ul className="services-section__cards split">
            {cartItems.map((cart) => (
              <li key={cart.id} className="services-section__card-item">
                <Cart
                  Icon={cart.icon}
                  title={cart.title}
                  description={cart.description}
                  bg={cart.bg}
                  hasShadow={cart.hasShadow}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const Cart = ({ Icon, title, description, bg, hasShadow }) => {
  return (
    <div
      className={`services-section__card bg-${bg} ${
        hasShadow && "cart--shadowed"
      } `}
    >
      <div>
        <Icon />
      </div>
      <div className="text flow-content">
        <h3> {title} </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const cartItems = [
  {
    id: "1",
    title: "Various Menus",
    description:
      "Etiam feugiat eleifend est, odio tempor vitaeVivamus maximusscelerisque ipsum nec commodo.",
    icon: MenusIcon,
    bg: "primary",
    hasShadow: false,
  },
  {
    id: "1",
    title: "Pocket Friendly Delivery",
    description:
      "Etiam feugiat eleifend est, odio tempor vitaeVivamus maximusscelerisque ipsum nec commodo.",
    icon: DeliveryIcon,
    bg: "secondary",
    hasShadow: true,
  },
  {
    id: "1",
    title: "Best Offers",
    description:
      "Etiam feugiat eleifend est, odio tempor vitaeVivamus maximusscelerisque ipsum nec commodo.",
    icon: OffersIcon,
    bg: "primary",
    hasShadow: false,
  },
];

export default ServicesSection;
