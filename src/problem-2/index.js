import React, {useState} from "react";
import { TextField, Button } from "@mui/material";
import sendValue from "./api";


const Problem2Page = () =>{

    const [Value,setValue] = useState("");
    const [result,setResult] = useState(null);

    const onChange = e => {
        setValue( e.target.value );
    };

    const python = async e => {
        e.preventDefault();
        setResult(await sendValue(Value));
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
                    <Button variant="outlined" color="secondary" onClick={python}>Run Test</Button>
                </div>
            </form>
            <div>
                <h3 style={{fontFamily:'Roboto'}}>Output</h3>
                <pre id="output-2">{result}</pre>
            </div>
        </div>
    );
};

export default Problem2Page;