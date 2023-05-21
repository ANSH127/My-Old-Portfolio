import React from 'react'

import { createClient } from 'next-sanity'
import groq from "groq";
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link';
import format from 'date-fns/format';




async function fetchBlogs() {


    const blogs = await client.fetch(groq`*[_type == "Blog"] | order(_createdAt asc)`, { cache: 'no-store' });

    return blogs;



}

const client = createClient({
    projectId: "cibcord3",
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false,
});
const builder = imageUrlBuilder(client)



export default async function page() {
    const blogs = await fetchBlogs();
    // console.log(blogs);
    return (
        <>
            <section id='blog'>

                <div className="container">
                    <section className="text-center">
                        <h4 className="mb-5 pt-4 text-white"><strong>Latest posts</strong></h4>

                        <div className="row">
                            {blogs.map((blog) => (


                                <div className="col-md-4  " key={blog._id}>
                                    <div className="card w-auto my-4  ">
                                        <div className="bg-image " data-mdb-ripple-color="light">
                                            <img src=
                                                {builder.image(blog.blogImage).url()}
                                             className="img-fluid" />
                                            <a href="#!">
                                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                            </a>
                                        </div>
                                        <div className="card-body">

                                            <p className="card-text text-start" style={{color:'red'}}>

                                                {format(new Date(blog.date), 'MMMM dd, yyyy')}
                                            </p>


                                            <Link
                                                href={`/blog/${blog.slug.current}`}
                                              style={{ textDecoration: 'none' }}> <h5 className="card-title text-start text-white fw-bold">{blog.Title}</h5></Link>
                                            <p className="card-text text-start">
                                                {blog.description}...
                                                <br />
                                                {
                                                    blog.badges.map((badge) => (
                                                        <span className="badge bg-secondary mx-1" key={badge} >{badge}</span>
                                                    ))

                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}




                            {/* <div className="col-4">
                                <div className="card w-auto my-4  ">
                                    <div className="bg-image " data-mdb-ripple-color="light">
                                        <img src="https://res.cloudinary.com/dckfb8ri8/image/upload/q_auto/f_auto/c_scale,h_840,w_1600/v1/Blog/Featured%20Images/transform_your_workspace_w8wlqa?_a=ATAMhAA0" className="img-fluid" />
                                        <a href="#!">
                                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                       <a href="" style={{textDecoration:'none'}}> <h5 className="card-title text-start text-white fw-bold">TechnOcean: A 3-Day Techfest by School of CSE, LPU</h5></a>
                                        <p className="card-text text-start">
                                            TechnOcean was a three-day tech fest hosted by the School of Computer Science and Engineering at Lovely Professional University, with a theme of “Learn. Build. Present.” from 14th to 16th April. Under the esteemed...
                                            <br />
                                            
                                        <span className="badge bg-secondary mx-1">#GCP</span>
                                        <span className="badge bg-secondary mx-1">#CLOUD</span>
                                        </p>
                                    </div>
                                </div>
                            </div> */}

                        </div>

                    </section>
                </div>
            </section>
        </>
    )
}
