import Page from "./Page";

const ProfilePage = ({ pageLoaderConfig, slug }) => {
  return (
    <Page slug={slug} pageLoaderConfig={pageLoaderConfig}>
      <article>
        <h1>ProfilePage</h1>
      </article>
    </Page>
  );
};

export default ProfilePage;
