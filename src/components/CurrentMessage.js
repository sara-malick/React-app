import Weekdays from './Weekdays';
import Weekends from './Weekends';

function CurrentMessage() {
    const day = new Date().getDay();

    return (
        (day >= 1 && day <= 5) ? <Weekdays /> : <Weekends />

    )

}


export default CurrentMessage