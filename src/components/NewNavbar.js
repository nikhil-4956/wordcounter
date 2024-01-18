import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function NewNavbar(props) {
  
  

  return (
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color: props.mode==='light'?'black':'white'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color: props.mode==='light'?'black':'white'}}>{props.abouttxt}</Link>
        </li>
      </ul>
      {/* <button type="button" class="btn btn-primary mx-1" style={{height:'20px', width:'20px'}} onClick={blue}></button>
      <button type="button" class="btn btn-danger mx-1" style={{height:'20px', width:'20px'}}></button>
<button type="button" class="btn btn-warning mx-1" style={{height:'20px', width:'20px'}}></button> */}
{/* <button type="button" class="btn btn-info mx-1" style={{height:'20px', width:'20px'}}></button> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault" style={props.mode=='light'?{color:'black'}:{color:'white'}}>enable dark mode</label>

 
  
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

NewNavbar.propTypes={
    title:PropTypes.string.isRequired,
    abouttxt:PropTypes.string
}
NewNavbar.defaultProps={
    title:"set title here",
    abouttxt:"about txt here"

};
