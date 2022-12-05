// @ts-nocheck
import React from "react";
import { GlobalStyles } from "twin.macro";
import { Global } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

const cache = createCache({ prepend: true, key: "twin" });

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
};

export const decorators = [
  (Story) => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Global />
      <Story />
    </CacheProvider>
  ),
];
