
import './App.css';
import Dropdown from './components/dropdown/dropdown';
import {useState, useEffect} from 'react';

function App() {
  const [currentNumber, setNumber] = useState(0);
  const [fibonachiList, setFibonachiList] = useState([]);
  const onChange = (number) => {
    setNumber(number)
  };
  const fibonachi = (n) => {
    if (n === 0) {
      return '0'
    }
    if (n === 1) {
      return '0 1'
    }
    const result = [0,1];
    let a = 0;
    let b = 1;
    for (let i = 2; i<=n; i++) {
      result.push(a+b);
      b = a + b;
      a = b - a; 
    }
    return result.join(' ');
  }

  useEffect(()=>{
    setFibonachiList(fibonachi(currentNumber))
  }, [currentNumber]);
  return (
    <div className="App">
      <Dropdown currentNumber onChange={onChange}/>
      <div className='result'>{fibonachiList}</div>
    </div>
  );
}

export default App;
