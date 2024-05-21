import {useState} from "react";

const Dial = () => {
    const [digits, setDigits] = useState([0]);

    const increment = () => {
        let newDigits = [...digits];
        let increase = 1;
        let digitsLength = newDigits.length;

        for (let i = digitsLength - 1; i >= 0; i--) {
            newDigits[i] += increase;   // 1씩 증가.

            if (newDigits[i] > 9) { // 자릿수 변경.
                newDigits[i] = 0;
                increase = 1;
            } else {
                increase = 0;
                break;
            }
        }

        if (increase > 0) {
            newDigits.unshift(1);
        }

        setDigits(newDigits);   // 상태 업데이트.

        console.log(newDigits);
    };

    const decrement = () => {
        let newDigits = [...digits];
        let decrease = 1;
        let digitsLength = newDigits.length;

        for (let i = digitsLength - 1; i >= 0; i--) {
            newDigits[i] -= decrease;

            if (newDigits[i] < 0) {
                newDigits[i] = 9;
                decrease = 1;
            } else {
                decrease = 0;
                break;
            }
        }

        if (digitsLength > 1 && newDigits[0] === 0) { // 맨 앞 자릿수가 0일때 자릿수 제거.
            newDigits.shift();
        }

        setDigits(newDigits);

        console.log(newDigits);
    };

//    console.log('digits :', digits);

    return (
        <div className="dial">
            <button className="dial-button" onClick={increment}>▲</button>

            <div className="number-display">
                <span>{digits}</span>
            </div>

            <button className="dial-button" onClick={decrement}>▼</button>
        </div>
    );
};

export default Dial;