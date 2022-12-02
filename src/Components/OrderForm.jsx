function OrderForm({}) {
    return 
    <section>
        <h2>{item.item_name}</h2>
        <img src={item.img_url} alt={item.item_name} />
        <h4>£{item.price}</h4>
    <form>
        <input>Full Name</input>
        <input>Address</input>
        <input>Payment</input>
        <input>Email Address</input>
        <submit>Submit</submit>
    </form>
    </section>
}

export default OrderForm