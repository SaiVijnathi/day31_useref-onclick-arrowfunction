import React, { useRef } from 'react'

function MarkSheet(props) {

    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();

    let sanInputRef=useRef();
    let engInputRef=useRef();
    let mataInputRef=useRef();
    let matbInputRef=useRef();
    let phyInputRef=useRef();
    let cheInputRef=useRef();
    let resultLabelRef=useRef();

  return (
    <div>
        <form>
        <label className='heading'>Intermediate {props.year} Student Marksheet</label>
        <div>
            <label>First Name</label>
            <input ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef}></input>
        </div>
            <label>Sanskrit</label>
            <input type="number" ref={sanInputRef}></input>
        <div>
            <label>English</label>
            <input type="number" ref={engInputRef}></input>
        </div>
        <div>
            <label>Math A</label>
            <input type="number" ref={mataInputRef}></input>
        </div>
        <div>
            <label>Math B</label>
            <input type="number" ref={matbInputRef}></input>
        </div>
        <div>
            <label>Physics</label>
            <input type="number" ref={phyInputRef}></input>
        </div>
        <div>
            <label>Chemistry</label>
            <input type="number" ref={cheInputRef}></input>
        </div>

        <div>
            <button type="button" onClick={()=>{

                let firstName= firstNameInputRef.current.value;
                let lastName= lastNameInputRef.current.value;
                
                let sanMarks=Number(sanInputRef.current.value);
                let engMarks=Number(engInputRef.current.value);
                let mataMarks=Number(mataInputRef.current.value);
                let matbMarks=Number(matbInputRef.current.value);
                let phyMarks=Number(phyInputRef.current.value);
                let cheMarks=Number(cheInputRef.current.value);               

                let totalMarks = sanMarks+engMarks+mataMarks+matbMarks+phyMarks+cheMarks;

                let percent= (totalMarks/450)*100;

                alert(`${firstName} ${lastName}, total marks are ${totalMarks} and percentage is ${percent}%`);
                resultLabelRef.current.innerHTML= `${firstName} ${lastName} total Marks are ${totalMarks} and percentage is ${percent.toFixed(2)}%`;
                
            }} >Calculate Result</button>
        </div>

        <div>
            <label ref={resultLabelRef} className='msg'>Click here to see your result</label>
            </div>
        </form>
    </div>
    
  )
}

export default MarkSheet;