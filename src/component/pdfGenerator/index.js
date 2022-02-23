const PdfGenerator = () => {
    return ( 
        <div>
            <div className="preview-content-container">
                <img className="img-modify" src="https://images.unsplash.com/photo-1645457223071-f4c74d475e25?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=520&amp;q=80" />
                    <div className="preview-container-head">
                        <h3>Modern Marketing Scorecard</h3>
                        <span className="my-edit-field" style = {{fontSize: "20px"}}>Client Name</span>
                        </div><div className="preview-container-foot">
                        <div className="preview-container-foot-1">
                            <span><p>Prepared By.</p>
                            <h5 className="cosultant-name">ConsultantName</h5>
                            </span>
                            </div>
                            </div>
                            </div>
        </div>
        
     );
}
 
export default PdfGenerator;