import logo from "../../img/logo.png";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

//Styles
import "./NavBar.css";
import { Menu, Dropdown } from "semantic-ui-react";

//Component
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [section, setSection] = useState("home");

  const history = useHistory();

  useEffect(() => {
    const requestData = async () => {
      const docs = [];
      const categoriesRef = collection(db, "categories");
      const items = await getDocs(categoriesRef);
      items.forEach((doc) => {
        docs.push({ ...doc.data(), token: doc.id });
      });
      setCategories(docs);
    };
    requestData();
  }, []);

  const handleItemClick = (e, { name, text }) => {
    setSection(text);
    history.push(`/category/${name}`);
  };

  const clearClick = () => {
    setSection("");
  };

  return (
    <div className="navbar-container">
      <Menu pointing secondary size="large" color="blue">
        <Link to={`/`} onClick={clearClick}>
          <img className="logo-img" src={logo} alt="beerhouse logo" />
        </Link>

        <Menu.Menu position="right">
          {categories.map((category) => {
            return (
              <div key={category.categoryId}>
                {category.subcategories ? (
                  <Menu.Item
                    active={section === `${category.name}`}
                    onClick={handleItemClick}
                  >
                    <Dropdown text={category.name}>
                      <Dropdown.Menu>
                        {category.subcategories.map((subcategory) => {
                          return (
                            <Dropdown.Item
                              name={subcategory.description}
                              key={subcategory.categoryId}
                              text={subcategory.name}
                              onClick={handleItemClick}
                            />
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Menu.Item>
                ) : (
                  <Menu.Item
                    name={category.description}
                    text={category.name}
                    active={section === `${category.name}`}
                    onClick={handleItemClick}
                  ></Menu.Item>
                )}
              </div>
            );
          })}

          <Menu.Item>
            <Link to={`/cart`}>
              <CartWidget />
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBar;
