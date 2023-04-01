import './App.css';
import Header from './components/Header';
import { useState,useEffect } from 'react';
function App() {

  const [state,setState] = useState(1);
  const [state2,setState2] = useState(1);

  useEffect(()=>{
    window.alert("UseEffect Demo");
  }, [state,state2])

  return (
    <div className='body'>
        <Header />
        <div className='num'>
            <div className='buttons'>
              <button onClick={()=> setState(state+1)}>state1{state}</button>
              <button onClick={()=> setState2(state2+2)}>state2{state2}</button>
            </div>
        </div>

    </div>
  );
}

export default App;
