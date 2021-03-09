import React, {useMemo, useState} from "react";
import {Users} from "./ReactMemo.stories";


export default {
    title: "useMemo"
}


export const DifficultCounting = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000){
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    },[a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }



    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            result for a: {resultA}
        </div>
        <div>
            result for b: {resultB}
        </div>
    </>
}

export const LikeUseCallback = () => {
    console.log ('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Dima", "Masha", "Sasha"])
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    },[users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add users</button>
        {counter}
        <Users users={newArray}/>
        </>
}



