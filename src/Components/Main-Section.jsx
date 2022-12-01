import ItemList from "./ItemList"
import {useState} from "react"

function MainSection() {
const [itemList, setItemList] = useState([]);

    return ( <div>
        <h2>Item list</h2>
        <ItemList itemList={itemList} setItemList={setItemList}/>
    </div>)
   
}

export default MainSection