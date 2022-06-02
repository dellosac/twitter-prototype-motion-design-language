import { Fragment } from "react";
import { useResolvedPath, useMatch } from 'react-router-dom';

import { Transition } from "../components";

const Page = ({ pageLoaderConfig, slug, children }) => {
  let resolved = useResolvedPath(slug);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Fragment>
      <Transition isActive={match} animationConfiguration={pageLoaderConfig}>
        {children}
      </Transition>
    </Fragment>
  );
};

export default Page;
