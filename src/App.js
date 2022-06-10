import * as React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  HomePage,
  BookmarkPage,
  ExplorePage,
  ListPage,
  MessagePage,
  NotificationPage,
  ProfilePage,
} from "./pages";
import { TestPickerLayout, TwitterWebLayout } from "./layouts";
import CONFIG from "./config";
import PageLoaderConfigs from "./pageloaders";

const DEFAULT_STATE = {
  lottieOption: CONFIG.LOTTIE_OPTIONS.Ease,
  pageLoaderOption: CONFIG.PAGE_LOADER_OPTIONS.Position,
};

export default function App() {
  const location = useLocation();

  const [activeLottieOption, setLottieOption] = React.useState(
    DEFAULT_STATE.lottieOption
  );
  const [activePageLoaderOption, setPageLoaderOption] = React.useState(
    DEFAULT_STATE.pageLoaderOption
  );

  const onLottieSelectCallback = (option) => {
    setLottieOption(option);
  };

  const onPageLoaderSelectCallback = (option) => {
    setPageLoaderOption(option);
  };

  const currentPageLoaderConfig = PageLoaderConfigs[activePageLoaderOption];

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/test"
          element={
            <TestPickerLayout
              activeLottieOption={activeLottieOption}
              activePageLoaderOption={activePageLoaderOption}
              onLottieSelectCallback={onLottieSelectCallback}
              onPageLoaderSelectCallback={onPageLoaderSelectCallback}
            />
          }
        />

        <Route
          path="/"
          element={<TwitterWebLayout pageLoaderConfig={currentPageLoaderConfig} activeLottieOption={activeLottieOption} />}
        >
          <Route
            index
            element={
              <HomePage pageLoaderConfig={currentPageLoaderConfig} slug={"/"} />
            }
          />

          <Route
            path="explore"
            element={
              <ExplorePage
                pageLoaderConfig={currentPageLoaderConfig}
                slug={"/explore"}
              />
            }
          />
          <Route
            path="bookmark"
            element={
              <BookmarkPage
                pageLoaderConfig={currentPageLoaderConfig}
                slug={"/bookmark"}
              />
            }
          />
          <Route
            path="lists"
            element={
              <ListPage
                pageLoaderConfig={currentPageLoaderConfig}
                slug={"/lists"}
              />
            }
          />
          <Route
            path="messages"
            element={
              <MessagePage
                pageLoaderConfig={currentPageLoaderConfig}
                slug={"/messages"}
              />
            }
          />
          <Route
            path="notifications"
            element={
              <NotificationPage
                pageLoaderConfig={currentPageLoaderConfig}
                slug={"/notifications"}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProfilePage
                pageLoaderConfig={currentPageLoaderConfig}
                slug={"/profile"}
              />
            }
          />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
