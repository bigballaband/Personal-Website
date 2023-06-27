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
        <p>Hello, my name is Thomas Thangarajah and I am a second year university student at the University of Waterloo. I am currently in the 
          Math program. You can find my links and personal projects below!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}> 
      <h2 className={utilStyles.headingLg}>Links: </h2>
      <h5><a href="https://www.linkedin.com/in/thomas-thangarajah-25b690208/">Linkedln</a></h5>
      <h5><a href="https://github.com/bigballaband">Github</a></h5>
      <h5>Instagram: @darealbigballaband</h5>
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
