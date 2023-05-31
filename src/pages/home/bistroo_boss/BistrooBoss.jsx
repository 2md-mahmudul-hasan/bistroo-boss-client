import React from 'react'
import bistrooImg from '../../../assets/home/banner.jpg'

export default function BistrooBoss() {
  return (
<div className="hero h-70" style={{ backgroundImage: `url(${bistrooImg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md bg-white p-3 text-zinc-950">
      <h1 className="mb-5 text-3xl font-bold">Bistro Boss</h1>
      <p className="mb-5">Fast food resturant. 25 posts; 89 followers; 72 following. Till stock lasts · Saturday Night Live Music by Raaz Babu Nepal. See you Boss Bistro family ...</p>

    </div>
  </div>
</div>
  )
}
