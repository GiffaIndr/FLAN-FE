import React from 'react'
import Background from "../Background.jsx";
import Layout from "../Layout.jsx";
import Image from "./Image.jsx";
import Form from "./Form.jsx";

export default function Index() {
  return (
    <>
     <Background>
        <div>
          <Layout>
            <Form />
            <Image />
          </Layout>
        </div>
      </Background>
    </>
  )
}
