const COMPONENT_ANIMATIONS = {
  SidebarLeft: {
    logo: {
      translateY: false
    },
    SidebarNavigation: {
      children: true
    },
    tweetCTA: {
      translateY: false
    },
    profileDock: {
      translateY: false
    }
  },
  SidebarRight: {
    searchBar: {
      translateY: false
    },
    whatsHappening: {
      children: true,
      offset: 1,
      translateY: false
    },
    whoToFollow: {
      children: true,
      offset: 1,
      translateY: false
    }
  },
  Home: {
    tweetComposer: {
      opacity: false
    },
    tweetsWrapper: {
      children: true
    }
  }
};

export default COMPONENT_ANIMATIONS;