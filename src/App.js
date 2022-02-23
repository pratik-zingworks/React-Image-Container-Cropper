import CkEditorContainer from "./component/CkEditorContainer";
import PreviewContainer from "./component/PreviewContainer";

import "./App.css"
import { Grid } from "@mui/material";

const App = () => {
  return (
    <div className = "app-container" >
      <Grid container spacing = {2} >
        <Grid item xs = {12} >

        </Grid>
        <Grid item xs = {12} >
          <Grid container >
            <Grid item md = {6} xs = {12} >
              <div className = "container-a" >
                <div className = "sub-container-a" >
                  <img />
                </div>
                {/* <PreviewContainer /> */}
              </div>
            </Grid>
            <Grid item md = {6} xs = {12} >
              <div className = "container-b" >
                <CkEditorContainer />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div> 
   );
}
 
export default App;