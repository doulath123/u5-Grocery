export const GroceryList=({grocery})=>{
    return <div>{grocery}
    <button onClick={(e)=>{
       
              e.target.parentNode.remove()
                
            }}>DELETE</button>
    </div>;
};