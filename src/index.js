import fs from 'fs';
import path from 'path';
import getRender from './renders';
import parser from './parsers';
import makeAst from './ast';

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
