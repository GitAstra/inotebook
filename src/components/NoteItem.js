import React from 'react'

export default function NoteItem({title, desc, date, tag}) {
  return (
    <div className="note">
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>{date}</span>
    </div>
  )
}
