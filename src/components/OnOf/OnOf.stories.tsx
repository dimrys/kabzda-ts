import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {OnOf} from "./OnOf";
import { action } from "@storybook/addon-actions"




export default {
    title: 'OnOff',
    component: OnOf,

} ;

export const OnMode = () => <OnOf on={true} setOn={action('on or of')}/>
export const OffMode = () => <OnOf on={false} setOn={action('on or of')}/>

export const ChangeMode = () => {
    let [value, setValue] = useState<boolean>(true);
    return <OnOf on={value} setOn={setValue}/>
};

