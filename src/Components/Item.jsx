

function Item({itemList}) {
    console.log(itemList, "itemlissssst")
    return ( <ul>
        {itemList.map((item, index) => {
            const {item_name} = item
        return (<li key={item.id}
            >
                <div>
                    <h2>{item_name}</h2>
                </div>
            </li>)
    
        })}
    </ul>
    )
}

export default Item