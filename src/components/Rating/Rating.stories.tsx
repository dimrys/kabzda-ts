import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Rating, ValueType} from "./Rating";


export default {
    title: 'Rating',
    component: Rating,

} ;

export const EmptyRating = () => <Rating value={0} setRateValue={x => x}/>
export const Rating1 = () => <Rating value={1} setRateValue={x => x}/>
export const Rating2 = () => <Rating value={2} setRateValue={x => x}/>
export const Rating3 = () => <Rating value={3} setRateValue={x => x}/>
export const Rating4 = () => <Rating value={4} setRateValue={x => x}/>
export const Rating5 = () => <Rating value={5} setRateValue={x => x}/>
export const ChangeRating = () => {
    let [rating, setRating] = useState<ValueType>(5);
    return <Rating value={rating} setRateValue={setRating}/>
};
