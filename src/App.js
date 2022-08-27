import React from "react";
import Layout from "./Components/Layout";

import PageRoutes from "./Routes";

const App = () =>{
    return(
        <div>
            <Layout>
                <PageRoutes/>
            </Layout>
        </div>
    );
};

export default App;