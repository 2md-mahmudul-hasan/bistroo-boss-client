import React from 'react';
import SectionTitle from '../../../components/section_title/SectionTitle';
import featuredBg from '../../../assets/home/featured.jpg'

const Featured_item = () => {
  return (
    <div className='hero-overlay bg-opacity-70 my-4 bg-fixed' style={{ backgroundImage: `url(${featuredBg}) ` }} >

      <SectionTitle className="text-white" heading={"FROM OUR MENU"} subheading={"---Check it out---"}></SectionTitle>


      <div className="hero" >


        <div className="hero-content text-center p-20 text-neutral-content flex ">
          <img className='h-80' src={featuredBg} alt="image" />
          <div className="max-w-md text-white">
            <h1 className="mb-5 text-5xl font-bold">March 20, 2023 </h1>

            <h2>WHERE CAN I GET SOME?</h2>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className=" hover:bg-blue-400 text-white text-1xl font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded uppercase">View full menu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured_item;