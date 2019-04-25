import tree from './simpleTree';
import json from './json';

const renders = {
  tree,
  json,
};

export default type => renders[type];
