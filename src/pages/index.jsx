import Head from 'next/head';

import CategoryTabs from '../components/category-tabs/category-tabs.component';
import Contacts from '../components/contacts/contacts.component';
import Footer from '../components/footer/footer.component';
import Headline from '../components/headline/headline.component';
import Products from '../components/products/products.component';
import SpanbondDescription from '../components/spanbond-description/spanbond-description.component';

import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>UBD-Group</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Headline />
      <SpanbondDescription />
      <Products />
      <CategoryTabs />
      <Contacts />
      <Footer /> */}
    </div>
  )
}

export default Home;
