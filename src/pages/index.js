import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (

  <Layout>


    <div className="Hero">
      <div className="HeroGroup">
        <h1>Collecting Rainbows</h1>
        <p>Send me all your Rainbows</p>
        <Link to="#"><button>View All</button></Link>

      </div>

    </div>
  </Layout>
)

export default IndexPage
