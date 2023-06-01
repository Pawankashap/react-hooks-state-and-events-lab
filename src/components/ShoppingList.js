import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [myitems, setItems] = useState(items);
  let updatedItems=[...items];
  function checkCategory (event){
  
    let categoryValue=event.target.value;
    if(categoryValue!=='All'){
       updatedItems = items.filter(item => item.category === categoryValue)
       setItems(updatedItems)
    } else {
      setItems(items)
    }
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={checkCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {myitems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
