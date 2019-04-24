import fs from 'fs';
import path from 'path';
import getRender from './renders';
import parser from './parsers';
import makeAst from './ast';

// const dataComparator = (data1, data2) => {
//   const data1ToData2 = Object.entries(data1).reduce((acc, [key, value]) => {
//     if (_.has(data2, key)) {
//       if (value === data2[key]) {
//         acc.push(`    ${key}: ${value}`);
//       } else {
//         acc.push(`  + ${key}: ${data2[key]}`);
//         acc.push(`  - ${key}: ${value}`);
//       }
//       return acc;
//     }
//     acc.push(`  - ${key}: ${value}`);
//     return acc;
//   }, []);
//
//   const data2ToData1 = Object.entries(data2).reduce((acc, [key]) => {
//     if (!_.has(data1, key)) {
//       return acc.concat(`  + ${key}: ${data2[key]}`);
//     }
//     return acc;
//   }, []);
//
//   return ['{', ...data1ToData2, ...data2ToData1, '}'].join('\n');
// };

const gendiff = (filePath1, filePath2, format) => {
  const beforeContent = fs.readFileSync(filePath1, 'utf-8');
  const afterContent = fs.readFileSync(filePath2, 'utf-8');

  const file1Extension = path.extname(filePath1);
  const file2Extension = path.extname(filePath2);

  const data1 = parser(beforeContent, file1Extension);
  const data2 = parser(afterContent, file2Extension);

  const ast = makeAst(data1, data2);
  const render = getRender(format);

  return render(ast);
};

export default gendiff;
