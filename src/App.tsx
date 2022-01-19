import { useEffect, useRef, useState } from "react";
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

  let newResult: string = "";
  let arrList = ArrList();

  const [error, setError] = useState(false);
  const [id, setId] = useState(0);
  const [input, setInput] = useState<IProps>({
    str: "Foo Fighters",
    method: "slice(0, 3)"
  })
  
  let [result, setResult] = useState("Foo")

  
  const previousResult = useRef("");

  useEffect(() => {
    previousResult.current = result;
  }, [result]);


const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
  e.preventDefault()
}
  
 
  useEffect(() => {
    setId(arrList.findIndex(item => item.method ===  input.method))
}, [id, arrList, input.method]);




  const CheckForm = () => {
    !input.str || newResult === previousResult.current ? setError(true) : checkResult();
  }

  const checkResult = () => {
    const trimedInput = input.str.trim();
     newResult = (window as any).eval(`"${trimedInput}".` + input.method);
     newResult === previousResult.current || newResult === "undefined"|| newResult === null
    || newResult === "" ? setError(true) : returnValue();
  }

  const returnValue = () => {
    setResult(newResult.toString())
    setError(false)
   }
  
  

  return (
    <div className="all">
      <div className="container">
        <div className="header">
          <h1>-- Practice JS String Methods --</h1>
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
                    <option className="option-item" key={key} value={e.method}>{e.method}</option>
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
                <p>Try something else..<span>˖° (づ￣ ³￣)づ ━━☆ﾟ.*</span></p>
        </div>

        <div className="details">
             <h3>The <span>{arrList[id].name}</span> Method:</h3>
              <p><span>Syntax: </span>{arrList[id].syntax}</p>
              <p><span>Definition: </span>{arrList[id].definition}</p>
          </div>
        
          <div className="author">
              <p>↩ <a href="https://github.com/Frnt-End/The-String-Theory-React-Typescript"> Repo</a></p>
               <p><a href="https://nirit.website">nirit.website </a> ↪</p>
        </div>
      </div>
  </div>
  );
}