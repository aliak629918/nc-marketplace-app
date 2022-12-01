
import { useEffect } from "react"
import Item from "./Item"

function ItemList({setItemList, itemList}) {
    useEffect(() => {
       fetch("https://fe-nc-marketplace-aak-ka.cyclic.app/api/items") 
    .then((response) => response.json()
    ).then((data) => {
setItemList(data.items)
    });
    }, [])
    
    return (
    <div> <h3>ITEMS..</h3>

    <Item itemList={itemList} /></div>
   )
}

export default ItemList