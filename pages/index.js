import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <style type="text/css" media="screen">
        {`
        body {
          margin: 0;
          padding: 0;
        }

        div#banner {
          position: absolute;
          top: 0;
          left: 0;
          background-color: #DDEEEE;
          width: 100%;
        }

        div#banner-content {
          width: 800px;
          margin: 0 auto;
          padding: 10px;
          border: 1px solid #000;
        }

        div#main-content {
          padding-top: 70px;
        }
        `}
      </style>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Thomas Thangarajah and I am a second-year university student at the University of Waterloo. I am currently in the Math program. You can find my links and personal projects below!
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Links:</h2>
        <h5>
          <a href="https://www.linkedin.com/in/thomas-thangarajah-25b690208/">Linkedln</a>
          <br />
          <a href="https://github.com/bigballaband">Github</a>
          <br />
          <a href="https://www.instagram.com/darealbigballaband/">Instagram</a>
        </h5>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Personal Projects:</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

