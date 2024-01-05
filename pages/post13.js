import React from 'react'
import Head from 'next/head'

const Post13 = (props) => {
  return (
    <>
      <div className="post13-container">
        <Head>
          <title>Post13 - Our Single Oryx</title>
          <meta property="og:title" content="Post13 - Our Single Oryx" />
        </Head>
      </div>
      <style jsx>
        {`
          .post13-container {
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

export default Post13
