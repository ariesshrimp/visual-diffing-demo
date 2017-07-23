/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure } from "@storybook/react";

const req = require.context("../src/components", true, /story\.js$/);
const loadStories = req => () => req.keys().forEach(req);

configure(loadStories(req), module);

if (typeof window === "object")
  window.__storybook_stories__ = require("@storybook/react").getStorybook();
