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
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, my name is Thomas Thangarajah and I am entering my third-year at the University of Waterloo. I am currently enrolled in Computational Math and Statistics double major and am looking for an internship for summer 2025. Check out my personal projects and links below!
        </p>
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Links:</h2>
        <h4>
          <a href="https://www.linkedin.com/in/thomas-thangarajah-25b690208/">Linkedln</a>
          <br />
          <a href="https://github.com/bigballaband">Github</a>
          <br />
          <a href="https://leetcode.com/bigballaband/">Leetcode</a>
          <br />
          <a href="https://www.instagram.com/darealbigballaband/">Instagram</a>
        </h4> 
      </section>
    </Layout>
  );
}

