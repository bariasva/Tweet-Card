import { useEffect, useState } from "react";
import './MyButton.css'

interface Props {
    name: string;
    clickCount?: number;
}

export default function MyButton({name, clickCount=1}: Props){
    const [count, setCount] = useState(0)    
    const onClick = () => {
        setCount(x => x + 1);
        // count += 1;
        // if (count > 3) {
        //     alert(`Button clicked ${count} times`);
        // }
    };

    useEffect(() => {
        console.log("El boton se montó");
    })
    
    return (
        <button className='MyButton' onClick={onClick}>
            {count}
        </button>
    );
    
}
