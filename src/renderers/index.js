import tree from './simpleTree';
import json from './json';
import plain from './plain';

const renders = {
  tree,
  json,
  plain,
};

export default type => renders[type];
