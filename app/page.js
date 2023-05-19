import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Astronout from '@/media/astronout.png'
import { createClient } from 'next-sanity'
import groq from "groq";
import imageUrlBuilder from '@sanity/image-url'

async function fetchProfile() {


    const profile = await client.fetch(groq`*[_type == "Profile"][0]`, { cache: "no-store" });

    return profile;



}

const client = createClient({
    projectId: "cibcord3",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: true,
});
const builder = imageUrlBuilder(client)



export default async function Home() {
    const profile = await fetchProfile();
    // console.log(profile);
    return (
        <>

            <div id='home'>
                <Navbar />

                <Image style={{ right: '0px' }} className="animate__animated animate__pulse animate__infinite animate__slower"
                    src={Astronout} id="astro" alt="" height="250" width="250" />
                <section id="" style={{ top: '20%', position: 'relative' }}>

                    <div className="text-center">
                        <img src=
                            {builder.image(profile.Image).url()}
                         className="rounded-circle shadow-1-strong" style={{ backgroundColor: '#050000' }}
                            alt="" width="200" height="200" />
                    </div>

                    <h1 className="text-center animate__animated animate__fadeInDown" id="name">{profile.Name}</h1>
                    <h5 className="text-center animate__animated animate__zoomIn">{profile.Title}</h5>
                    <p className="text-center fw-bold animate__animated animate__zoomIn">{profile.Description}</p>
                    <Link href="/contact" style={{ textDecoration: 'none' }}><button id="btn" className="fw-bold">Let's Connect<i
                        className="fas fa-arrow-right"></i></button></Link>

                </section>

            </div>
        </>
    )
}
