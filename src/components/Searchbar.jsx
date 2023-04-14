import React, { useState } from 'react'

export default function Searchbar({setSearchValue}) {

  return (
    <div className="search">
        <input onChange={e => {
          setSearchValue(e.target.value)
        }} className="search-input" type="search" placeholder="search" />
    </div>
  )
}
