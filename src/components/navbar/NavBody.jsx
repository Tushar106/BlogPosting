import React, { useContext, useState } from "react";
import { Context } from "../hooks/BlogContex";
import { useNavigate } from "react-router-dom";
function NavBody() {
    const navigate=useNavigate();
    const [file, setFile] = useState()
    const [content,setContent]=useState({
        title:undefined,
        desc:undefined
    })
    function changeImg(e) {
        if (e.target.files) {
            setFile(URL.createObjectURL(e.target.files[0]));
        }
    }
    const [blogs,setBlogs]=useContext(Context);
    function  handleSubmit(e){
         setBlogs((prev)=>{
            const b={Image:file,title:content.title,desc:content.desc}
            return [...prev,b]
        })
        console.log(blogs)
        localStorage.setItem("blogs", JSON.stringify({blogs}));
        navigate('/blogs')
        e.preventDefault();
    }
    function handleChange(e){
        const {name,value}=e.target;
        setContent((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
        

    return (
        <div className="navBody">
            <div className="container">
                <div className="navBody-content">
                    <h1>Post Your Blog</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="Blog">
                        <div className="blog-img" style={{
                            backgroundImage: `url(${file})`, backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover"
                        }}>
                            <label htmlFor='upload-btn' className="img-upload" type="input">Upload</label>
                            <input type="file" id="upload-btn" onChange={changeImg} accept="image/*" />
                        </div>
                        <div className="card-body">
                            <div className="form-row">
                                {/* <input type="text" name="" id="" /> */}
                                <input type="text" className="form-row-field-input" name="title" value={content.title} onChange={handleChange}/>
                                <label htmlFor="POST-name" className="form-row-field">Blog Title</label>
                            </div>
                            <div className="form-row">
                                {/* <input type="text" name="" id="" /> */}
                                <input type="textArea" className="form-row-field-input" name="desc"  value={content.desc} onChange={handleChange}  />
                                <label htmlFor="POST-name" className="form-row-field">Description</label>
                            </div>
                           
                        </div>
                        <button>Submit</button>
                    </div>
                    </form>

                </div>
            </div>

        </div>)
}
export default NavBody