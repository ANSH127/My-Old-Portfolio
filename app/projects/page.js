import React from 'react'
import Navbar from '@/components/Navbar'
import { createClient } from 'next-sanity'
import groq from "groq";
import imageUrlBuilder from '@sanity/image-url'




async function fetchProjects() {


    const projects = await client.fetch(groq`*[_type == "Project"] | order(_createdAt asc)`, { cache: "no-store" });

    return projects;



}

const client = createClient({
    projectId: "cibcord3",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
});
const builder = imageUrlBuilder(client)


export default async function page() {
    const projects = await fetchProjects();
    // console.log(projects);


    return (
        <>

            <section id="proj" className="pb-5">
                <Navbar />
                <div className="container">

                    <h3 className="text-center pt-3 fw-bold " style={{ color: 'white' }}>Projects</h3>

                    <div className="projbox ">
                        {projects.map((project) => (


                            <div className="card mx-2 my-2 " key={project._id} >
                                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                                    <img src=
                                        {builder.image(project.Image).url()}
                                     className="img-fluid" alt='' />

                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center fw-bold " style={{color:'white'}} >{project.Title}</h5>
                                    <p className="card-text">
                                        {project.Description}
                                    </p>
                                    <div className="text-center">

                                        <a href={project.Link}

                                            className="btn btn-primary btn-md" target='_blank' rel='noreferrer' style={{ backgroundColor: "black", fontWeight: "700" }}>View on
                                            Github</a>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>

                </div>

            </section>
        </>
    )
}
