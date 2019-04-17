import fs from 'fs';
import _ from 'lodash';

const dataComparator = (data1, data2) => Object.entries(data2).reduce((acc, [key, value]) => {
  if (_.has(data1, key)) {
    return acc.concat(value === data1[key] ? `  ${key}: ${value}` : `+ ${key}: ${value}\n- ${key}: ${data1[key]}`);
  }
  return acc.concat(`+ ${key}: ${value}`);
}, ['{']).concat(['}']).join('\n');

const gendiff = (filePath1, filePath2, format) => {
  const file1Content = fs.readFileSync(filePath1, 'utf-8');
  const file2Content = fs.readFileSync(filePath2, 'utf-8');
  const json1 = JSON.parse(file1Content);
  const json2 = JSON.parse(file2Content);

  return dataComparator(json1, json2);
};

export default gendiff;
