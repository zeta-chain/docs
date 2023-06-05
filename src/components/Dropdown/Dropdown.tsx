import React from "react";

interface DropdownItem {
  label: string;
  href: string;
}

const Dropdown = (props: { items: DropdownItem[]; display: string }) => {
  return (
    <div>
      <div>{props.display}</div>
      <div>
        <ul>
          {props.items.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
