import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const CkEditor = () => {

    const [clientName, setClientName] = useState("Client Name")
    const [consultName, setConsultName] = useState("ConsultantName")

    const [imgSrc, setImgSrc] = useState("")

    useEffect(() => {
        // document.querySelector(".my-edit-field").innerHTML = clientName
        // document.querySelector(".cosultant-name").innerHTML = consultName

    }, [clientName, consultName])


    const UploadHandler = () => {
        console.log(imgSrc)
        var x = document.querySelector(".sub-container-a img")
        x.src = imgSrc
    }

    return ( 
        <div className = "ckeditor-conatiner">
            <p>Client Name:</p>
            <CKEditor
               
                    editor={ ClassicEditor }
                    data=""
                    onReady={ editor => {
                    
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        setClientName(data)
                        
                        // console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        // console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        // console.log( 'Focus.', editor );
                    } }
                    
                    
                />
                <p>Consultant Name</p>
                <CKEditor
               
               editor={ ClassicEditor }
               data=""
               onReady={ editor => {
               
               } }
               onChange={ ( event, editor ) => {
                   const data = editor.getData();
                   setConsultName(data)
                   
                   // console.log( { event, editor, data } );
               } }
               onBlur={ ( event, editor ) => {
                   // console.log( 'Blur.', editor );
               } }
               onFocus={ ( event, editor ) => {
                   // console.log( 'Focus.', editor );
               } }
               
               
                />
           
                <div className= "my-editor-page">
                <br />

                    <img src = {imgSrc} width = "100px" />
                {/* <figure className="table"><table><tbody><tr><td><h2><i>How To Use React Ckeditor Upload File Image With Demo and Example Codes</i></h2></td><td rowSpan="2"><img src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" height = "200" /></td></tr><tr><td>This is a simple tutorial on how you can configure React Ckeditor wysiwyg library to handle file upload when users try to insert a picture into our editor, so the editor will upload the file to the server rather than providing the base64 string the default case by CKeditor.&nbsp;</td></tr></tbody></table></figure>
                <figure className="table"><table><tbody><tr><td><h2><i>How To Use React Ckeditor Upload File Image With Demo and Example Codes</i></h2></td><td rowSpan="2"><img src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" height = "200" /></td></tr><tr><td>This is a simple tutorial on how you can configure React Ckeditor wysiwyg library to handle file upload when users try to insert a picture into our editor, so the editor will upload the file to the server rather than providing the base64 string the default case by CKeditor.&nbsp;</td></tr></tbody></table></figure>
                <figure className="table"><table><tbody><tr><td><h2><i>How To Use React Ckeditor Upload File Image With Demo and Example Codes</i></h2></td><td rowSpan="2"><img src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" height = "200" /></td></tr><tr><td>This is a simple tutorial on how you can configure React Ckeditor wysiwyg library to handle file upload when users try to insert a picture into our editor, so the editor will upload the file to the server rather than providing the base64 string the default case by CKeditor.&nbsp;</td></tr></tbody></table></figure> */}

                </div>
                &nbsp;
                <form onSubmit={ (e) => {
                    e.preventDefault()
                    UploadHandler()} } >
                    <input type = "file" onChange={(e) => setImgSrc(e.target.files[0]) } />
                    <Button variant='contained' type='submit' >Upload</Button> 
                </form>
                
        </div>
     );
}
 
export default CkEditor;