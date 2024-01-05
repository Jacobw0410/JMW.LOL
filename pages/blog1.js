import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostCard1 from '../components/blog-post-card1'
import BlogPostCard2 from '../components/blog-post-card2'

const Blog1 = (props) => {
  return (
    <>
      <div className="blog1-container">
        <Head>
          <title>Blog1 - Our Single Oryx</title>
          <meta property="og:title" content="Blog1 - Our Single Oryx" />
        </Head>
        <div className="blog1-header">
          <header data-thq="thq-navbar" className="blog1-navbar-interactive">
            <Link href="/">
              <a className="blog1-link">Jacob White</a>
            </Link>
            <div className="blog1-container1">
              <div data-thq="thq-navbar-nav" className="blog1-desktop-menu">
                <nav className="blog1-links">
                  <span>About</span>
                  <span className="blog1-nav2">Projects</span>
                  <span className="blog1-nav4">About Me</span>
                  <span className="blog1-nav5">Blog</span>
                </nav>
                <div className="blog1-buttons"></div>
              </div>
            </div>
            <button type="button" className="button">
              <span>
                <span>Menu</span>
                <br></br>
              </span>
            </button>
            <div data-thq="thq-burger-menu" className="blog1-burger-menu">
              <svg viewBox="0 0 1024 1024" className="blog1-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="blog1-mobile-menu">
              <div className="blog1-nav">
                <div className="blog1-top">
                  <span className="blog1-logo1">COMPANY</span>
                  <div data-thq="thq-close-menu" className="blog1-close-menu">
                    <svg viewBox="0 0 1024 1024" className="blog1-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="blog1-links1">
                  <span className="blog1-nav11">About</span>
                  <span className="blog1-nav21">Projects</span>
                  <span className="blog1-nav3">Social Media</span>
                  <span className="blog1-nav41">About Me</span>
                  <span className="blog1-nav51">Blog</span>
                </nav>
                <div className="blog1-buttons1">
                  <button className="blog1-login button">Login</button>
                  <button className="blog1-register button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="blog1-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="blog1-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="blog1-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="blog1-banner">
          <h1 className="blog1-text3">Blog</h1>
          <span className="blog1-text4">Read About cool things I did.</span>
        </div>
        <div className="blog1-blog">
          <div className="blog1-container2">
            <BlogPostCard1
              rootClassName="rootClassName5"
              className="blog1-component"
            ></BlogPostCard1>
          </div>
          <div className="blog1-container3">
            <BlogPostCard1
              image_src="https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxjaXR5JTIwY2FifGVufDB8fHx8MTYyNjQ1MDMwNA&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName6"
              className="blog1-component1"
            ></BlogPostCard1>
          </div>
          <div className="blog1-container4">
            <BlogPostCard1
              image_src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHxjaXR5fGVufDB8fHx8MTYyNjQ1MDI4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName7"
              className="blog1-component2"
            ></BlogPostCard1>
          </div>
        </div>
        <div className="blog1-blog1">
          <div className="blog1-container5">
            <BlogPostCard2
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName4"
              className="blog1-component3"
            ></BlogPostCard2>
          </div>
          <div className="blog1-container6">
            <BlogPostCard2
              image_src="https://images.unsplash.com/photo-1595565312451-23051ab0666c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName5"
              className="blog1-component4"
            ></BlogPostCard2>
          </div>
          <BlogPostCard2
            image_src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxwb3J0cmFpdCUyMHdvbWFuJTIwY29sb3J8ZW58MHx8fHwxNjI2NDUwNTU4&amp;ixlib=rb-1.2.1&amp;h=1000"
            profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName1"
            className="blog1-component5"
          ></BlogPostCard2>
        </div>
        <footer className="blog1-footer">
          <div className="blog1-container7">
            <span className="blog1-logo2">
              <span>Jacob White</span>
              <br></br>
            </span>
            <nav className="blog1-nav1 blog1-nav1">
              <span className="blog1-nav12">About</span>
              <span className="blog1-nav22">Projects</span>
              <span className="blog1-nav31">Social Media</span>
              <span className="blog1-nav42">About Me</span>
              <span className="blog1-nav52">Blog</span>
            </nav>
          </div>
          <div className="blog1-separator"></div>
          <div className="blog1-container8">
            <div className="blog1-icon-group1">
              <a
                href="https://www.instagram.com/jacob.white0407/"
                target="_blank"
                rel="noreferrer noopener"
                className="blog1-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="blog1-icon10"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="blog1-icon12"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .blog1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .blog1-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #000000;
          }
          .blog1-navbar-interactive {
            width: 90%;
            display: flex;
            position: sticky;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            border-radius: 50px;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog1-link {
            color: var(--dl-color-gray-black);
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
          }
          .blog1-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .blog1-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .blog1-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .blog1-nav1 {
            transition: 0.3s;
          }
          .blog1-nav1:hover {
            color: #3d6e70ff;
          }
          .blog1-nav2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .blog1-nav2:hover {
            color: #3d6e70ff;
          }
          .blog1-nav4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .blog1-nav4:hover {
            color: #3d6e70ff;
          }
          .blog1-nav5 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .blog1-nav5:hover {
            color: #3d6e70ff;
          }
          .blog1-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog1-burger-menu {
            display: none;
          }
          .blog1-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .blog1-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            border-radius: 50px;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-white);
          }
          .blog1-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog1-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .blog1-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .blog1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .blog1-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .blog1-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .blog1-nav11 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog1-nav21 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog1-nav3 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog1-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog1-nav51 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog1-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog1-login {
            border-color: #291477ff;
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
          }
          .blog1-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: #291477ff;
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
            background-color: #291477ff;
          }
          .blog1-register:hover {
            border-color: #849492ff;
            background-color: #849492ff;
          }
          .blog1-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .blog1-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .blog1-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .blog1-banner {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            background-size: cover;
            justify-content: space-between;
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1500');
            background-position: center;
          }
          .blog1-text3 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .blog1-text4 {
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .blog1-blog {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            justify-content: space-between;
          }
          .blog1-container2 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .blog1-component {
            text-decoration: none;
          }
          .blog1-container3 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .blog1-component1 {
            text-decoration: none;
          }
          .blog1-container4 {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .blog1-component2 {
            text-decoration: none;
          }
          .blog1-blog1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .blog1-container5 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog1-component3 {
            text-decoration: none;
          }
          .blog1-container6 {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: space-between;
          }
          .blog1-component4 {
            text-decoration: none;
          }
          .blog1-component5 {
            text-decoration: none;
          }
          .blog1-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .blog1-container7 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .blog1-logo2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .blog1-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .blog1-nav12 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
          }
          .blog1-nav22 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .blog1-nav31 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .blog1-nav42 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .blog1-nav52 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .blog1-separator {
            flex: 0 0 auto;
            width: 100%;
            height: 0px;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            border-color: var(--dl-color-gray-800);
            border-style: solid;
            border-width: 1px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: row;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .blog1-container8 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog1-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .blog1-link1 {
            display: contents;
          }
          .blog1-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .blog1-icon12 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .blog1-link {
              color: var(--dl-color-gray-black);
              font-style: normal;
              font-family: Raleway;
              font-weight: 800;
              border-color: var(--dl-color-gray-black);
              border-width: 2px;
            }
            .blog1-mobile-menu {
              top: 16px;
              right: -954px;
              width: 991px;
            }
            .blog1-banner {
              flex: 1;
              height: 205px;
            }
            .blog1-text3 {
              font-size: 3rem;
            }
            .blog1-text4 {
              width: 100%;
            }
            .blog1-blog {
              flex-direction: column;
            }
            .blog1-container2 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .blog1-container3 {
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .blog1-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog1-desktop-menu {
              display: none;
            }
            .blog1-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .blog1-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blog1-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog1-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog1-nav3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog1-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog1-nav51 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .blog1-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog1-text4 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .blog1-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog1-blog1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog1-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .blog1-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blog1-container8 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .blog1-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .blog1-link {
              font-size: 1.5em;
            }
            .blog1-mobile-menu {
              padding: 16px;
            }
            .blog1-logo1 {
              font-size: 1.5em;
            }
            .blog1-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .blog1-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .blog1-blog {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog1-blog1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .blog1-footer {
              padding: var(--dl-space-space-unit);
            }
            .blog1-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .blog1-container8 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

export default Blog1
