import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import FeatureCard from '../components/feature-card'

const Projects = (props) => {
  return (
    <>
      <div className="projects-container">
        <Head>
          <title>Projects - Our Single Oryx</title>
          <meta property="og:title" content="Projects - Our Single Oryx" />
        </Head>
        <div className="projects-header">
          <header data-thq="thq-navbar" className="projects-navbar-interactive">
            <Link href="/">
              <a className="projects-link">Jacob White</a>
            </Link>
            <div data-thq="thq-navbar-nav" className="projects-desktop-menu">
              <nav className="projects-links">
                <span>About</span>
                <span className="projects-nav2">Projects</span>
                <span className="projects-nav4">About Me</span>
                <span className="projects-nav5">Blog</span>
              </nav>
              <div className="projects-buttons"></div>
            </div>
            <div data-thq="thq-burger-menu" className="projects-burger-menu">
              <svg viewBox="0 0 1024 1024" className="projects-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="projects-mobile-menu">
              <div className="projects-nav">
                <div className="projects-top">
                  <span className="projects-logo1">COMPANY</span>
                  <div
                    data-thq="thq-close-menu"
                    className="projects-close-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="projects-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="projects-links1">
                  <span className="projects-nav11">About</span>
                  <span className="projects-nav21">Projects</span>
                  <span className="projects-nav3">Social Media</span>
                  <span className="projects-nav41">About Me</span>
                  <span className="projects-nav51">Blog</span>
                </nav>
                <div className="projects-buttons1">
                  <button className="projects-login button">Login</button>
                  <button className="projects-register button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="projects-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="projects-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="projects-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="projects-hero">
          <div className="projects-hero1">
            <div className="projects-container1">
              <h1 className="projects-hero-heading heading1">Projects</h1>
              <div className="projects-btn-group"></div>
            </div>
          </div>
        </div>
        <div className="projects-details"></div>
        <div className="projects-features">
          <div className="projects-features-container">
            <div className="projects-features1">
              <div className="projects-container2">
                <span className="projects-text sectionTitle">
                  <span>features</span>
                  <br></br>
                </span>
                <h2 className="projects-features-heading heading2">
                  Photo Gallery Showcase
                </h2>
                <span className="projects-features-sub-heading">
                  Personal and Team Visual Media Projects and Photos
                </span>
              </div>
              <div className="projects-container3">
                <a
                  href="https://github.com/RohanP1506/Crypto-Converter"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FeatureCard
                    Heading="Crypto Comparer"
                    SubHeading="Compares Different Crypto Currencies"
                    className="projects-feature-card1"
                  ></FeatureCard>
                </a>
                <FeatureCard
                  Heading="Video Projects"
                  SubHeading="Videos made using Premiere Pro and After Effects"
                  className="projects-feature-card11"
                ></FeatureCard>
              </div>
            </div>
          </div>
        </div>
        <div className="projects-pricing"></div>
        <div className="projects-gallery"></div>
        <div className="projects-banner"></div>
        <div className="projects-faq">
          <div className="projects-faq-container"></div>
        </div>
        <div className="projects-footer">
          <footer className="projects-footer1">
            <div className="projects-container4">
              <span className="projects-logo2">
                <span>Jacob White</span>
                <br></br>
              </span>
              <nav className="projects-nav1 projects-nav1">
                <span className="projects-nav12">About</span>
                <span className="projects-nav22">Projects</span>
                <span className="projects-nav31">Social Media</span>
                <span className="projects-nav42">About Me</span>
                <span className="projects-nav52">Blog</span>
              </nav>
            </div>
            <div className="projects-separator"></div>
            <div className="projects-container5">
              <div className="projects-icon-group1">
                <a
                  href="https://www.instagram.com/jacob.white0407/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="projects-link2"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="projects-icon10"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="projects-icon12"
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
          .projects-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .projects-header {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #5228f5ff;
          }
          .projects-navbar-interactive {
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
          .projects-link {
            color: var(--dl-color-gray-black);
            font-size: 2em;
            font-family: 'Lato';
            font-weight: bold;
            text-transform: uppercase;
            text-decoration: none;
          }
          .projects-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .projects-links {
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .projects-nav1 {
            transition: 0.3s;
          }
          .projects-nav1:hover {
            color: #3d6e70ff;
          }
          .projects-nav2 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .projects-nav2:hover {
            color: #3d6e70ff;
          }
          .projects-nav4 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .projects-nav4:hover {
            color: #3d6e70ff;
          }
          .projects-nav5 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
          }
          .projects-nav5:hover {
            color: #3d6e70ff;
          }
          .projects-buttons {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .projects-burger-menu {
            display: none;
          }
          .projects-icon {
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .projects-mobile-menu {
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
          .projects-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .projects-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .projects-logo1 {
            font-size: 2em;
            font-weight: bold;
          }
          .projects-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects-icon02 {
            fill: var(--dl-color-gray-900);
            width: var(--dl-size-size-xsmall);
            cursor: pointer;
            height: var(--dl-size-size-xsmall);
          }
          .projects-links1 {
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .projects-nav11 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects-nav21 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects-nav3 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects-nav41 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects-nav51 {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-unit);
          }
          .projects-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .projects-login {
            border-color: #291477ff;
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
          }
          .projects-register {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            border-color: #291477ff;
            border-width: 1px;
            padding-left: 1.5rem;
            border-radius: 30px;
            padding-right: 1.5rem;
            background-color: #291477ff;
          }
          .projects-register:hover {
            border-color: #849492ff;
            background-color: #849492ff;
          }
          .projects-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .projects-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .projects-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .projects-hero {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            background-color: #5228f5ff;
          }
          .projects-hero1 {
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
          .projects-container1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-hero-heading {
            color: var(--dl-color-gray-white);
            max-width: 800px;
            text-align: center;
            font-family: 'Raleway';
            line-height: 1.6;
          }
          .projects-btn-group {
            gap: var(--dl-space-space-oneandhalfunits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .projects-details {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects-features {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects-features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-secondary-grey400);
          }
          .projects-features1 {
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
          .projects-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-text {
            color: #5228f5ff;
            font-family: 'Raleway';
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .projects-features-heading {
            font-family: 'Raleway';
            line-height: 1.6;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .projects-features-sub-heading {
            color: var(--dl-color-gray-800);
            font-size: 18px;
            text-align: center;
            line-height: 1.6;
          }
          .projects-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .projects-feature-card1 {
            text-decoration: none;
          }
          .projects-feature-card11 {
            text-decoration: none;
          }
          .projects-pricing {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects-gallery {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects-banner {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .projects-faq {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projects-faq-container {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .projects-footer {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .projects-footer1 {
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
          .projects-container4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .projects-logo2 {
            color: var(--dl-color-gray-white);
            font-size: 2em;
            font-weight: bold;
          }
          .projects-nav1 {
            flex: 0 0 auto;
            display: flex;
            margin-top: 0px;
            align-items: center;
            flex-direction: row;
          }
          .projects-nav12 {
            color: var(--dl-color-secondary-gray500);
            margin-left: 0px;
          }
          .projects-nav22 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .projects-nav31 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .projects-nav42 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .projects-nav52 {
            color: var(--dl-color-secondary-gray500);
            margin-left: var(--dl-space-space-unit);
          }
          .projects-separator {
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
          .projects-container5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .projects-icon-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .projects-link2 {
            display: contents;
          }
          .projects-icon10 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .projects-icon12 {
            fill: var(--dl-color-secondary-gray500);
            width: 24px;
            height: 24px;
          }
          @media (max-width: 991px) {
            .projects-link {
              color: var(--dl-color-gray-black);
              font-style: normal;
              font-family: Raleway;
              font-weight: 800;
              border-color: var(--dl-color-gray-black);
              border-width: 2px;
            }
            .projects-hero1 {
              flex-direction: column;
            }
            .projects-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .projects-hero-heading {
              color: var(--dl-color-gray-white);
              text-align: center;
              font-family: Raleway;
              line-height: 1.6;
            }
            .projects-features-sub-heading {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .projects-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-desktop-menu {
              display: none;
            }
            .projects-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .projects-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .projects-nav11 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects-nav21 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects-nav3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects-nav41 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects-nav51 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects-hero1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-features-sub-heading {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .projects-container3 {
              grid-template-columns: 1fr;
            }
            .projects-footer1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .projects-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .projects-container5 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .projects-navbar-interactive {
              width: 90%;
              padding: var(--dl-space-space-unit);
            }
            .projects-link {
              font-size: 1.5em;
            }
            .projects-mobile-menu {
              padding: 16px;
            }
            .projects-logo1 {
              font-size: 1.5em;
            }
            .projects-icon02 {
              fill: var(--dl-color-gray-900);
            }
            .projects-hero1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .projects-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .projects-btn-group {
              flex-direction: column;
            }
            .projects-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .projects-footer1 {
              padding: var(--dl-space-space-unit);
            }
            .projects-separator {
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .projects-container5 {
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

export default Projects
