import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setappClass]=useState(true)
  //let appClass = false ? "App dark" : "App light"
  
  function handleMode (){
    
    
    setappClass(!appClass)
    

    // setappClass(function(){
    //   if(appClass==='App light'){
    //     return 'App dark'
    //   } else {
    //     return 'App light'
    //   }
    // })

  }
 
  return (
    <div className={appClass? 'App light':'App dark'}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{appClass? 'Light Mode':'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
