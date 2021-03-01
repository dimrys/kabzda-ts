import React, {ChangeEvent, useState} from "react";


export const Search = () => {
    const elem = [
        {id: 0, value: 'mouse'},
        {id: 2, value: 'keyboard'},
        {id: 1, value: 'mouseDown'},
        {id: 3, value: 'click'},
        {id: 4, value: 'button'},
        {id: 5, value: 'onCkick'},
        {id: 7, value: 'keyboard'},
        {id: 6, value: 'MOUSE'},
        {id: 8, value: 'display'},
        {id: 9, value: 'diSpLay'},
        {id: 10, value: 'energy'},
        {id: 11, value: 'pen'},
        {id: 12, value: 'lists'},
        {id: 13, value: 'PC'},
        {id: 14, value: 'notebook'},
    ]

    const [value, setValue] = useState("")
    const search = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const elemForDisplay = elem.filter(el => el.value.toLowerCase().includes(value.toLowerCase()))

    return (
        <div>
            <input value={value} onChange={search}/>
            <div>
                {elemForDisplay.map(el => (<div key={el.id}>{el.value}</div>))}
            </div>
        </div>
    )
}