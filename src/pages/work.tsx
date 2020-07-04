import React, { ReactElement } from "react"
import Layout from "../components/layout"

interface Props {}

export default function work({}: Props): ReactElement {
  return (
    <Layout title="Work" icon="work">
      <div></div>
    </Layout>
  )
}
