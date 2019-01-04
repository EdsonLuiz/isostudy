import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import Card from '../components/Card'

import wallpaper from '../images/wallpaper.jpg'
import wallpaper2 from '../images/wallpaper2.jpg'
import wallpaper3 from '../images/wallpaper3.jpg'
import wallpaper4 from '../images/wallpaper4.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="hero">
      <div className="hero-group">
        <h1>Learn to design and code React apps</h1>
        <p>
          Complete courses about the best tools and design systems. Prototype
          and build apps with React and Swift.
        </p>
        <Link to="/page-2/">Watch the video</Link>
      </div>
    </div>

    <div className="cards">
      <h2>11 Courses, more coming</h2>
      <div className="card-group">
        <Card
          title="Design System with Figma"
          text="10 sections"
          image={wallpaper}
        />
        <Card
          title="React for designers"
          text="12 sections"
          image={wallpaper2}
        />
        <Card
          title="Video Editing with Screenflow"
          text="6 sections"
          image={wallpaper3}
        />
        <Card
          title="Sound Design with Cubase"
          text="6 sections"
          image={wallpaper4}
        />
      </div>{' '}
      {/* END .card-group */}
    </div>
    {/*     
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
     */}
  </Layout>
)

export default IndexPage
