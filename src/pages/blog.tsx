import React, { ReactElement } from "react"
import Layout from "../components/layout"

interface Props {}

export default function blog({}: Props): ReactElement {
  return (
    <Layout title="Blog" icon="blog">
      <div></div>
    </Layout>
  )
}
