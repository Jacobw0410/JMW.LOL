import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const AboutMe = (props) => {
  return (
    <>
      <div className="about-me-container">
        <Head>
          <title>AboutMe - Our Single Oryx</title>
          <meta property="og:title" content="AboutMe - Our Single Oryx" />
        </Head>
        <div className="about-me-header">
          <header data-thq="thq-navbar" className="about-me-navbar-interactive">
            <Link href="/">
              <a className="about-me-link">Jacob White</a>
            </Link>
            <div data-thq="thq-navbar-nav" className="about-me-desktop-menu">
              <nav className="about-me-links">
                <span>About</span>
                <Link href="/projects">
                  <a className="about-me-link1">Projects</a>
                </Link>
                <span className="about-me-nav4">About Me</span>
                <Link href="/blog">
                  <a className="about-me-link2">Blog</a>
                </Link>
              </nav>
              <div className="about-me-buttons"></div>
            </div>
            <div data-thq="thq-burger-menu" className="about-me-burger-menu">
              <svg viewBox="0 0 1024 1024" className="about-me-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="about-me-mobile-menu">
              <div className="about-me-nav">
                <div className="about-me-top">
                  <span className="about-me-logo1">COMPANY</span>
                  <div
                    data-thq="thq-close-menu"
                    className="about-me-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="about-me-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="about-me-links1">
                  <span className="about-me-nav11">About</span>
                  <span className="about-me-nav21">Projects</span>
                  <span className="about-me-nav3">Social Media</span>
                  <span className="about-me-nav41">About Me</span>
                  <span className="about-me-nav51">Blog</span>
                </nav>
                <div className="about-me-buttons1">
                  <button className="about-me-login button">Login</button>
                  <button className="about-me-register button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="about-me-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="about-me-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="about-me-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="about-me-hero">
          <div className="about-me-hero1">
            <div className="about-me-container1">
              <h1 className="about-me-hero-heading heading1">About Me</h1>
              <div className="about-me-btn-group"></div>
            </div>
          </div>
        </div>
        <div className="about-me-details"></div>
        <div className="about-me-features">
          <div className="about-me-features-container">
            <div className="about-me-features1">
              <div className="about-me-container2">
                <h2 className="about-me-features-heading heading2">About Me</h2>
              </div>
              <div className="about-me-container3"></div>
            </div>
          </div>
        </div>
        <div className="about-me-pricing"></div>
        <div className="about-me-gallery"></div>
        <div className="about-me-banner"></div>
        <div className="about-me-faq">
          <div className="about-me-faq-container"></div>
        </div>
        <div className="about-me-footer">
          <footer className="about-me-footer1">
            <div className="about-me-container4">
              <span className="about-me-logo2">
                <span>Jacob White</span>
                <br></br>
              </span>
              <nav className="about-me-nav1 about-me-nav1">
                <span className="about-me-nav12">About</span>
                <span className="about-me-nav22">Projects</span>
                <span className="about-me-nav31">Social Media</span>
                <span className="about-me-nav42">About Me</span>
                <span className="about-me-nav52">Blog</span>
              </nav>
            </div>
            <div className="about-me-separator"></div>
            <div className="about-me-container5">
              <div className="about-me-icon-group1">
                <a
                  href="https://www.instagram.com/jacob.white0407/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-me-link3"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="about-me-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="about-me-icon12"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <style jsx>
        {`
          .about-me-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-me-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #5228f5ff;
          }
          .about-me-navbar-interactive {
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
          .about-me-link {
            color: var(--dl-color-gray-black);
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
          }
          .about-me-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .about-me-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-me-nav1 {
            transition: 0.3s;
          }
          .about-me-nav1:hover {
            color: #3d6e70ff;
          }
          .about-me-link1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .about-me-link1:hover {
            color: #3d6e70ff;
          }
          .about-me-nav4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .about-me-nav4:hover {
            color: #3d6e70ff;
          }
          .about-me-link2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .about-me-link2:hover {
            color: #3d6e70ff;
          }
          .about-me-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-me-burger-menu {
            display: none;
          }
          .about-me-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .about-me-mobile-menu {
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
          .about-me-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-me-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .about-me-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .about-me-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-me-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .about-me-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-me-nav11 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-me-nav21 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-me-nav3 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-me-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-me-nav51 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .about-me-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-me-login {
            border-color: #291477ff;
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
          }
          .about-me-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: #291477ff;
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
            background-color: #291477ff;
          }
          .about-me-register:hover {
            border-color: #849492ff;
            background-color: #849492ff;
          }
          .about-me-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-me-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .about-me-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .about-me-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #5228f5ff;
          }
          .about-me-hero1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            min-height: auto;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: center;
          }
          .about-me-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-me-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .about-me-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-me-details {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-me-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-me-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .about-me-features1 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: flex-start;
          }
          .about-me-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-me-features-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-me-container3 {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .about-me-pricing {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-me-gallery {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-me-banner {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .about-me-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .about-me-faq-container {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .about-me-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .about-me-footer1 {
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
          .about-me-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-me-logo2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .about-me-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .about-me-nav12 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
          }
          .about-me-nav22 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .about-me-nav31 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .about-me-nav42 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .about-me-nav52 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .about-me-separator {
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
          .about-me-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-me-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-me-link3 {
            display: contents;
          }
          .about-me-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .about-me-icon12 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .about-me-link {
              color: var(--dl-color-gray-black);
              font-size: 2em;
              font-style: normal;
              font-family: Raleway;
              font-weight: 800;
              border-color: var(--dl-color-gray-black);
              border-width: 2px;
              text-transform: uppercase;
              text-decoration: none;
            }
            .about-me-hero1 {
              flex-direction: column;
            }
            .about-me-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .about-me-hero-heading {
              color: var(--dl-color-gray-white);
              text-align: center;
              font-family: Raleway;
              line-height: 1.6;
            }
            .about-me-features-heading {
              font-family: Raleway;
              line-height: 1.6;
            }
          }
          @media (max-width: 767px) {
            .about-me-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-me-desktop-menu {
              display: none;
            }
            .about-me-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .about-me-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-me-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-me-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-me-nav3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-me-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-me-nav51 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-me-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-me-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-me-container3 {
              grid-template-columns: 1fr;
            }
            .about-me-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .about-me-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-me-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .about-me-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .about-me-link {
              font-size: 1.5em;
            }
            .about-me-mobile-menu {
              padding: 16px;
            }
            .about-me-logo1 {
              font-size: 1.5em;
            }
            .about-me-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .about-me-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-me-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .about-me-btn-group {
              flex-direction: column;
            }
            .about-me-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .about-me-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .about-me-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-me-container5 {
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

export default AboutMe
