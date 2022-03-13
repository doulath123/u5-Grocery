import { useState } from "react"
import {GroceryInput} from "./GroceryInput.jsx" 

import { GroceryList } from "./GroceryList.jsx"
export const Grocery=()=>{
    const [grocerys, setGrocerys]=useState([]);
    const addGrocery=(data)=>{
        setGrocerys([...grocerys,data])
    }
    return (
        <div>
            <GroceryInput addGrocery={addGrocery}/>
            {grocerys.map((e)=>(
      <GroceryList grocery={e}/>
    ))}

        </div>
    )
}