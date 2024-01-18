import React,{useState} from 'react'

export default function About(props) {
    // const [mystyle,setmystyle]=useState({
    //     color:'white',
    //     backgroundColor:'black'

    // })
    
    
    
    
  return (
    <>
    <div className='container' >
      <div className="accordion" id="accordionExample" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
        <h1 className='my-3'>About us</h1>
        
  <div className="accordion-item"  >
    <h2 className="accordion-header">
      <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={props.mode==='dark'?{backgroundColor:'#46670b', color:'white',border:'2px solid'}:{backgroundColor:'white',border:'2px solid'}} >
        <strong>Accordion Item #1</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={props.mode==='dark'?{backgroundColor:'#46670b', color:'white'}:{backgroundColor:'white'}} >
      <div className="accordion-body" >
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.mode==='dark'?{backgroundColor:'#46670b', color:'white'}:{backgroundColor:'white'}} >
        <strong>Accordion Item #2</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={props.mode==='dark'?{backgroundColor:'#46670b',color:'white'}:{backgroundColor:'white'}} >
      <div className="accordion-body" >
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.mode==='dark'?{backgroundColor:'#46670b', color:'white'}:{backgroundColor:'white'}} >
        <strong>Accordion Item #3</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={props.mode==='dark'?{backgroundColor:'#46670b', color:'white'}:{backgroundColor:'white'}} >
      <div className="accordion-body" >
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  
</div>
{/* <div className="container">
        <button className="btn btn-primary my-3" onClick={clickdark}>{btntxt}</button>

    </div> */}
    </div>
    
    </>
  )
}