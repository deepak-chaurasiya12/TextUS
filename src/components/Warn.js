import React from 'react'

function Warn(props) {
  const capitalization=(word)=>{
    const lower =word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  } 

  return (
      props.warn && <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{capitalization(props.warn.type)}</strong> :{props.warn.message}
          
    </div>
   
  )
}

export default Warn