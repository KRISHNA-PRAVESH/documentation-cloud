import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function HomeFun() {
    const {siteConfig} = useDocusaurusContext();
    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <h1>Releases page</h1>
      </Layout>
    );
  }