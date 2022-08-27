import React, {useState} from "react";
import axios from "axios";
import { TextField, Button } from "@mui/material";


const Problem2Page = () =>{

    const [Value,setValue] = useState("");

    const API_URL = "http://localhost:8000/problems/";

    const onChange = e => {
        setValue( e.target.value );
    };

    const sendValue = e => {
        e.preventDefault();
        console.log(API_URL, Value);
        axios.post(API_URL, {input: Value})
        .then(() => {
          console.log("sent");
        })
        .catch((error) => {console.log(error)});
    };

    return(
        <div>
            <form name="problem-2" method="post">
                <TextField id="outlined-basic input-2" multiline rows={6}
                    label="Input" variant="outlined" margin="dense" color="secondary"
                    name="input" value={Value}
                    onChangeCapture={onChange}
                />
                <div style={{marginTop:'20px'}}>
                    <Button variant="outlined" color="secondary" onClick={sendValue}>Run Test</Button>
                </div>
            </form>
            <div>
                <h3 style={{fontFamily:'Roboto'}}>Output</h3>
                <pre id="output-2">iuhiugsd</pre>
            </div>
        </div>
    );
};

export default Problem2Page;