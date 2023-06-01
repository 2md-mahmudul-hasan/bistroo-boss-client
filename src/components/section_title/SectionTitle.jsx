import React from 'react'

export default function SectionTitle({ subheading, heading }) {
  return (
    <div className='my-4 text-center w-1/4 mx-auto'>
      <p className='text-warning'>{subheading}</p>
      <h2 className='font-3xl border-y-4 py-4'>{heading}</h2>
    </div>
  )
}
