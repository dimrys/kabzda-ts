import React, {useState} from "react";

type DefaultValueType = 0| 1| 2| 3| 4| 5

type UncontrolledRatingTypeProps = {
    defaultValue?: DefaultValueType
    onChange: (value: DefaultValueType) => void
}


export function UncontrolledRating(props: UncontrolledRatingTypeProps) {

    let [rat, setRate] = useState<number>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={rat > 0} setRate = {() => {setRate(1); props.onChange(1)}} />
            <Star selected={rat > 1} setRate = {() => {setRate(2); props.onChange(2)}} />
            <Star selected={rat > 2} setRate = {() => {setRate(3); props.onChange(3)}} />
            <Star selected={rat > 3} setRate = {() => {setRate(4); props.onChange(4)}} />
            <Star selected={rat > 4} setRate = {() => {setRate(5); props.onChange(5)}} />
        </div>
    );
}


type UncontrolledStarTypeProps = {
    selected: boolean
    setRate: ( ) => void
}

function Star(props: UncontrolledStarTypeProps) {
    return  <span onClick={() => {props.setRate()}}>
        {props.selected ? <b>star </b> : "star " }
    </span>
}