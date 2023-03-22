import React from 'react'
import Layout from '../components/Layout/Layout'
import about from "../image/about.jpg"
const About = () => {
  return (
    <Layout title={"About us "}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={about}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Chúng tôi chuyên về reroll
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About