// "use client"
import { useState } from 'react';
import FactorialComponent from '../components/FactorialComponent';
const Home = () => {
  const [inputNumber, setInputNumber] = useState(5); // Set an initial number
  const handleInputChange = (e) => setInputNumber(Number(e.target.value));

  return (
    <div>
      <label htmlFor="numberInput">Enter a number:</label>
      <input
        type="number"
        id="numberInput"
        value={inputNumber}
        onChange={handleInputChange}
      />

      <FactorialComponent number={inputNumber} />
    </div>
  );
};

export default Home;
// export default function Home() {
  
     
//   return (
//     <div>
//         <h1>Welcome to Next.js!</h1>
//         <section>
//                 <h2>Factorial Calculation</h2>
//                 <input 
//                     type="number" 
                    
//                    } 
//                 />
       
//                 <FactorialComponent  />
//             </section>
//     </div>
// );
// }
