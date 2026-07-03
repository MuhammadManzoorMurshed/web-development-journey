import React, { use, useEffect } from 'react';
import PricingCard from './pricing-card/PricingCard';
import DaisyPricingCard from './daisy-pricing-card/DaisyPricingCard';

const PricingOptions = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);

    useEffect(() => {
        console.log(pricingData);
    }, [pricingData])

    return (
        <div>
            <h2 className='text-5xl text-center'>Get Our Membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pd => <PricingCard key={pd.id} pricingDatum={pd}></PricingCard>)
                } */}

                {/* {
                    pricingData.map(pd => <PricingCard key={pd.id} pricingDatum={pd}></PricingCard>)
                } */}

                {
                    pricingData.map(pd => <DaisyPricingCard key={pd.id} pricingDatum={pd}></DaisyPricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;