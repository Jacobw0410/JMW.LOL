import React from 'react'
import Head from 'next/head'

const Post15 = (props) => {
  return (
    <>
      <div className="post15-container">
        <Head>
          <title>Post15 - Our Single Oryx</title>
          <meta property="og:title" content="Post15 - Our Single Oryx" />
        </Head>
      </div>
      <style jsx>
        {`
          .post15-container {
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

export default Post15
