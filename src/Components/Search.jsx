import { useState } from "react"

function Search({itemList, setItemList, searchTerm, setSearchTerm, setSelectByName}) {

    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(inputText);
        setSelectByName(true);
        setInputText("");
    }

    return(
        <form onSubmit={handleSubmit}> <input placeholder="Search.." 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} 
        required
        type="text" /> <button type="submit">Search</button></form> 
    )
}

export default Search