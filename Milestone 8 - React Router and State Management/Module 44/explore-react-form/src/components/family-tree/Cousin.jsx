import React from 'react';
import Special from './Special';
import Friend from './Friend';

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>

            {
                name === "Tonima" && <Special asset={asset}></Special>
            }

            {
                name === "Manzoor" && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;