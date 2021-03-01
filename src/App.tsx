import React, {useState} from 'react';
import './App.css';

import {Rating, ValueType} from "./components/Rating/Rating";
import {Title} from "./components/Title";
import {UncontrolledOnOf} from "./components/UncontrolledOnOf/UncontrolledOnOf";

import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOf} from "./components/OnOf/OnOf";
import {Accordion} from "./components/Accordion";
import {Search} from "./components/Task/task";


function App() {
    let [rateValue, setRateValue] = useState<ValueType>( 0)
    let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)
    let [on, setOn] = useState(false)


    return (
        <div className={"App"}>
            {/*<UncontrolledOnOf onShang ={setOn}/> {on.toString()}*/}
            {/*<OnOf on = {on} setOn = {setOn}/>*/}
            <Search/>
            {/*<Accordion*/}
            {/*    title={"My Accordion1"}*/}
            {/*    collapsed={collapsedAccordion}*/}
            {/*    setCollapsedAccordion = {setCollapsedAccordion}*/}
            {/*/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={rateValue} setRateValue = {setRateValue} />*/}
            {/*<UncontrolledRating/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UncontrolledOnOf/>*/}
            {/*<UncontrolledOnOf/>*/}
            {/*<UncontrolledOnOf/>*/}
            {/*<Accordion title={"ControlledAccordion"} value={5} collapsed={false}/>*/}
            {/*<UncontrolledAccordion title={'UncontrolledAccordion'} value={5}/>*/}

            {/*<UncontrolledRating/>*/}
            {/*<Rating value={2}/>*/}
        </div>
    );
}


export default App;
