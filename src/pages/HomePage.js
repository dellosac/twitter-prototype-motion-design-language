import Page from "./Page";

const HomePage = ({ pageLoaderConfig, slug }) => {
  return (
    <Page slug={slug} pageLoaderConfig={pageLoaderConfig}>
      <article>
        <h1>HomePage</h1>
      </article>
    </Page>
  );
};

export default HomePage;
