import Head from "next/head";
import Navbar from "../components/Navbar"; 
import Image from "next/image";
import Link from "next/link";

const index =({data}) => {
    return (
        <>
        <Head>
            <title>About | Belajar Next JS</title>
            <meta name="descriptiion" content="Belajar Next JS"/>
        </Head>
        <Navbar />
        <Image src="/vercel.svg" alt="Logo Vercel" width={300} heigth={200}/>
        <h1>Ini halaman About</h1>
        {data.map((item) =>(
            <div key={item.id}>
                <h2>{item.name}</h2>
            </div>
        ))}
        </>
    );

};

export default index;

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typecode.com/users");
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};


