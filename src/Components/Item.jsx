

function Item({itemList}) {
    console.log(itemList, "itemlissssst")
    return ( <ul>
        {itemList.map((item, index) => {

        return (<li key={item.item_id}
            >
                <div>
                    <h2>{item.item_name}</h2>
                    <img src={item.img_url} alt={item.item_name} />
                    <h4>£{item.price}</h4>
                    <p>{item.description}</p>
                    <button>Add to basket</button>
                </div>
            </li>)
    
        })}
    </ul>
    )
}

export default Item