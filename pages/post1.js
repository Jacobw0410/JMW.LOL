import React from 'react'
import Head from 'next/head'

const Post1 = (props) => {
  return (
    <>
      <div className="post1-container">
        <Head>
          <title>Post1 - Our Single Oryx</title>
          <meta property="og:title" content="Post1 - Our Single Oryx" />
        </Head>
      </div>
      <style jsx>
        {`
          .post1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default Post1
