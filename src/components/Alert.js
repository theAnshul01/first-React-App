import React from 'react'

export default function Alert(props) {
    const Capitalize = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); 
  }
  return (
        <div style={{height:'50px' , marginBottom: '10px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>   */}
        </div>}
        {/* we enclosed the above syntax into javascript curly braces as javascript can't be written in jsx directly */}
        </div>
  )
}