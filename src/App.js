import CkEditorContainer from "./component/CkEditorContainer";
import PreviewContainer from "./component/PreviewContainer";
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

import "./App.css"
import { Grid } from "@mui/material";
import PdfGenerator from "./component/pdfGenerator";

const App = () => {
  const [initialSlide, setInitialSlide] = useState("0")

  useEffect(() => {
    var x = document.querySelector(".sub-container-a img")
    x.style.width = `${100 + parseInt(initialSlide)}%`
    x.style.height = `${100 + parseInt(initialSlide)}%`
    dragElement(document.querySelector(".sub-container-a img"));
    // console.log(x.width)
  }, [initialSlide])

//   const incrImgSize = () => {
        
//     var x = document.querySelector(".sub-container-a img")
//     x.style.width = `${x.width + 20}px`
//     x.style.height = `${x.height + 20}px`

//     console.log(x.width)

// }
// const decrImgSize = () => {
// var x = document.querySelector(".sub-container-a img")
//     x.style.width = `${x.width - 20}px`
//     x.style.height = `${x.height - 20}px`

//     console.log(x.width)
// }


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.querySelector(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.querySelector(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


  return (
    <div className = "app-container" >
      <Grid container spacing = {2} >
        <Grid item xs = {12} >
          {/* <Button
            variant='contained'
            onClick = {() => incrImgSize()}
          >+</Button>
          &nbsp;
          <Button
            variant='contained'
            onClick = {() => decrImgSize()}
          >-</Button>  */}
          
        </Grid>
        <Grid item xs = {12} >
          <Grid container >
            <Grid item md = {6} xs = {12} >
              <div className = "container-a" >
                <div className = "sub-container-a" >
                  <img 
                  src = "https://images.unsplash.com/photo-1645549855196-cc38c9d48a89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
                {/* <PreviewContainer /> */}
              </div>
            </Grid>
            <div  ><button onClick={ () => { 
              var myHtml = document.querySelector(".container-a").innerHTML
              window.localStorage.setItem("myCroppedImg", JSON.stringify(myHtml))
              document.querySelector(".container-b").innerHTML = myHtml
             } } >add</button></div>
            <Grid item md = {12} style = {{
              pageBreakAfter: "always !important"
            }} >
              <div className = "slidecontainer">
                <input 
                className="slider"
                type = "range" min="1" max="100" value = { initialSlide } onChange = {(e) => setInitialSlide(e.target.value) } />
              </div>
            </Grid>
            <Grid item md = {6} xs = {12} >
              <div className = "container-b" >
                {/* <CkEditorContainer /> */}
                {/* <PdfGenerator /> */}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div> 
   );
}
 
export default App;