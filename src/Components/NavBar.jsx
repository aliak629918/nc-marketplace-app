import Basket from "./Basket"
import Categories from "./Categories"
import YourItems from "./YourItems"

function NavBar({setSelectByName, setFilterCategory, filterCategory}) {
    return(
    <div>
        <Categories setSelectByName={setSelectByName} setFilterCategory={setFilterCategory} filterCategory={filterCategory}/>
        <Basket/>
        <YourItems/>

    </div>
        

    )
}

export default NavBar