import fs from 'fs';
import gendiff from '../src';

describe('gendiff', () => {
  const fileExpected = fs.readFileSync('./__tests__/__fixtures__/expected', 'utf-8');
  const flatJson = ['./__tests__/__fixtures__/json/before.json', './__tests__/__fixtures__/json/after.json', fileExpected];
  const flatYaml = ['./__tests__/__fixtures__/yml/before.yml', './__tests__/__fixtures__/yml/after.yml', fileExpected];
  const flatIni = ['./__tests__/__fixtures__/ini/before.ini', './__tests__/__fixtures__/ini/after.ini', fileExpected];

  test.each([flatJson, flatYaml, flatIni])(
    '.files(%s, %s)', (firstFile, secondFile, expectedFile) => {
      expect(gendiff(firstFile, secondFile)).toEqual(expectedFile);
    },
  );
});
