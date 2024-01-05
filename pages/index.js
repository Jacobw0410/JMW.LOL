import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Our Single Oryx</title>
          <meta property="og:title" content="Our Single Oryx" />
        </Head>
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">Jacob White</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <Link href="/about-me">
                  <a className="home-link">About</a>
                </Link>
                <Link href="/projects">
                  <a className="home-link1">Projects</a>
                </Link>
                <Link href="/about-me">
                  <a className="home-link2">About Me</a>
                </Link>
                <Link href="/blog">
                  <a className="home-link3">Blog</a>
                </Link>
              </nav>
              <div className="home-buttons"></div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">COMPANY</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="home-links1">
                  <span className="home-nav11">About</span>
                  <span className="home-nav21">Projects</span>
                  <span className="home-nav3">Social Media</span>
                  <span className="home-nav41">About Me</span>
                  <span className="home-nav51">Blog</span>
                </nav>
                <div className="home-buttons1">
                  <button className="home-login button">Login</button>
                  <button className="home-register button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="home-hero">
          <h1 className="home-hero-heading heading1">About Me</h1>
          <span className="home-text">
            <br></br>
            <span>New Programmer Trying to Learn New Things.</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="home-btn-group"></div>
        </div>
        <div className="home-hero1"></div>
        <div className="home-details">
          <div className="home-details1">
            <div className="home-container1">
              <h2 className="home-details-heading heading2">About Me</h2>
              <span className="home-details-sub-heading">
                I am a skilled programmer and engineer with a passion for
                creating sleek and minimalist websites. With a focus on modern
                technology, I strive to incorporate techy photos into my designs
                to create visually stunning websites. Scroll through my
                portfolio to see examples of my work.
              </span>
            </div>
          </div>
        </div>
        <div className="home-features">
          <div className="home-features-container">
            <div className="home-features1">
              <div className="home-container2">
                <span className="home-text05 sectionTitle">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="home-features-heading heading2">
                  Photo Gallery Showcase
                </h2>
                <span className="home-features-sub-heading">
                  Personal and Team Visual Media Projects and Photos
                </span>
              </div>
              <div className="home-container3">
                <a
                  href="https://www.youtube.com/user/CRyptoniteRobotics"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FeatureCard
                    Heading="Video Projects"
                    SubHeading="Videos made using Premiere Pro and After Effects"
                    className="home-feature-card1"
                  ></FeatureCard>
                </a>
                <a
                  href="https://gallery.team624.org"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FeatureCard
                    Heading="Robotics Photos"
                    SubHeading="Photos I took during my time on FRC team 624 CRyptonite"
                    className="home-feature-card2"
                  ></FeatureCard>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <span className="home-text08">Jacob White</span>
          <h1 className="home-text09">Contact Me</h1>
          <span className="home-text10">
            <span>Email: Jacob@jmw.lol</span>
            <br></br>
            <span>Discord: JacobW624</span>
            <br></br>
            <span>Instagram:Jacob.white0407</span>
            <br></br>
          </span>
        </div>
        <div className="home-banner1">
          <div className="home-banner2">
            <h1 className="home-banner-heading heading2">
              Discover My Programming and Engineering Skills
            </h1>
            <span className="home-banner-sub-heading">
              Browse through my past projects and see my expertise in action.
            </span>
            <Link href="/projects">
              <a className="home-link6 button">View Projects</a>
            </Link>
          </div>
        </div>
        <div className="home-footer">
          <footer className="home-footer1">
            <div className="home-container4">
              <span className="home-logo2">
                <span>Jacob White</span>
                <br></br>
              </span>
              <nav className="home-nav1">
                <span className="home-nav12">About</span>
                <span className="home-nav22">Projects</span>
                <span className="home-nav31">Social Media</span>
                <span className="home-nav42">About Me</span>
                <span className="home-nav52">Blog</span>
              </nav>
            </div>
            <div className="home-separator"></div>
            <div className="home-container5">
              <div className="home-icon-group1">
                <a
                  href="https://www.instagram.com/jacob.white0407/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link7"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon12"
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
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #000000;
          }
          .home-navbar-interactive {
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
          .home-logo {
            color: var(--dl-color-gray-black);
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: uppercase;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .home-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link {
            transition: 0.3s;
            text-decoration: none;
          }
          .home-link:hover {
            color: #3d6e70ff;
          }
          .home-link1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link1:hover {
            color: #3d6e70ff;
          }
          .home-link2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link2:hover {
            color: #3d6e70ff;
          }
          .home-link3 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link3:hover {
            color: #3d6e70ff;
          }
          .home-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
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
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-nav11 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav21 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav3 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-nav51 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-login {
            border-color: #291477ff;
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
          }
          .home-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: #291477ff;
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
            background-color: #291477ff;
          }
          .home-register:hover {
            border-color: #849492ff;
            background-color: #849492ff;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(255, 255, 255) 0%,
                rgb(0, 0, 0) 100%
              ),
              url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&w=1500');
          }
          .home-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-text {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-btn-group {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-hero1 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #5228f5ff;
          }
          .home-details {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-details1 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-container1 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-details-heading {
            width: 80%;
            text-align: left;
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-details-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: left;
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .home-features1 {
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
          .home-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text05 {
            color: #5228f5ff;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-features-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .home-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-feature-card1 {
            text-decoration: none;
          }
          .home-feature-card2 {
            text-decoration: none;
          }
          .home-banner {
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
            background-image: url('https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fHx8MTYyNjE4NDA0Mg&ixlib=rb-1.2.1&w=1400');
            background-position: center;
          }
          .home-text08 {
            font-size: 0.75rem;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-twounits);
            letter-spacing: 2px;
          }
          .home-text09 {
            font-size: 3rem;
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text10 {
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-banner1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-banner2 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: var(--dl-size-size-maxwidth);
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-sixunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
            justify-content: flex-start;
          }
          .home-banner-heading {
            color: var(--dl-color-gray-white);
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .home-banner-sub-heading {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            text-align: center;
            line-height: 1.6;
          }
          .home-link6 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            font-weight: 700;
            padding-top: 1.5rem;
            border-width: 0px;
            padding-left: 3rem;
            border-radius: 45px;
            padding-right: 3rem;
            padding-bottom: 1.5rem;
            text-decoration: none;
            background-color: #291477ff;
          }
          .home-link6:hover {
            border-color: rgba(41, 20, 119, 0.9);
            background-color: rgba(41, 20, 119, 0.9);
          }
          .home-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-footer1 {
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
          .home-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-logo2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .home-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .home-nav12 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
          }
          .home-nav22 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav31 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav42 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-nav52 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .home-separator {
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
          .home-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link7 {
            display: contents;
          }
          .home-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-icon12 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .home-container {
              align-items: flex-end;
              justify-content: center;
            }
            .home-logo {
              color: var(--dl-color-gray-black);
              font-style: normal;
              font-family: Raleway;
              font-weight: 800;
              border-color: var(--dl-color-gray-black);
              border-width: 2px;
            }
            .home-hero {
              height: 656px;
              padding: var(--dl-space-space-halfunit);
              z-index: 100;
              align-self: flex-end;
              box-shadow: 5px 5px 10px 0px #d4d4d4;
              border-color: var(--dl-color-gray-black);
              border-width: 10px;
              border-radius: var(--dl-radius-radius-radius4);
              flex-direction: column;
              background-image: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHx3b3JrJTIwbGFwdG9wfGVufDB8fHx8MTYyNjE3NjkzMA&ixlib=rb-1.2.1&w=1500'),
                linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(0, 0, 0) 100%);
              background-repeat: center, top left;
              background-position: top left, center;
            }
            .home-hero-heading {
              color: var(--dl-color-gray-white);
              text-align: center;
              font-family: Raleway;
              line-height: 1.6;
            }
            .home-text {
              color: var(--dl-color-gray-white);
              text-align: center;
            }
            .home-details1 {
              background-color: #d9d9d9;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-features1 {
              background-color: #ffffff;
            }
            .home-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .home-text08 {
              font-size: 0.75rem;
              font-weight: 600;
              letter-spacing: 2px;
            }
            .home-text09 {
              font-size: 3rem;
            }
            .home-text10 {
              width: 100%;
            }
            .home-banner2 {
              height: 333px;
              background-color: #d9d9d9;
            }
            .home-banner-sub-heading {
              max-width: 100%;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-nav51 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-details1 {
              align-items: center;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
              justify-content: center;
            }
            .home-container1 {
              align-items: center;
              justify-content: flex-start;
            }
            .home-details-heading {
              text-align: center;
            }
            .home-details-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-container3 {
              grid-template-columns: 1fr;
            }
            .home-banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text10 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-banner2 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-banner-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .home-logo {
              font-size: 1.5em;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-logo1 {
              font-size: 1.5em;
            }
            .home-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .home-hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-btn-group {
              flex-direction: column;
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-banner {
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-banner2 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .home-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container5 {
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

export default Home
