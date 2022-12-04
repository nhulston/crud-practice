import Navbar from "../components/Navbar";
import {useEffect, useState} from "react";
import Axios from "axios";
import BlogList from "../components/BlogList";

export default function Home() {
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:3001/blogs").then((response) => {
            setBlogList(response.data);
        });
    }, []);

    const deleteBlog = (id) => {
        console.log('deleting: ' + id);
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            setBlogList(blogList.filter((val) => {
                return val.id !== id;
            }));
        });
    }

    return (
        <>
            <Navbar/>
            <BlogList list={blogList} onDelete={deleteBlog}/>
        </>
    );
}
