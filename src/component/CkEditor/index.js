import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

// function CropDemo({ src }) {
//     console.log(crop)
//     return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />
// }

const CkEditor = () => {

    const [clientName, setClientName] = useState("Client Name")
    const [consultName, setConsultName] = useState("ConsultantName")

    const [imgSrc, setImgSrc] = useState("")
    // const [crop, setCrop] = useState({ aspect: 16 / 9 })

    // const [croppedImgUrl, setCroppedImgUrl] = useState(null)

    useEffect(() => {
        // document.querySelector(".my-edit-field").innerHTML = clientName
        // document.querySelector(".cosultant-name").innerHTML = consultName

    }, [clientName, consultName])


    const UploadHandler = () => {
        // console.log(imgSrc)
        var x = document.querySelector(".sub-container-a img")
        x.src = imgSrc
    }

    //image selection
    const onSelectFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          const reader = new FileReader();
          reader.addEventListener('load', () =>
            setImgSrc(reader.result)
          );
          reader.readAsDataURL(e.target.files[0]);
        }
    };
   
    //Increase Size of image:
    const incrImgSize = () => {
        
            var x = document.querySelector(".sub-container-a img")
            x.style.width = `${x.width + 20}px`
            x.style.height = `${x.height + 20}px`

            console.log(x.width)
        
    }
    const decrImgSize = () => {
        var x = document.querySelector(".sub-container-a img")
            x.style.width = `${x.width - 20}px`
            x.style.height = `${x.height - 20}px`

            console.log(x.width)
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
                {/* <CropDemo  src = {imgSrc} /> */}
                <form onSubmit={ (e) => {
                    e.preventDefault()
                    UploadHandler()} } >
                    <input type="file" accept="image/*" onChange={(e) => onSelectFile(e)} />
                    <Button variant='contained' type='submit' >Upload</Button>
                    
                </form>    
                <Button
                variant='contained'
                onClick = {() => incrImgSize()}
                >+</Button>
                &nbsp;
                <Button
                variant='contained'
                onClick = {() => decrImgSize()}
                >-</Button> 
        <div>
        </div>
        









        </div>
     );
}
 
export default CkEditor;