import Layout from '../components/layout'
// import Image from '../components/image'
import {Link} from 'gatsby'
import React from "react"

export default () => (
  <Layout>
    <h1>Hello world!</h1>
    <p>Welcome to aarjan's world</p>
    <div style={{maxWidth:'300px'}}>
      {/* <Image/> */}
    </div>
  <Link to="/page-2">Go to page 2</Link>
  </Layout>
)