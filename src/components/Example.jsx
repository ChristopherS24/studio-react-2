import { useState, useEffect, useContext } from "react";
import { ProvaContext } from "../stores/ProvaContext";

import { increment, decrement } from "../redux/counterSlice";
import { useSelector, useDispatch } from "react-redux";

// function Example({ cities }) {
//     const [count, setCount] = useState(0);
//     //const [data, setData] = useState(null);

// // Definizione dell'effetto
//     useEffect(() => {
//         document.title = `Conteggio: ${count}`;

//         // fetch('https://jsonplaceholder.typicode.com/posts')
//         // .then((response)=> response.json())
//         // .then((data) => {
//         //     setData(data);
//         //     console.log(data);
//         // });
//     },[count]);

//     return (
//         <div>
//             <p>Conteggio: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Incrementa</button>
//         </div>
//     );
// }

// provaContext
// function Example({cities}) {

//     const {count, setCount} = useContext(ProvaContext)

//     return (
//         <div>
//             <p>Conteggio: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Incrementa</button>
//         </div>
//     );
// }

function Example() {
    const count= useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p className="mb-3">Conteggio: {count}</p>
            <button
                className="mr-3"
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Incrementa+
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrementa-
            </button>
        </div>
    );
}

export default Example;