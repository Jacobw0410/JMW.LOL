import React from 'react'
import Head from 'next/head'

const Post12 = (props) => {
  return (
    <>
      <div className="post12-container">
        <Head>
          <title>Post12 - Our Single Oryx</title>
          <meta property="og:title" content="Post12 - Our Single Oryx" />
        </Head>
      </div>
      <style jsx>
        {`
          .post12-container {
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

export default Post12
