
import '../styles/App.scss';
import '../styles/page.scss';
import { useState } from 'react';

function App() {

  const handleSubmit=(ev)=> ev.preventDefault();

  const [cont , setCont] =useState(0);

  const handleContIncr = () => {  
    const incr = cont + 1
    setCont(incr) ;}
   
    const handleContDecr = () => { 
      const decr = cont - 1
      setCont(decr) ;}

    const handleReset = () => {
      setCont (0);
    }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label name="button" className="js_contador">Contador: {cont}</label>
           <input type="button" value="incrementar" name="button" onClick={handleContIncr} />
          <input type="button" value="decrementar" name="button" onClick={handleContDecr} />
          <input type="button" value="reset" name="button" onClick={handleReset}/>
      </form>
    </div>
  );
}

export default App;
