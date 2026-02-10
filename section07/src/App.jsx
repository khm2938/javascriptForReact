import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const onClickCalculate = (op) => {
    let sum = 0;

    switch (op) {
      case "+":
        sum = Number(num1) + Number(num2);
        break;
      case "-":
        sum = Number(num1) - Number(num2);
        break;
      case "*":
        sum = Number(num1) * Number(num2);
        break;
      case "/":
        sum = Number(num1) / Number(num2);
        break;
      default:
        break;
    }

    setResult(sum);
  };

  return (
    <div>
      <h1>계산기</h1>

      <h2>계산결과</h2>
      <h3>{result}</h3>

      <div>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
      </div>

      <div>
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => onClickCalculate("+")}>+</button>
        <button onClick={() => onClickCalculate("-")}>-</button>
        <button onClick={() => onClickCalculate("*")}>*</button>
        <button onClick={() => onClickCalculate("/")}>/</button>
      </div>

      <h2>
        {result % 2 === 0 ? "짝수입니다." : "홀수입니다."}
      </h2>

      <button>버튼</button>
      <input type="number" />
    </div>
  );
}

export default App;
