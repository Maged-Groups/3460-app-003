import { useState } from "react";

export default function Intro() {

    console.log('App rendered');

    const [num, fnc] = useState(11);

    const [color, setColor] = useState('bg-green-600');

    console.log('num inside App', num);

    const handleAdd = () => {
        console.log('num inside handleAdd - before', num);
        fnc(num + 1);
        console.log('num inside handleAdd - after', num);
    }


    const turnRed = () => {
        setColor('bg-red-600')
    }

    return (
        <div className="flex items-center gap-4 m-3">
            <button onClick={handleAdd} id="btn_add" className="px-3 py-2 rounded-md shadow text-white w-12 h-12 bg-green-700">+</button>
            <span>{num}</span>
            <button className="px-3 py-2 rounded-md shadow text-white w-12 h-12 bg-red-700">-</button>


            {/* Color Change */}

            <div className={color}>
                Welcome
            </div>

            <button onClick={turnRed}>Change to Red</button>
        </div>
    )

}