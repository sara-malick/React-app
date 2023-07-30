
function DynamicEvents() {

    function clickHandle() {
        let randomNum = Math.floor(Math.random() * 3) + 1;
        console.log(randomNum);
        let userNum = prompt ('type a number');
        alert(`Computer number: ${randomNum}, Your guess: ${userNum}`);
    }


    return (
        <button onClick={clickHandle}>Guess the number between 1 and 3</button>
    )

}

export default DynamicEvents