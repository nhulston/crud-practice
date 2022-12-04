import Navbar from "../../components/Navbar";
import Axios from "axios";
import Head from "next/head";
import {useEffect, useState} from "react";
import EditBlog from "../../components/EditBlog";
import {useRouter} from "next/router";

export default function Edit() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        Axios.get(`http://localhost:3001/blog/${id}`).then((response) => {
            if (response.data.length > 0) {
                setTitle(response.data[0].title);
                setBody(response.data[0].body);
            }
        });
    }, [id]);

    const updatePost = () => {
        Axios.put(`http://localhost:3001/update/${id}`, {
            title: title,
            body: body,
        }).then(() => {
            console.log("success");
            document.location.href="/";
        });
    };

    return (
        <>
            <Head>
                <title>Edit Post</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <EditBlog title={title} onChangeTitle={(event) => {
                setTitle(event.target.value);
            }} body={body} onChangeBody={(event) => {
                setBody(event.target.value);
            }} editPost={updatePost}/>
        </>
    )
}