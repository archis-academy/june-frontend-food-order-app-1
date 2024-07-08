import React, { useState, useEffect, useRef } from "react";
import "./DropdownMenu.scss";

function DropdownMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {isOpen ? (
          <img src="./public/up-arrow.svg" alt="" />
        ) : (
          <img src="./public/down-arrow.svg" alt="" />
        )}{" "}
        {selectedItem || items[0]}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;

// DropdownMenu componentini kullanacağınız fonksiyonda items prop'u ile dropdown menüde gösterilecek öğeleri belirtin.
// Örneğin:
// const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
// Sonra DropdownMenu componentini nerede kullanacaksanız oraya
// <DropdownMenu items={dropdownItems} />
// yazın.
