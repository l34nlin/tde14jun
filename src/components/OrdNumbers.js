import React, {useState} from "react";

const OrdNumbers=() => {
const numbers= [2, 5, 1, 8, 6, 40, 9, 2, 19, 2];
const [initialNumbers,setInitialNumbers]= useState([]);
const ordNumbers=()=>{
    const initialArray= [   ...numbers];
    initialArray.sort((a,b)=>a-b);
setInitialNumbers(initialArray);
};
return (
    <div>
        <button onClick={ordNumbers}>Ordernar numeros</button>
            {initialNumbers.length > 0?(
            initialNumbers.map((numero,index)=>(
                <li key ={index}>{numero}</li>
            ))):(
                numbers.map((numero,index)=><li key={index}>{numero}</li>)
            )
        }
    </div>
);
};
export default OrdNumbers;



