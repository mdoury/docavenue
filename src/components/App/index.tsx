import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import "./style.scss";

const App: React.FC = () => {
    const count = useSelector<RootState, number>(state => state.counterReducer);
    const dispatch = useDispatch();

    function decrement() {
        dispatch({ type: "DECREMENT" });
    }

    function increment() {
        dispatch({ type: "INCREMENT" });
    }

    return (
        <div className="counter">
            <button onClick={decrement}>-</button>
            <span className="count">Count: {count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default App;
