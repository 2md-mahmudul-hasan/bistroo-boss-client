import React from 'react';
import SectionTitle from '../../../components/section_title/SectionTitle';
import img1 from '../../../assets/home/chef-service.jpg'
import './chef.css'

const ChefRecomends = () => {
  return (
    <div>
      <SectionTitle heading={"CHEF RECOMMENDS"} subheading="should try"></SectionTitle>
      <div className="chef_recommend grid grid-cols-3 gap-2">

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-600 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-active btn-secondary">add to cart</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomends;