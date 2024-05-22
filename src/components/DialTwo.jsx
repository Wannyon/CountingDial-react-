import {useState} from "react";
import "./DialTwo.css"

const DialTwo = () => {
    const [digits, setDigits] = useState([0]);

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

    // const increment = (index) => {
    //     let newDigits = [...digits];
    //
    //     if (newDigits[index] === 9) {
    //         if (index === 0) {  // 가장 큰 자릿수 일때, 1추가.
    //             newDigits[index] = 0;
    //             newDigits.unshift(1);
    //         } else {
    //             if (newDigits[index - 1] === 9) {   // 999 -> 1000
    //                 newDigits[index] = 0;   // why 안바뀜...? 99 -> 109.... 재귀함수가 돌아갈 때 복사된 배열이 바뀌지 않는 문제
    //                 increment(index - 1);
    //                 return;
    //             } else {
    //                 newDigits[index] = 0;
    //                 newDigits[index - 1] += 1;
    //             }
    //
    //         }
    //     } else {
    //         newDigits[index] += 1;
    //     }
    //     setDigits(newDigits);
    //
    //     console.log(newDigits);
    // };

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

export default DialTwo;