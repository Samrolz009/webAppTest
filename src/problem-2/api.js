import axios from "axios";


const API_URL='http://localhost:8000/problems/';


const sendValue = async (Value) => {
  try {
    const {data:response} = await axios.post(API_URL, {input: Value}) //use data destructuring to get data from the promise object
    return response.result
  }
    
  catch (error) {
    console.log(error);
  }
};



export default sendValue;