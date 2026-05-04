const {
  withNativeFederation,
  shareAll,
  DEFAULT_SKIP_LIST,
} = require("@angular-architects/native-federation/config");

const debugSharedSource = process.env.DEBUG_SHARED_SOURCE === "true";
const skip = [
  ...DEFAULT_SKIP_LIST,
  "rxjs/ajax",
  "rxjs/fetch",
  "rxjs/testing",
  "rxjs/webSocket",
  ...(debugSharedSource ? ["mf-shared-core"] : []),
];

module.exports = withNativeFederation({
  name: "host",

  shared: {
    ...shareAll(
      {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
      },
      skip
    ),

    ...(debugSharedSource
      ? {}
      : {
          "mf-shared-core": {
            singleton: true,
            strictVersion: true,
            requiredVersion: "auto",
          },
        }),
  },

  skip,

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});
