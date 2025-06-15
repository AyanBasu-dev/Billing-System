import React from 'react'

const SearchBox = ({onSearch}) => {
    const [searchText, setSearchText] = React.useState("");
    const handleInput = (e) => {
        setSearchText(e.target.value);
        onSearch(e.target.value);
    }
    return (
        <div className="input-group mb-3">
            <input type="text" name="" id="" className="form-control" value={searchText} onChange={handleInput} />
            <span className="input-group-text bg-warning">
                <i className="bi bi-search"></i>
            </span>
        </div>
    )
}

export default SearchBox
