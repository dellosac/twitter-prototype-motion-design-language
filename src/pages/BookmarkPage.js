import Page from "./Page";

const BookmarkPage = ({ pageLoaderConfig, slug }) => {
  return (
    <Page slug={slug} pageLoaderConfig={pageLoaderConfig}>
      <article>
        <h1>BookmarkPage</h1>
      </article>
    </Page>
  );
};

export default BookmarkPage;
