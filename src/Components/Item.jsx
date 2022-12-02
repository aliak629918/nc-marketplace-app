import { useState } from "react"
import Popup from "reactjs-popup"

function Item({itemList}) {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [isDisabled, setIsDisabled] = useState(false)

    const handleClick = () => {
        setIsDisabled(true);
        alert('Item Ordered');
        setOpen(o => !o)
    }
    return ( <ul>
        {itemList.map((item) => {

        return (<li key={item.item_id}
            >
                <div>
                    <h2>{item.item_name}</h2>
                    <img src={item.img_url} alt={item.item_name} />
                    <h4>£{item.price}</h4>
                    <p>{item.description}</p>
                    
                    <button disabled={true}type="button"
                    onClick={handleClick}
                    >Order Now</button> 
                    </div>
            </li>)
    
        })}
    </ul>
    )
}

export default Item