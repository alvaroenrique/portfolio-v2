import React, { ReactElement, ReactNode, useRef, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import "../assets/scss/base.scss"

interface Props {
  children: ReactNode
  title: string
  icon: string
}

export default function layout({ children, title, icon }: Props): ReactElement {
  const sp = useRef(document.createElement("div"))
  const titleNode = useRef(document.createElement("h1"))

  useEffect(() => {
    const observer = new IntersectionObserver((entries, _) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          titleNode.current?.classList.remove("text-secondary")
        } else {
          titleNode.current?.classList.add("text-secondary")
        }
      })
    }, {})
    observer.observe(sp.current)
  }, [])

  return (
    <>
      <Helmet
        htmlAttributes={{
          // @ts-ignore
          style: "background: rgb(19, 20, 21);",
        }}
      />

      <main className="box px-5 m-auto">
        <>
          <div ref={sp}></div>
          <h1
            ref={titleNode}
            className="mt-8 pt-2 pb-5 mb-5 sticky top-0 bg-primary"
          >
            {title}
          </h1>
        </>
        {children}
      </main>
      <nav className="nav-box flex justify-between box px-5 pb-8 pt-5 fixed w-full bottom-0 bg-primary">
        <Link to="/">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0833 34.1667V23.9167H23.9167V34.1667H32.4583V20.5H37.5833L20.5 5.125L3.41666 20.5H8.54166V34.1667H17.0833Z"
              fill={icon === "home" ? "white" : "#8C8C8C"}
            />
          </svg>
        </Link>
        <Link to="/resume">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8.33333V31.6667C5 33.5 6.48333 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5H8.33333C6.48333 5 5 6.5 5 8.33333ZM25 15C25 17.7667 22.7667 20 20 20C17.2333 20 15 17.7667 15 15C15 12.2333 17.2333 10 20 10C22.7667 10 25 12.2333 25 15ZM10 28.3333C10 25 16.6667 23.1667 20 23.1667C23.3333 23.1667 30 25 30 28.3333V30H10V28.3333Z"
              fill={icon === "resume" ? "white" : "#8C8C8C"}
            />
          </svg>
        </Link>

        <Link to="/work">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6667 9.49999H25.3333V6.33332C25.3333 4.57582 23.9242 3.16666 22.1667 3.16666H15.8333C14.0758 3.16666 12.6667 4.57582 12.6667 6.33332V9.49999H6.33333C4.57583 9.49999 3.1825 10.9092 3.1825 12.6667L3.16666 30.0833C3.16666 31.8408 4.57583 33.25 6.33333 33.25H31.6667C33.4242 33.25 34.8333 31.8408 34.8333 30.0833V12.6667C34.8333 10.9092 33.4242 9.49999 31.6667 9.49999ZM22.1667 9.49999H15.8333V6.33332H22.1667V9.49999Z"
              fill={icon === "work" ? "white" : "#8C8C8C"}
            />
          </svg>
        </Link>

        <Link to="/blog">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6667 5H8.33333C6.5 5 5 6.5 5 8.33333V31.6667C5 33.5 6.5 35 8.33333 35H31.6667C33.5 35 35 33.5 35 31.6667V8.33333C35 6.5 33.5 5 31.6667 5ZM23.3333 28.3333H11.6667V25H23.3333V28.3333ZM28.3333 21.6667H11.6667V18.3333H28.3333V21.6667ZM28.3333 15H11.6667V11.6667H28.3333V15Z"
              fill={icon === "blog" ? "white" : "#8C8C8C"}
            />
          </svg>
        </Link>
      </nav>
    </>
  )
}
