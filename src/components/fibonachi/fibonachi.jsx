import {useState, useEffect} from 'react';
import Dropdown from '../dropdown/dropdown';

const Fibonachi = () => {
    const [currentNumber, setNumber] = useState(0);
    const [fibonachiList, setFibonachiList] = useState([]);
    const onChange = (number) => {
        setNumber(number)
    };
  
    const fibonachiMemo = [0,1];
    const fibonachi = (n) => {
        if (n < fibonachiMemo.length) {
        return fibonachiMemo.slice(0, n+1);
        }
        const previous = [...fibonachi(n - 1)];
        previous.push(previous[n-1] + previous[n-2]);
        
        return previous;
    }

  useEffect(()=>{
    setFibonachiList(fibonachi(currentNumber).join(' '));
  }, [currentNumber]);

  return (
      <div className='fibonachi-page'>
          <Dropdown currentNumber onChange={onChange}/>
        <div className='result'>{fibonachiList}</div>
      </div>
  )
};

export default Fibonachi;