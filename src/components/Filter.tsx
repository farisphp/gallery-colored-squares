import React from 'react';

const Filter = () => (
    <div>
        <input type="checkbox" id="redFilter"/>
        <label htmlFor="redFilter">Red {'>'} 50%</label>

        <input type="checkbox" id="greenFilter"/>
        <label htmlFor="greenFilter">Green {'>'} 50%</label>

        <input type="checkbox" id="blueFilter"/>
        <label htmlFor="blueFilter">Blue {'>'} 50%</label>

        <input type="checkbox" id="saturationFilter"/>
        <label htmlFor="saturationFilter">Saturation {'>'} 50%</label>
    </div>
);
  
export default Filter;