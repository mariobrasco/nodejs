import { useState } from "react";
import './App.css';

function App(){
    const[count, setCount] = useState(0);

function tambah(){
        setCount(count + 1);
    }

function kurang(){
    setCount(count - 1);
}
function reset(){
    setCount(0);
}

return(
    <>
    <div className="container w-50 vh-100 d-flex justify-content-center align-items-center flex-column gap-3">
        <h1 className="text-center fw-bold">{count}</h1>
        <div className="d-flex justify-content-center align-content gap-3">
            <button className="btn btn-primary" onClick={kurang}>
                kurang
            </button>
            <button className="btn btn-success" onClick={tambah}>
                tambah
            </button>
            <button className="btn btn-danger" onClick={reset}>
                reset
            </button>
        </div>
    </div>
    </>
);
}

export default App;