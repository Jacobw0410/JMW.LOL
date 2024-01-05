import React from 'react'
import Head from 'next/head'

const Post14 = (props) => {
  return (
    <>
      <div className="post14-container">
        <Head>
          <title>Post14 - Our Single Oryx</title>
          <meta property="og:title" content="Post14 - Our Single Oryx" />
        </Head>
      </div>
      <style jsx>
        {`
          .post14-container {
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

export default Post14
