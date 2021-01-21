import Button from "../button/button";
import {useState} from 'react';
import './toogle.css';

const Toogle = () => {
    const [jeepsIsActive, setJeepsIsActive] = useState(true);
    const toggleButtons = () => {
        setJeepsIsActive(!jeepsIsActive);
    }  
    return (
        <div class='toogle'>
            <Button isActive={jeepsIsActive} toggle={toggleButtons}>Jeeps</Button>
            <Button isActive={!jeepsIsActive} toggle={toggleButtons}>Trucks</Button>
        </div>
    )
}

export default Toogle;