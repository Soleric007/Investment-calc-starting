import { useState } from "react"
import Header from "./components/Header"
import Userinput from "./components/Userinput"
import Result from "./components/Result"

function App() {
const [userinput, setUserInput] = useState({
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
})  
const [label, setLabel] = useState({
  initialInvestment: 'INITIAL INVESTMENT',
  annualInvestment: 'ANNUAL INVESTMENT',
  expectedReturn: 'EXPECTED RETURN',
  duration: 'DURATION'
})  

const inputValid = userinput.duration >= 1
function handleChange(inputIdentifier, newValue) {
  setUserInput((prevUserInput) => {
    return {
      ...prevUserInput,
      [inputIdentifier] : +newValue
    }
  })
}
console.log(userinput)
return (
    <>
    <Header />
    <Userinput userinput={userinput} label={label} handleChange={handleChange} />
    {
      !inputValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )
    }
    {
      inputValid && (
        <Result userinput={userinput}/>
      )
    }
    
    </>
    
  )
}

export default App
