import { useEffect } from "react";
import "../../App.css"
const PdfGenerator = () => {
  useEffect(() => {
    var myHtml = window.localStorage.getItem("myCroppedImg")
    var myPages = document.querySelectorAll(".container-b")
    myPages.forEach((page) => {
      page.innerHTML = JSON.parse(myHtml)
    })


    // console.log(JSON.parse(myHtml))
  }, [])
    return ( 
             <div className = "container-b" >
                
                {/* <PreviewContainer /> */}
              </div>
        
     );
}
 
export default PdfGenerator;