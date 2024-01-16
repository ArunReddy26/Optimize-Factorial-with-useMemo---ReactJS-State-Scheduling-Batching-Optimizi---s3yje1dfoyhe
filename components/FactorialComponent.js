

// function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// }

// export default function FactorialComponent() {


//   return <div className='result'>The factorial of {} is {}</div>;
// }


import React, { useMemo } from 'react';

const FactorialComponent = ({ number }) => {
  const calculateFactorial = (num) => {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const factorialResult = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <p>Factorial of {number} is: {factorialResult}</p>
    </div>
  );
};

export default FactorialComponent;

