import { useState } from "react";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const[color1,setColor]=useState("");
  const InputRgbHandler = (e) => {
    setInput(e.target.value);
  };
 const divColor=(e)=>{
 setColor(e.target.getAttribute("value"))
 console.log(color1);
 }
  const ButtonHandler = () => {
    let temp = "";
    temp = input.split(",");
    console.log(temp[0]);
    let val1 = "a";
    let val2 = "b";
    let val3 = "c";
    let val4 = "d";
    let val5 = "e";
    let val6 = "f";
    let outpt = "";
    for (let i = 0; i < temp.length; i++) {
      let ot1 = Math.floor(temp[i] / 16);

      console.log("ot1", ot1);
      if (input==="") {
        alert("Please Enter value")
        setOutput("");
      }
      else if(temp[i]===0 || temp[i]>=256){
        alert("input range should be 0-255")
        setOutput("");
      }
      else if (ot1 === 0 || ot1 <= 9) {
        console.log("ot1", ot1);
        outpt += ot1;
      } else if (ot1 === 10) {
        outpt += "" + val1;
      } else if (ot1 === 11) {
        console.log(val2);
        outpt += "" + val2;
      } else if (ot1 === 12) {
        outpt += "" + val3;
      } else if (ot1 === 13) {
        outpt += "" + val4;
      } else if (ot1 === 14) {
        outpt += "" + val5;
      } else if (ot1 === 15) {
        outpt += "" + val6;
      }
      // ot2
      let ot2 = temp[i] % 16;
      if (input==="") {
        alert("Please Enter value")
      }
      else if (ot2 === 0 || ot2 <= 9) {
        outpt += ot2;
      } else if (ot2 === 10) {
        outpt += "" + val1;
      } else if (ot2 === 11) {
        outpt += val2;
      } else if (ot2 === 12) {
        outpt += "" + val3;
      } else if (ot2 === 13) {
        outpt += "" + val4;
      } else if (ot2 === 14) {
        outpt += "" + val5;
      } else if (ot2 === 15) {
        outpt += "" + val6;
      }
    }
    setOutput("#" + outpt);
  };
  return (
    <div className="App">
      <div className="ColorDiv" style={{ backgroundColor: output }}></div>
      <div className="InputDiv">
        <input type="text" onChange={InputRgbHandler} placeholder="RGB" />
      </div>
      <button className="button" onClick={ButtonHandler}>
        Show
      </button>
      <p>Hex value is:{output}</p>
      <p>Hex value of div is:{color1}</p>
      <div className="color">
        
        <div className="PickColorDiv background1" value="#faa0ff" onClick={divColor} >
      
        </div>
        <div className="PickColorDiv background2" value="#ff00da" onClick={divColor}>

        </div>
        <div className="PickColorDiv background3" value="#ffac00"onClick={divColor}>

        </div>
        <div className="PickColorDiv background4" value="#aa0000" onClick={divColor} >

        </div>
        <div className="PickColorDiv background5" value="#ff0000" onClick={divColor}>
        </div>
      </div>
    </div>
  );
}

export default App;
