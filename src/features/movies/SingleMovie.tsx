import React from 'react'
import { useParams } from 'react-router-dom'

function SingleMovie() {
  const { id } = useParams();

  return (
    <div>{id}
      <h1 className='text-red-500'>hi</h1>
    </div>
  )
}

export default SingleMovie