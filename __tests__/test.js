import fs from 'fs';
import gendiff from '../src';

describe('gendiff', () => {
  test('Json', () => {
    const filePathBefore = './__tests__/__fixtures__/json/before.json';
    const filePathAfter = './__tests__/__fixtures__/json/after.json';
    const fileExpected = fs.readFileSync('./__tests__/__fixtures__/expected', 'utf-8');

    expect(gendiff(filePathBefore, filePathAfter)).toEqual(fileExpected);
  });

  test('YAML', () => {
    const filePathBefore = './__tests__/__fixtures__/yml/before.yml';
    const filePathAfter = './__tests__/__fixtures__/yml/after.yml';
    const fileExpected = fs.readFileSync('./__tests__/__fixtures__/expected', 'utf-8');

    expect(gendiff(filePathBefore, filePathAfter)).toEqual(fileExpected);
  });
});
