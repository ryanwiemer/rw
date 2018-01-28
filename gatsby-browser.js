// Scrolling improvements as suggested by @dsbrianwebster
// See https://github.com/ryanwiemer/rw/issues/1

exports.onRouteUpdate = args => {
  if (typeof window !== 'undefined' && args.action == "PUSH") {
    window.scrollTo(0, 0)
  }
}

exports.shouldUpdateScroll = args => {
  return (
    args.prevRouterProps == null ||
    (args.prevRouterProps && args.prevRouterProps.history.action == "POP")
  ) ? true : false;
};
