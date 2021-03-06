import React from 'react';
import Helmet from 'react-helmet';

import GitHubCalendar from 'react-github-calendar';
import Layout from '../components/layout';
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery';
// import Navbar from '../components/Navbar';

import thumb01 from '../assets/images/thumbs/01.png';
import thumb02 from '../assets/images/thumbs/02.png';
import thumb03 from '../assets/images/thumbs/03.png';
import thumb04 from '../assets/images/thumbs/04.png';
import thumb05 from '../assets/images/thumbs/05.jpg';
import thumb06 from '../assets/images/thumbs/06.jpg';

const DEFAULT_IMAGES = [
  {
    id: '1',
    thumbnail: thumb01,
    caption: 'Rocksmith Web App',
    description1:
      'Profile for players | player stats | Store information on platform, instrument and bio ',
    url: 'https://github.com/tobsirl/rocksmithwebapp',
  },
  {
    id: '2',
    thumbnail: thumb02,
    caption: 'Guitar Store',
    description1:
      'Responsive web design – developed for desktop, tablet and mobile',
    url: 'https://github.com/tobsirl/GuitarStore',
  },
  {
    id: '3',
    thumbnail: thumb03,
    caption: 'Gatsby Personal Website',
    description1:
      'GatsbyJS Portfolio Website Using CircleCI and deployed with AWS Amplify',
    url: 'https://github.com/tobsirl/GatsbyJS-Personal-site',
  },
  {
    id: '4',
    thumbnail: thumb04,
    caption: 'Emerald Isle Tours ',
    description1:
      'Feature Rich API including filters, sorts, pagination. Developed using Node.js / Express.js, MongoDB Atlas and Mongoose',
    url: 'https://github.com/tobsirl/Emerald-Isle-Tours',
  },
  // {
  //   id: '4',
  //   thumbnail: thumb04,
  //   caption: 'Warcraft III: Reforged Save Replays',
  //   description1:
  //     'Developed a GraphQL API with Node.js / Express.js server using MongoDB Atlas',
  //   url: 'https://github.com/tobsirl/Warcraft3-Reforged-Backend',
  // },
  // {
  //   id: '5',
  //   source: full05,
  //   thumbnail: thumb05,
  //   caption: 'Photo 5',
  //   description1: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
  // {
  //   id: '6',
  //   source: full06,
  //   thumbnail: thumb06,
  //   caption: 'Photo 6',
  //   description1: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  // },
];

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Paul Tobin - Portfolio Site';
    const siteDescription = 'Gatsby Personal Website';

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            {/* <Navbar /> */}
            <header className="major">
              <h2>
                Graduate with M.Sc. in Computing (Enterprise System Software)
                from Waterford Institute of Technology.
              </h2>
            </header>
            <p>
              I’m self-motivated and enjoy learning new technologies, such as
              GraphQL and React hooks.
              {' '}
              <br />
              Recently Certified as a AWS
              Certified Cloud Practitioner & AWS Certified Developer – Associate.
              {' '}
              <br />
              {' '}
              Currently learning TypeScript.
              {' '}
              <br />

            </p>


            <div
              data-iframe-width="150"
              data-iframe-height="270"
              data-share-badge-id="74e0fb6f-61e7-4952-a0f3-020fe2ffbc05"
              data-share-badge-host="https://www.youracclaim.com"
            />
            <script
              type="text/javascript"
              async
              src="//cdn.youracclaim.com/assets/utilities/embed.js"
            />
            <ul className="actions">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tobsirl-bucket.s3-eu-west-1.amazonaws.com/Paul+Tobin+CV.pdf"
                  className="button"
                >
                  Curriculum Vitae
                </a>
              </li>
            </ul>
            <h2>Certifications</h2>
            <a className="badges" href="https://www.youracclaim.com/badges/f87df97c-8c00-4ba5-b077-5ce30101bff2/public_url">
              <img
                src="https://tobsirl-bucket.s3-eu-west-1.amazonaws.com/aws-certified-cloud-practitioner.png"
                alt="aws-certified-cloud-practitioner"
              />
            </a>
            <a className="badges" href="https://www.youracclaim.com/badges/91819f65-18b1-48c5-a606-39c8dfd45566/public_url">
              <img
                src="https://tobsirl-bucket.s3-eu-west-1.amazonaws.com/aws-certified-developer-associate.png"
                alt="aws-certified-developer-associate"
              />
            </a>
          </section>

          <h2>GitHub Activity</h2>
          <GitHubCalendar username="tobsirl" />
          <ul className="actions">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tobsirl"
                className="button"
              >
                GitHub Portfolio
              </a>
            </li>
          </ul>

          <section id="two">
            <h2>Personal Projects</h2>
            <p>Below you&apos;ll find a selection of my GitHub Projects</p>
            <Gallery
              images={DEFAULT_IMAGES.map(
                ({
                  source, thumbnail, caption, description1, url,
                }) => ({
                  source,
                  thumbnail,
                  caption,
                  description1,
                  url,
                }),
              )}
            />
          </section>

          {/* <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section> */}
        </div>
      </Layout>
    );
  }
}

export default HomeIndex;
