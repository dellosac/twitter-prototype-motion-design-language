import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { HomePage, BookmarkPage, ExplorePage, ListPage, MessagePage, NotificationPage, ProfilePage } from "./pages";
import { TestPickerLayout, TwitterWebLayout } from "./layouts";
import CONFIG from "./config";

const DEFAULT_STATE = {
  lottieOption: CONFIG.LOTTIE_OPTIONS.Ease,
  pageLoaderOption: CONFIG.PAGE_LOADER_OPTIONS.Position,
};

export default function App() {
  const [activeLottieOption, setLottieOption] = React.useState(
    DEFAULT_STATE.lottieOption
  );
  const [activePageLoaderOption, setPageLoaderOption] = React.useState(
    DEFAULT_STATE.pageLoaderOption
  );

  const onLottieSelectCallback = (option) => {
    setLottieOption(option);
  }

  return (
    <Routes>
      <Route
        path="/test"
        element={
          <TestPickerLayout
            activeLottieOption={activeLottieOption}
            activePageLoaderOption={activePageLoaderOption}
            onLottieSelectCallback={onLottieSelectCallback}
          />
        }
      />
      <Route path="/" element={<TwitterWebLayout activeLottieOption={activeLottieOption} />}>
        <Route index element={<HomePage />} />
        <Route path="bookmark" element={<BookmarkPage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="lists" element={<ListPage />} />
        <Route path="messages" element={<MessagePage />} />
        <Route path="notifications" element={<NotificationPage />} />
        <Route path="profile" element={<ProfilePage />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
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
