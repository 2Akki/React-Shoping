import React,{ useState,useReducer,useEffect } from 'react'
const initialState ={count:0}


function reducer(state,action) {
    switch(action.type) {
        case 'like':
            return {count:state.count+1};

        case "dislike":
            return {count:state.count-1}
        case 'Default':
            return "Action Unkown"
    }   

}
// function reducer(state,action) {
//     switch(action.type) {
//         case 'Like':
//             return state.count++;

//         case "dislike":
//             return state.count--
//         case 'Default':
//             return "Action Unkown"
//     }   

// }

export default function ReducerDemoComponent() {
    useEffect(() =>{
        alert("component mounted")
        alert(navigator.cookieEnabled===true ? "You can login":"Pls enable cookies first if you want to login")
        return ()=>{
            alert("Component Unmounted")
        }
    },[])
    const [state, dispatch] = useReducer(reducer,initialState)
    return (
        <div className="container-fluid">
            <h2>Reducer Demo - {state.count} like(s)</h2>
            <button onClick = {()=> dispatch({type: 'like'})}>Like </button>
            <button onClick ={()=> dispatch({type:"dislike"})}>Dislike </button>
        </div>
    )
}
