import Navbar from "../components/Navbar";
import Axios from "axios";
import Head from "next/head";
import {DeleteButton} from "../components/DeleteButton";

export default function Admin() {
    const deleteAllPosts = () => {
        Axios.delete("http://localhost:3001/deleteAll").then(() => {
            console.log("success");
            document.location.href="/";
        });
    }

    return (
        <>
            <Head>
                <title>Admin Panel</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <DeleteButton onClick={() => {
                return confirm("Are you sure you want to delete all posts?") ? deleteAllPosts() : null;
            }
            }>Delete All Posts</DeleteButton>
        </>
    )
}