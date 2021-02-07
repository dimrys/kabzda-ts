import React from "react";

export type ValueType = 0| 1| 2| 3| 4| 5

export type RatingTypeProps = {
    value: ValueType
    setRateValue: (rateValue: ValueType) => void
}
export type StarTypeProps = {
    selected: boolean
    setRateValue: (code: ValueType) => void
    code: ValueType
}

export function Rating(props: RatingTypeProps) {

    return (
        <div>
            <Star selected={props.value > 0} setRateValue = {props.setRateValue} code = {1}/>
            <Star selected={props.value > 1} setRateValue = {props.setRateValue} code = {2}/>
            <Star selected={props.value > 2} setRateValue = {props.setRateValue} code = {3}/>
            <Star selected={props.value > 3} setRateValue = {props.setRateValue} code = {4}/>
            <Star selected={props.value > 4} setRateValue = {props.setRateValue} code = {5}/>
        </div>
    );
}

function Star(props: StarTypeProps) {
    return <span onClick={ () => {props.setRateValue(props.code)}}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}