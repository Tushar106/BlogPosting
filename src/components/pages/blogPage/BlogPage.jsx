import React, { useContext, useState } from "react";
import Navbar from "../../navbar/Navbar";
import { Context } from "../../hooks/BlogContex";
import Blog from "../../Blog/Blog";
// import Upload from "../uploadPage/Upload";
// import { Context } from "../../hooks/BlogContex";

function BlogPage(){
    // function deleteBlog(index){
    //     setBlogs(prev=>{
    //         return prev.filter((x,itemIndex)=>{
    //             return itemIndex!=index;
    //         })
    //     })
    // }
    const [blogs,setBlogs]=useContext(Context)
    
    
    return(
        <div>
            <Navbar/>
            <div className="container" style={{padding:"32px"}}>
                <div className="row">
                    <div className="col-lg-4 md-4 sm-6" style={{padding:"10px" ,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><Blog/></div>
                    <div className="col-lg-4 md-4 sm-6" style={{padding:"10px" ,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><Blog/></div>
                    <div className="col-lg-4 md-4 sm-6" style={{padding:"10px" ,textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}><Blog/></div>
                    
                    


            </div>
            </div>
            {console.log(blogs)}
            
        </div>

    )
}
export default BlogPage;