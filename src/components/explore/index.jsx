import React from "react";
import "./style.scss";

import MenuImage1 from "../../assets/img/menu-1-2.png";
import MenuImage2 from "../../assets/img/menu-2-2.png";
import MenuImage3 from "../../assets/img/menu-3-2.png";

function ExploreSection() {
  return (
    <section className="explore-section">
      <div className="wrapper">
        <div className="explore-section__content">
          <div className="flow-content text-center">
            <span className="section-subtitle">Browse</span>
            <h2 className="section-title">Explore Our Menu</h2>
          </div>
          <div className="explore-section__menus">
            <ul className="explore-section__categories">
              {categoryItems.map((category) => (
                <CategoryItem key={category.id} category={category} />
              ))}
            </ul>
            <ul className="explore-section__menu-items">
              {menuItems.map((item) => (
                <MenuItem key={item.id} menuItem={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const CategoryItem = ({ category }) => {
  return (
    <li className="explore-section__category-item">
      <button> {category.title} </button>
    </li>
  );
};

const MenuItem = ({ menuItem }) => {
  return (
    <li className="explore-section__menu-item">
      <div>
        <img className="responsive-img" src={menuItem.img} alt="" />
        <div className="flow-content">
          <h3> {menuItem.title} </h3>
          <h3 className="price"> {menuItem.price} </h3>
        </div>
      </div>
    </li>
  );
};

const categoryItems = [
  { id: "1", title: "Breakfast" },
  { id: "2", title: "Lunch" },
  { id: "3", title: "Dinner" },
  { id: "4", title: "Desert" },
  { id: "5", title: "Soups" },
  { id: "6", title: "Drinks" },
];

const menuItems = [
  {
    id: "10",
    img: MenuImage1,
    title: "Chicken Massala",
    price: "$1000",
  },
  {
    id: "20",
    img: MenuImage2,
    title: "Western sunrise",
    price: "$130",
  },
  {
    id: "30",
    img: MenuImage3,
    title: "Sandwitch Soup",
    price: "$300",
  },
];

export default ExploreSection;
