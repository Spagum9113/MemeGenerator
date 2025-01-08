import React from "react"

function Product(props) {
    return (
        <div>

            <h1>just a test</h1>

            <h3>id = {props.product.id}</h3>
            <h3>name = {props.product.name}</h3>
            <h3>price = ${props.product.price}</h3>
            <h3>description = {props.product.description}</h3>
            <hr></hr>

        </div>

    )
}

export default Product