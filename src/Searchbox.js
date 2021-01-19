import React from 'react';
import './Searchbox.css'

 const Searchbox=({searchChange})=>{
    return (
        <input 
        className='inputbox'
        type="text" 
        placeholder="search by first name"
        onChange= {searchChange}
      />
    )
}

export default Searchbox
