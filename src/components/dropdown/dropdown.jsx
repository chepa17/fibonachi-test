import './dropdown.css';
import {useState, useCallback} from 'react';
import classNames from "classnames";

const Dropdown = ({currentNumber, onChange}) => {
    const options = [...Array(100).keys()];
    const [isOptionsShown, setIsOptionsShown] = useState(false);

    const toggleOptions = useCallback(() => {
        setIsOptionsShown(!isOptionsShown)
    }, [isOptionsShown, setIsOptionsShown]);

    const chooseOption = useCallback((number)=>{
        onChange(number); 
        toggleOptions();
    }, [onChange, toggleOptions]);
    return (
        <div className="dropdown">
            <button 
                type='button' 
                className='dropdown__button' 
                onClick = {toggleOptions}
            >Chose number</button>
            <div className={classNames('dropdown__content', {'shown' : isOptionsShown})}>
                {options.map(option => 
                    <button 
                        type='button' 
                        className='dropdown__option' 
                        onClick={() => chooseOption(option)}
                        key={option}
                    >
                        {option}
                    </button>
                )}
            </div>
        </div>
        
    )
}

export default Dropdown;