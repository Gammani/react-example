import React from "react"
import ReactDom from "react-dom"

const greeting = (str, name) => {

    return (
        <>
            <h1>{str}</h1>
            <div>меня зовут {name}</div>
        </>
    )
}

ReactDom.render(greeting('Hello World', 'Алексей Тукарев'), document.getElementById('root'));