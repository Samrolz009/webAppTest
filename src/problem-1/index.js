import React from "react";
import { TextField, Button } from "@mui/material";

const Problem1Page = () =>{
    return(
        <div>
            <form name="problem-1" method="post">
                <TextField id="outlined-basic input-1" multiline rows={6} label="Input" variant="outlined" margin="dense" color="secondary"/>
                <div style={{marginTop:'20px'}}>
                    <Button variant="outlined" color="secondary">Run Test</Button>
                </div>
            </form>
            <div>
                <h3 style={{fontFamily:'Roboto'}}>Output</h3>
                <pre id="output-1">iuhiugsd</pre>
            </div>
        </div>
    );
};

export default Problem1Page;