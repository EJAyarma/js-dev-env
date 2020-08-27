import './index.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

/* eslint-disable no-console */
// debugger;
console.log(`I would like to pay ${courseValue} for this awesome course`);