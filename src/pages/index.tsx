import React, { ReactElement } from "react"
import Layout from "../components/layout"

interface Props {}

export default function IndexPage({}: Props): ReactElement {
  return (
    <Layout title="Alvaro Enrique" icon="home">
      <p className="mt-10">
        Frontend developer and designer, mechanical keyboard enthusiast,
        practicing minimalist, and trance lover in search of flow. Writing about
        design and code.
      </p>
    </Layout>
  )
}
