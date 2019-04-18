import YML from 'js-yaml';

const parsers = {
  '.json': JSON.parse,
  '.yml': YML.safeLoad,
};

export default (data, type) => parsers[type](data);
