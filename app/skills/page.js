import React from 'react'
import Navbar from '@/components/Navbar'


import { createClient } from 'next-sanity'
import groq from "groq";
import imageUrlBuilder from '@sanity/image-url'

async function fetchSkills() {


  const skills = await client.fetch(groq`*[_type == "Skills"] | order(_createdAt asc) `, { cache: "no-store" });

  return skills;



}

const client = createClient({
  projectId: "cibcord3",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});
const builder = imageUrlBuilder(client)



export default async function page() {
  const skills = await fetchSkills();
  // console.log(skills);
  return (
    <>

      <section id="skills">
        <Navbar />

        <div className="container-fluid my-5 text-center " id="skills1"
          style={{ borderRadius: "25px", width: "90%", marginLeft: "4%" }}>

          <h3 className="text-center mt-3" style={{ color: "white" }}>Skills</h3>

          <div className="projbox" style={{ color: "white" }}>
            {skills.map((skill) => {

              return (
                <div className="col-3 text-center skillbox py-3" key={skill._id} >
                  <a href={skill.Link}><img className="meterimg" src={builder.image(skill.Image).url()} width="100"
                    alt="" /></a>
                  <h5 className="mt-2">{skill.Title}</h5>
                </div>
              )
            })}





          </div>




        </div>

      </section>
    </>
  )
}
