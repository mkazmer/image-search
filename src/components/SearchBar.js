import React, { useState } from 'react'

const SearchBar = ({ searchTerm }) => {
  const [searchInput, updateInput] = useState('')

  return (
    <div className="SeachBar ui segment">
      <form
        onSubmit={e => {
          e.preventDefault()
          searchTerm(searchInput)
        }}
        className="ui form"
      >
        <div className="field">
          <label>
            Image Search
            <input
              type="text"
              value={searchInput}
              onChange={e => {
                updateInput(e.target.value)
              }}
            ></input>
          </label>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
