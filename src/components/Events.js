
function Events() {

    const clickHandler = () => console.log('clicked');
    const hoverHandler = () => console.log('hovered');
    return (
        <div>
            <button onClick={clickHandler}>Click me</button>
            <button onMouseOver={hoverHandler}>Hover me</button>
        </div>
    );
}

export default Events;