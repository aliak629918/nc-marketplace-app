import { useState, useEffect } from "react"


function Categories({setSelectByName, setFilterCategory, filterCategory}) {
    useEffect(() => {
        fetch("https://fe-nc-marketplace-aak-ka.cyclic.app/api/categories") 
     .then((response) => response.json()
     ).then((data) => {
 setFilterCategory(data.Categories)
 console.log(data.categories, "cattt")
     });
     }, [])

     const handleSubmit = (e) => {
        e.preventDefault();
        setFilterCategory({...filterCategory});
        setSelectByName(false);
     }
    return(
    <form action="" onSubmit={
        handleSubmit
    }>
        <label id="Category Label"> Categories</label>
        <select onChange={(e) => {setFilterCategory(e.target.value)}} name="Categories" id="Categories"> <option value="Electronics"> Electronics</option>
        <option value="Household">Household</option> <option value="Clothing">Clothing</option>
        </select>
    </form>
    )
}


export default Categories