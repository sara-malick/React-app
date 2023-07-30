
function Morning() {

    const time = new Date();
    const day = time.toLocaleString("en-PK", {weekday : "long"});               //localestring makes time to your local time
    const morning = time.getHours() >= 6 && time.getHours() <= 12;              // if its from 6am to 12am then its morning
    let dayMessage;

    if (day.toLowerCase() === "monday") {
        dayMessage = `Happy ${day}`;
    }

    else if (day.toLowerCase() === "tuesday") {
        dayMessage = `${day}, four days to go.`;
    }

    else if (day.toLowerCase() === "wednesday") {
        dayMessage = `${day}, half way there.`;
    }

    else if (day.toLowerCase() === "thursday") {
        dayMessage = `${day}, start planning the weekend.`;
    }

    else if (day.toLowerCase() === "friday") {
        dayMessage = `${day}, Woo-Hoo! weekend is coming.`;
    }

    else {
        dayMessage = `Stay calm and have fun`
    }

    return (
        <div>
            <h1>{dayMessage}</h1>
            {morning ? <h2>Have you had breakfast yet?</h2> : ''}
        </div>
    )
}

export default Morning