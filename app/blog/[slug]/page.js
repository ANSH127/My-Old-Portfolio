import React from 'react'

import { createClient } from 'next-sanity'
import groq from "groq";
import PortableText from 'react-portable-text';
import format from 'date-fns/format';
import imageUrlBuilder from '@sanity/image-url'



async function fetchBlog(slug) {


  const blog = await client.fetch(groq`*[_type == "Blog" && slug.current == '${slug}' ][0]`, { cache: 'no-store' });

  return blog;



}
async function fetchAuthor(id) {

  // console.log(slug);
  const author = await client.fetch(groq`*[_type=="author" && _id =='${id}' ][0]`, { cache: "no-store" });

  return author;
}

const client = createClient({
  projectId: "cibcord3",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
const builder = imageUrlBuilder(client)

export default async function page({ params }) {
  console.log(params.slug);
  const blog = await fetchBlog(params.slug);
  // console.log(blog);
  const author = await fetchAuthor(blog.author._ref);
  // console.log(author);

  return (
    <>


      <body className="relative" style={{ backgroundColor: "#1a202c" }}>

        <div id="main" className="relative">
          <div>
            <div>
              <div className="container py-6 md:py-10">
                <div className="mx-auto  col-10 text-white pt-5">
                  <p className='lh-base fs-5 fw-bolder text-secondary'>Last Updated: {format(new Date(blog._updatedAt), 'MMMM dd, yyyy')}</p>
                  <div className="bg-image " data-mdb-ripple-color="light">
                    <img src=
                      {builder.image(blog.blogImage).url()}
                      className="img-fluid" />

                  </div>
                  <div className='pt-4'>
                    <img
                      src={builder.image(author.image).width(50).height(50).url()}
                      class="rounded-circle"
                      alt="Avatar" />
                    <span className="mx-2 fw-bold" style={{ color: "#3d76e3" }} >{author.title}</span>
                    <span class="badge bg-success">AUTHOR</span>
                  </div>
                  <hr />
                  <div className="">
                    <h1 className="my-3 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                      {blog.Title}
                    </h1>
                  </div>
                  <div className="prose max-w-none pt-8" id='content' >
                    <PortableText
                      // Pass in block content straight from Sanity.io
                      content={blog.content}
                      projectId="cibcord3"
                      dataset="production"
                      className=' lh-base fs-5 fw-bolder text-secondary

                      w-100 pb-2'




                      // Optionally override marks, decorators, blocks, etc. in a flat
                      // structure without doing any gymnastics
                      serializers={{
                        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                        li: ({ children }) => <li className="special-list-item">{children}</li>,

                      }}
                    />





                  </div>
                  <hr />
                  <div className='row' >
                    <div className="col-md-3 text-center">
                      <img src=
                        {builder.image(author.image).width(200).height(200).url()}
                        class="rounded-circle my-4" style={{ width: "150px" }}
                        alt="Avatar" />
                    </div>
                    <div className="col-md-9" id='authordetails'>
                      <h2 className='my-3  fw-bolder'>Ansh Agarwal</h2>
                      <p className='lh-base fs-5 fw-bolder text-secondary'>A Student and Full Stack Web Developer from India with a immense knowledge of DevOps and experience in Backend APIs. Loves to contribute to Open Source.</p>
                      <div className='author-links'>
                        <a className="btn text-white btn-floating m-1" href="https://www.instagram.com/i_agarwal_ansh/" role="button"
                          style={{ backgroundColor: '#ac2bac' }}><i className="fab fa-instagram"></i></a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#0082ca' }}
                          href="https://www.linkedin.com/in/ansh-agarwal-390797253/" role="button"><i
                            className="fab fa-linkedin-in"></i></a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#333333' }}
                          href="https://github.com/the-error4-0-4" role="button"><i className="fab fa-github"></i></a>
                      </div>

                    </div>

                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>


        </div>

        <script src="/assets/js/main.js"></script>


      </body>

    </>

  )
}
