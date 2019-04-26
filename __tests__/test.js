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
});
