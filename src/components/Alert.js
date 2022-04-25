import React from 'react'

export default function Alert(props) {
  return (
        <div className={`alert ${props.type === 'green' ? 'green' : 'red'}`}>
            <div className="container">
            {props.message}
            </div>
        </div>
  )
}
