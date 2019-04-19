import YML from 'js-yaml';
import INI from 'ini';

const parsers = {
  '.json': JSON.parse,
  '.yml': YML.safeLoad,
  '.ini': INI.parse,
};

export default (data, type) => parsers[type](data);
