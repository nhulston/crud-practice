import Navbar from "../components/Navbar";
import Head from "next/head";
import CreateBlog from "../components/CreateBlog";
import {useState} from "react";
import Axios from "axios";

export default function Create() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const createPost = () => {
        Axios.post("http://localhost:3001/create", {
            title: title,
            body: body,
        }).then(() => {
            console.log("success");
            document.location.href="/";
        });
    }

    return (
        <>
            <Head>
                <title>Create Post</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <CreateBlog title={title} onChangeTitle={(event) => {
                setTitle(event.target.value);
            }} body={body} onChangeBody={(event) => {
                setBody(event.target.value);
            }} createPost={createPost}/>
        </>
    )
}