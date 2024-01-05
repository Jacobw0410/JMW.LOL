import React from 'react'
import Head from 'next/head'

const Post11 = (props) => {
  return (
    <>
      <div className="post11-container">
        <Head>
          <title>Post11 - Our Single Oryx</title>
          <meta property="og:title" content="Post11 - Our Single Oryx" />
        </Head>
      </div>
      <style jsx>
        {`
          .post11-container {
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

export default Post11
