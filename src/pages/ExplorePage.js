import Page from "./Page";

const ExplorePage = ({ pageLoaderConfig, slug }) => {
  return (
    <Page slug={slug} pageLoaderConfig={pageLoaderConfig}>
      <article>
        <h1>ExplorePage</h1>
      </article>
    </Page>
  );
};

export default ExplorePage;
