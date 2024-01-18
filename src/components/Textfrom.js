import React,{useState} from 'react'


export default function Textfrom(props) {
    const [text,setText]=useState("");
    const clicked=()=>{
        // console.log("clicked"+text)
        let newtest=text.toUpperCase();
        setText(newtest)
        props.alrt("converted to upper case", "success")
    }
    const handleonChange=(event)=>{
        // console.log("handle on change")
        setText(event.target.value);

    }
    const clickedlower=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.alrt("converted to lower case", "success")
    }
    const clickedclear=()=>{
        let newtext="";
        setText(newtext)
        props.alrt("text clr","success")
    }
    const clickedtrim=()=>{
        let newtext=text.trim();
        setText(newtext)
    }
    
   
  return (   
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8" style={{backgroundColor: props.mode==='dark'?'#9a2727':'white', color: props.mode==='dark'?'white':'black'}} ></textarea>        
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={clicked} disabled={text.length===0}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={clickedlower} disabled={text.length===0}>Convert to lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={clickedclear} disabled={text.length===0}>Click</button>
        <button className="btn btn-primary" onClick={clickedtrim} disabled={text.length===0}>Trim</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>your text summary</h2>
        <p>{text.split(/\s+/).filter((n)=>{return n.length!==0}).length} word and {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((n)=>{return n>0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something in the textbox to preview it here"}</p>
    </div>
    </>
    
  )
}
