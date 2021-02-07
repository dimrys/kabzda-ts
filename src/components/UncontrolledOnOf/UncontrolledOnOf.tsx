import React, {useState} from "react";


type OnOfTypeProps = {
    onShang: (on: boolean) => void
    defaultOn?: boolean
}


export function UncontrolledOnOf(props: OnOfTypeProps) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        padding: '2px',
        backgroundColor : on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: '5px',
        padding: '2px',
        backgroundColor : on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: "inline-block",
        marginLeft: '5px',
        backgroundColor : on ? 'green' : 'red',

    }
    const onSwich = () => {props.onShang(true)
        setOn(true)}

    const ofSwich = () => {props.onShang(false)
        setOn(false)}

    return (
        <div>
            <div style={onStyle} onClick={onSwich}>On</div>
            <div style={offStyle} onClick={ofSwich}>Off</div>
            <div style={indicatorStyle}></div>
        </div>

    )

}