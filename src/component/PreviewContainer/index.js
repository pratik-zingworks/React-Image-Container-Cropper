
import "./index.css"

const PreviewContainer = () => {
    return ( 
        <div className = "preview-container" style={{
            width: "100%",
            height: "100vh",
            margin: "auto",
            padding: "12px"
        }} >
            <div className = "preview-content-container" style={{
                margin: "auto",
                width: "595px",
                height: "842px",
                boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.3)",
                position: "relative"
            }} >
                <img
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: "-999"
                }} 
                className="img-modify"
                src="https://images.unsplash.com/photo-1645457223071-f4c74d475e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=520&q=80" />
                <div className="preview-container-head" 
                style={{
                    padding: "1px 1px 1px 20px",
                    width: "400px",
                    position: "relative",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    fontSize: "40px",
                    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
                
                }}
                >
                    <h3>
                        Modern Marketing Scorecard
                    </h3>
                    <span className="my-edit-field" style={{ fontSize: "20px" }} >
                        Modern Marketing Scorecard
                    </span>
                </div>
                <div className="preview-container-foot" >
                    <div className="preview-container-foot-1">
                        <span>
                        <p>Prepared By.</p>
                        <h5 className="cosultant-name" >   </h5>
                        </span>
                    </div>
                </div>
                {/* <span className= "my-editor-page" contentEditable = {true} >
                    <figure className="table"><table><tbody><tr><td><h2><i>How To Use React Ckeditor Upload File Image With Demo and Example Codes</i></h2></td><td rowSpan="2"><img src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" height = "200" /></td></tr><tr><td>This is a simple tutorial on how you can configure React Ckeditor wysiwyg library to handle file upload when users try to insert a picture into our editor, so the editor will upload the file to the server rather than providing the base64 string the default case by CKeditor.&nbsp;</td></tr></tbody></table></figure>
                </span>
                <span className= "my-editor-page" contentEditable = {true} >

                <figure className="table"><table><tbody><tr><td><h2><i>How To Use React Ckeditor Upload File Image With Demo and Example Codes</i></h2></td><td rowSpan="2"><img src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" height = "200" /></td></tr><tr><td>This is a simple tutorial on how you can configure React Ckeditor wysiwyg library to handle file upload when users try to insert a picture into our editor, so the editor will upload the file to the server rather than providing the base64 string the default case by CKeditor.&nbsp;</td></tr></tbody></table></figure>
                </span>
                <span className= "my-editor-page" contentEditable = {true} >

                <figure className="table"><table><tbody><tr><td><h2><i>How To Use React Ckeditor Upload File Image With Demo and Example Codes</i></h2></td><td rowSpan="2"><img src = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" height = "200" /></td></tr><tr><td>This is a simple tutorial on how you can configure React Ckeditor wysiwyg library to handle file upload when users try to insert a picture into our editor, so the editor will upload the file to the server rather than providing the base64 string the default case by CKeditor.&nbsp;</td></tr></tbody></table></figure>
                </span> */}
            </div>
        </div>
     );
}
 
export default PreviewContainer;