import React from "react"

function Conditional(props) {

    if (props.isLoading === true) {
        return (
            <h1>I am still loading fuckhead</h1>
        )
    }

    else {
        return (
            <h1> Wow you actually waited dumbass </h1>
        )
    }
}




export default Conditional