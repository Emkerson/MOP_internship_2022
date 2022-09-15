import React from 'react'

const SearchBox = (props) => {
  return (
    <div className="ui icon input">
      <input
        type="text"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default SearchBox
