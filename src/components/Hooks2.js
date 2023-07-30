import { useState } from "react";

function Hooks2() {

    const [text, setText] = useState('Eat');

    function handleClick() {
        setText('Drink')
    }

    return (
        <div>
            <h1> {`${text} that lemon`} </h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Hooks2