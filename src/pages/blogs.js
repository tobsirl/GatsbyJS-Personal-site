import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';

import thumb01 from '../assets/images/thumbs/01.png';
import thumb02 from '../assets/images/thumbs/02.png';

const blogposts = [
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
];

const blogs = () => (
  <Layout>
    <div id="main">
      <section id="one">
        <Navbar />
        <header className="major">
          <p>List of blog posts</p>
        </header>
      </section>
      <section id="two">
        <h2>Blog posts</h2>
        <p>Below you&apos;ll find a selection of my GitHub Projects</p>
        <Gallery
          images={blogposts.map(
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
    </div>
  </Layout>
);

export default blogs;
