import React from 'react'

const locationinfo = ({ location }) => {
  
  
  return (
    <article className='location'>
      <h2 className='location_name'>{location?.name}</h2>
      <ul className='location_list'>
        <li className='location_list_info'>
          <span className='location_list_info_title' >Type:</span>
          <span className='location_list_info_content' >{location?.type}</span>
        </li>
        <li className='location_list_info'>
          <span className='location_list_info_title' >Dimension:</span>
          <span className='location_list_info_content' >{location?.dimension}</span>
        </li>
        <li className='location_list_info'>
          <span className='location_list_info_title' >Population:</span>
          <span className='location_list_info_content' >{location?.residents.length}</span>
        </li>
      </ul>
    </article>
    
  )
}

export default locationinfo