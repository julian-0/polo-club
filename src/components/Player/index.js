import React from 'react'

export default function Player({ id, name, age, handicap }) {
  return (
    <div className="Player">
      <h4>{name}</h4>
      <h5>Age: {age}</h5>
      <h5>Handicap: {handicap}</h5>
    </div>

  )
}