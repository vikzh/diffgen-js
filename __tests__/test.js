import fs from 'fs';
import gendiff from '../src';

describe('gendiff', () => {
  const simpleExpected = fs.readFileSync('./__tests__/__fixtures__/simple-expected', 'utf-8');
  const plainExpected = fs.readFileSync('./__tests__/__fixtures__/plain-expected', 'utf-8');

  const pathToJsonBefore = './__tests__/__fixtures__/json/before.json';
  const pathToJsonAfter = './__tests__/__fixtures__/json/after.json';

  const pathToYamlBefore = './__tests__/__fixtures__/yml/before.yml';
  const pathToYamlAfter = './__tests__/__fixtures__/yml/after.yml';

  const pathToIniBefore = './__tests__/__fixtures__/ini/before.ini';
  const pathToIniAfter = './__tests__/__fixtures__/ini/after.ini';

  const simpleFiles = [
    [pathToJsonBefore, pathToJsonAfter],
    [pathToIniBefore, pathToIniAfter],
    [pathToYamlBefore, pathToYamlAfter],
  ];

  const simpleNestedExpected = fs.readFileSync('./__tests__/__fixtures__/simple-nested-expected', 'utf-8');
  const plainNestedExpected = fs.readFileSync('./__tests__/__fixtures__/plain-nested-expected', 'utf-8');
  const jsonNestedExpected = fs.readFileSync('./__tests__/__fixtures__/json-nested-expected', 'utf-8');

  const pathToNestedJsonBefore = './__tests__/__fixtures__/json/nested-before.json';
  const pathToNestedJsonAfter = './__tests__/__fixtures__/json/nested-after.json';

  const pathToNestedYamlBefore = './__tests__/__fixtures__/yml/nested-before.yml';
  const pathToNestedYamlAfter = './__tests__/__fixtures__/yml/nested-after.yml';

  const pathToNestedIniBefore = './__tests__/__fixtures__/ini/nested-before.ini';
  const pathToNestedIniAfter = './__tests__/__fixtures__/ini/nested-after.ini';

  const nestedFiles = [
    [pathToNestedJsonBefore, pathToNestedJsonAfter],
    [pathToNestedIniBefore, pathToNestedIniAfter],
    [pathToNestedYamlBefore, pathToNestedYamlAfter],
  ];

  test.each(simpleFiles)(
    'simple format, simple files .files(%s, %s)', (firstFile, secondFile) => {
      expect(gendiff(firstFile, secondFile, 'tree')).toEqual(simpleExpected);
    },
  );

  test.each(simpleFiles)(
    'plain format, simple files .files(%s, %s)', (firstFile, secondFile) => {
      expect(gendiff(firstFile, secondFile, 'plain')).toEqual(plainExpected);
    },
  );

  test.each(nestedFiles)(
    'simple format, nested files .files(%s, %s)', (firstFile, secondFile) => {
      expect(gendiff(firstFile, secondFile, 'tree')).toEqual(simpleNestedExpected);
    },
  );

  test.each(nestedFiles)(
    'plain format, simple files .files(%s, %s)', (firstFile, secondFile) => {
      expect(gendiff(firstFile, secondFile, 'plain')).toEqual(plainNestedExpected);
    },
  );

  test.each(nestedFiles)(
    'json format, simple files .files(%s, %s)', (firstFile, secondFile) => {
      expect(gendiff(firstFile, secondFile, 'json')).toEqual(jsonNestedExpected);
    },
  );
});
