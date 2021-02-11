import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";


test("collapsed should be trie", () => {

    const state:StateType ={
        collapsed: false
    }

    const newState = reducer(state, {type:TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)

})

test("collapsed should be false", () => {

    const state:StateType ={
        collapsed: true
    }

    const newState = reducer(state, {type:TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)

})

test("error", () => {

    const state:StateType ={
        collapsed: true
    }



    expect(() => {reducer(state,{type: "FAKE"})}).toThrowError()

})