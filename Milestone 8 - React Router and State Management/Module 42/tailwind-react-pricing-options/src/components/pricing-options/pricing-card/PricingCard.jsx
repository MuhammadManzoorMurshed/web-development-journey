import React from 'react';
import PricingFeature from './pricing-feature/PricingFeature';

const PricingCard = ({ pricingDatum }) => {
    // console.log(pricingDatum);

    return (
        <div className='flex flex-col text-white border bg-amber-600 rounded-2xl p-4'>
            {/* Card Header */}
            <h1 className='text-7xl'>{pricingDatum.name}</h1>
            <h4 className='text-3xl'>{pricingDatum.price}</h4>
        
            {/* Card Body */}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
                <p>{pricingDatum.description}</p>

                {
                    pricingDatum.features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;