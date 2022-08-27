import React from "react";
import {Route, Routes} from "react-router-dom";
import Problem1Page from "./problem-1";
import Problem2Page from "./problem-2";

const PageRoutes = () =>{
    return(
        <Routes>
            <Route exact path="/problem1" element={Problem1Page}/>
            <Route exact path="/problem2" element={Problem2Page}/>
        </Routes>
    );
};

export default PageRoutes;