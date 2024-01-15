

// function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// }

// export default function FactorialComponent() {


//   return <div className='result'>The factorial of {} is {}</div>;
// }

import React, { useMemo } from 'react';

const FactorialComponent = ({ number }) => {
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
};

export default FactorialComponent;
