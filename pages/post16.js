import React from 'react'
import Head from 'next/head'

const Post16 = (props) => {
  return (
    <>
      <div className="post16-container">
        <Head>
          <title>Post16 - Our Single Oryx</title>
          <meta property="og:title" content="Post16 - Our Single Oryx" />
        </Head>
      </div>
      <style jsx>
        {`
          .post16-container {
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

export default Post16
