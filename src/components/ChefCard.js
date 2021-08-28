import React from 'react'

function ChefCard(props) {
  const photo = props.photo
  const name = props.name
  return (
    <div className="chef_parent">
      <div className="chef_img">
      <img src={photo} alt="" />  
      </div>
      <div className="chef_name">
        {name}
      </div>
      <div className="chef_description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, temporibus?
      </div>
    </div>
  )
}

export default ChefCard
