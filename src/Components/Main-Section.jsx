import ItemList from "./ItemList"


function MainSection({itemList, setItemList}) {


    return ( <div>
        <h2>Item list</h2>
        <ItemList itemList={itemList} setItemList={setItemList}/>
    </div>)
   
}

export default MainSection