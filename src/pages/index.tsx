import React, { ReactElement } from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"

interface Props {}

export default function IndexPage({}: Props): ReactElement {
  return (
    <Layout icon="home">
      <div className="flex flex-wrap mt-8 pt-2 pb-5 mb-5 sticky top-0 t-container">
        <motion.h1
          initial={{ width: "100%" }}
          animate={{ width: "0" }}
          transition={{ duration: 1.5, delay: 2 }}
          className=" bg-primary overflow-hidden whitespace-no-wrap"
        >
          Alvaro Enrique
        </motion.h1>
        <svg
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.3183 22.7494L43.5303 33.171H16.8393V22.7494H38.3183ZM5.61448 44.8787L5.61448 54.4872H0.809101L5.61448 44.8787ZM27.5 1.11783L33.6394 13.3938L21.3606 13.3938L27.5 1.11783ZM16.8393 54.4872V42.5267H48.2092L54.1909 54.4872H16.8393Z"
            fill="white"
            stroke="white"
            className="svg-elem-1"
          ></path>
        </svg>
      </div>
      <p>
        Frontend developer and designer, mechanical keyboard enthusiast,
        practicing minimalist, and trance lover in search of flow. Writing about
        design and code.
      </p>
    </Layout>
  )
}
