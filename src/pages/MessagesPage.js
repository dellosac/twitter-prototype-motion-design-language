import Page from "./Page";

const MessagesPage = ({ pageLoaderConfig, slug }) => {
  return (
    <Page slug={slug} pageLoaderConfig={pageLoaderConfig}>
      <article>
        <h1>MessagesPage</h1>
      </article>
    </Page>
  );
};

export default MessagesPage;
