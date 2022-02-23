import { useEffect } from "react";
import CkEditor from "../CkEditor";
import "./index.css"


const CkEditorContainer = () => {

    useEffect(() => {
        // var document_content = document.querySelector(".preview-container")
        // console.log(document_content.innerHTML)
    }, [])

    return ( 
        <div className = "CkEditorContainer" >
            <CkEditor />            
        </div>
     );
}
 
export default CkEditorContainer;