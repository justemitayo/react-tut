import './App.css';
import { useAppSelector, useAppDispatch } from './app/hooks'
import { decrement, increment } from './features/counter/counterSlice'

function App() {

  const count = useAppSelector((state) => state.root.count)
  const dispatch = useAppDispatch()
  return (
    <div className="App">
          <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    </div>
  );
}

export default App;
