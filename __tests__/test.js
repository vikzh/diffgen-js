import fs from 'fs';
import gendiff from '../src';

describe('gendiff', () => {
  const fileExpected = fs.readFileSync('./__tests__/__fixtures__/expected', 'utf-8');
  const flatJson = ['./__tests__/__fixtures__/json/before.json', './__tests__/__fixtures__/json/after.json', fileExpected];
  const flatYaml = ['./__tests__/__fixtures__/yml/before.yml', './__tests__/__fixtures__/yml/after.yml', fileExpected];
  const flatIni = ['./__tests__/__fixtures__/ini/before.ini', './__tests__/__fixtures__/ini/after.ini', fileExpected];

  const fileNestedExpected = fs.readFileSync('./__tests__/__fixtures__/nested_expected', 'utf-8');
  const fileJsonExpected = fs.readFileSync('./__tests__/__fixtures__/json-nested-expected', 'utf-8');
  const filePlainNestedExpected = fs.readFileSync('./__tests__/__fixtures__/plain-nested-expected', 'utf-8');

  const nestedJson = ['./__tests__/__fixtures__/json/nested_before.json', './__tests__/__fixtures__/json/nested_after.json', fileNestedExpected];

  test.each([flatJson, flatYaml, flatIni])(
    '.files(%s, %s)', (firstFile, secondFile, expectedFile) => {
      expect(gendiff(firstFile, secondFile, 'tree')).toEqual(expectedFile);
    },
  );

  test.each([nestedJson])(
    '.files(%s, %s)', (firstFile, secondFile, expectedFile) => {
      expect(gendiff(firstFile, secondFile, 'tree')).toEqual(expectedFile);
    },
  );

  test.each([nestedJson])(
    '.files(%s, %s)', (firstFile, secondFile) => {
      expect(gendiff(firstFile, secondFile, 'json')).toEqual(fileJsonExpected);
    },
  );

  test.each([nestedJson])(
    '.files(%s, %s)', (firstFile, secondFile) => {
      expect(gendiff(firstFile, secondFile, 'plain')).toEqual(filePlainNestedExpected);
    },
  );
});
