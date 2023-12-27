"use client"
import Head from "next/head";
import Home from '../Component/Home';
import { useEffect, useState } from "react";

function Homepage() {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        
        const value = localStorage.getItem("user");
        setUser(JSON.parse(value));

    }, []);

    
   


    return (
        <>
          <Head>
          {/* <meta name='viewport' content='width=device-width,initial-scale=1.0' /> */}
          <title>Town of Books</title>
          <link rel="icon"  href="/book_favicon2.ico" />


          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
          {/* <style>
           @import url('https://fonts.googleapis.com/css2?family=Belleza&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Playfair+Display:wght@400;600;700;800;900&display=swap');
          </style> */}
        
          </Head>
          
          


            <div>
                {user? <Home/> : "jyoti"}
             {/* <Home /> */}
         </div>
        </>
    )
}
export default Homepage