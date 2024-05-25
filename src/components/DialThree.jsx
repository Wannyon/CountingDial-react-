import {useState} from "react";
import "./DialTwo.css"

const DialThree = () => {
    const [digits, setDigits] = useState([0]);

    const handleInputValue = (event) => {
        let inputValue = event.target.value;

        if (inputValue === "") {
            setDigits([0]); // input 비어있을때, 초기값.
        } else {
            let newDigits = Array.from(String(inputValue), Number);
            setDigits(newDigits);
        }
    };

    const increment = (index) => {
        let newDigits = [...digits];
        let increase = 1;

        for (let i = index; i >= 0 && increase > 0; i--) {
            newDigits[i] += increase;

            if (newDigits[i] > 9) {
                newDigits[i] = 0;
                increase = 1;
            } else {
                increase = 0;
            }
        }

        if (increase > 0) { // 자릿수 증가.
            newDigits.unshift(1);
        }

        setDigits(newDigits);

        console.log(newDigits);
    };

    const decrement = (index) => {
        let newDigits = [...digits];
        let decrease = 1;

        if (newDigits.length <= 1 && newDigits[0] === 0) { // 0일때 return.
            return;
        }

        for (let i = index; i >= 0 && decrease > 0; i--) {
            newDigits[i] -= decrease;

            if (newDigits[i] < 0) {
                newDigits[i] = 9;
                decrease = 1;
            } else {
                decrease = 0;
            }
        }

        if (newDigits.length > 1 && newDigits[0] === 0) { // 자릿수 감소.
            newDigits.shift();
        }

        setDigits(newDigits);

        console.log(newDigits);
    };

    const reset = () => {
        setDigits([0]);
    }

    return (
        <>
            <input
                type="number"
                className="input-field"
                value={digits.join('')}
                onChange={handleInputValue}
            />

            <div className="dial">

                {digits.map((digits, index) => (
                    <div className="dial-control" key={index}>
                        <button className="dial-button" onClick={() => increment(index)}>▲</button>

                        <div className="number-display">
                            <span>{digits}</span>
                        </div>

                        <button className="dial-button" onClick={() => decrement(index)}>▼</button>
                    </div>
                ))}
            </div>

            <div>
                <button className="dial-button-reset" onClick={reset}>Reset</button>
            </div>
        </>
    );

};

export default DialThree;