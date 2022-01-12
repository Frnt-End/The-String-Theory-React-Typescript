import { useEffect, useState } from "react";
import "./App.scss";
import ArrList from "./Components/ArrList"


declare global {
  interface Window {
      MutationObserver?: typeof MutationObserver;
 }
}

interface IProps {
  str: string | any,
  method: string | any
}
   
const maxlength = 20;


export default function App() {

  const [error, setError] = useState(false);

  const [input, setInput] = useState<IProps>({
    str: "Foo Fighters",
    method: "slice(0, 3)"
  })
  
  let [result, setResult] = useState("Foo")

 

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  e.preventDefault()
}
  
  let resultChecker: string = "";
 


  const CheckForm = () => {
    input.str.length < 1 ? setError(true) : checkResult();
  }

  const checkResult = () => {
     resultChecker = (window as any).eval(`"${input.str}".` + input.method);
    input.str === resultChecker || resultChecker === "undefined"|| resultChecker === null
    || resultChecker === "" ? setError(true) : returnValue();
  }

  const returnValue = () => {
    setResult(resultChecker.toString())
    setError(false)
    console.log(`result: ${resultChecker} str: ${input.str}`)
  }
  
  let arrList = ArrList();
  

  return (
    <div className="all">
      <div className="container">
        <div className="header">
          <h1>-- String Methods Practice --</h1>
          <h2>🧪 Test the provided string OR type your own.</h2>
          <h2>✨ Choose one of the methods from the dropdown.</h2>
          <h2>🍦 click the "=" button to view the results.</h2>       
        </div>
      
       

        <div className="form-notation">
          <div className="dot-input">
              <input 
                  type="text"
                  onChange={handleChange}
                  name="str"
                  value={input.str}
                  placeholder="Type a String"
                  maxLength={maxlength}
                  className="right"
                  required
            /></div>
          
          
          
          <div className="dot-input">
            <p className="the-dot">.</p>
              <select
                name="method"
                onChange={handleChange}
                className="left"
                value={input.method}
                required
              >
                  {arrList.map((e:any, key) => (
                    <option className="option-item" key={key} value={e}>{e}</option>
                  ))}
            </select>
            </div>
            <div className="btn-result">
              <button onClick={CheckForm}>=</button>
            </div>
        </div>   
           <div>
              <p className="result">
                {result}</p>
            </div>
            <div className={error ? "form-error" : "form-error hide"}>
                Maybe try a different string..
        </div>
        
        <div className="author">
              <p>↩ <a href="https://Frnt-End.github.io/The-String-Theory-React-Typescript"> Repo</a></p>
               <p><a href="https://nirit.website">nirit.website </a> ↪</p>
            </div>
      </div>
  </div>
  );
}