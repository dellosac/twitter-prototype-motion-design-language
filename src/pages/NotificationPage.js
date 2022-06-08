import Page from "./Page";

const NotificationPage = ({ pageLoaderConfig, slug }) => {
  return (
    <Page slug={slug} pageLoaderConfig={pageLoaderConfig}>
      <article>
        <h1>NotificationPage</h1>
      </article>
    </Page>
  );
};

export default NotificationPage;