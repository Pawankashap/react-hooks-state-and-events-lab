import React,{useState} from "react";

function Item({ name, category }) {
  const [cartType, setcarttype]= useState(false)
  const [clName, setclassName]= useState(false)
  function changeClassname (){
    setclassName(!clName)
    setcarttype(!cartType)
  }
  return (
    <li className={clName?'in-cart': null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeClassname} className="add">{cartType? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
