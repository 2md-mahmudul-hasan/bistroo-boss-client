import React from 'react'
import bistrooImg from '../../../assets/home/banner.jpg'

export default function BistrooBoss() {
  return (
    <div className="hero p-10 h-70 hero-overlay  bg-opacity-60" style={{ backgroundImage: `url(${bistrooImg})` }}>
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md bg-white p-5 text-zinc-950">
          <h1 className="mb-5 text-3xl font-bold">Bistro Boss</h1>
          <p className="mb-5">Fast food resturant. 25 posts; 89 followers; 72 following. Till stock lasts · Saturday Night Live Music by Raaz Babu Nepal. See you Boss Bistro family ...</p>

        </div>
      </div>
    </div>
  )
}
