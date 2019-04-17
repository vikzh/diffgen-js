import fs from 'fs';
import gendiff from '../src';

describe('gendiff', () => {
  test('Json', () => {
    const filePathBefore = './__tests__/__fixtures__/before.json';
    const filePathAfter = './__tests__/__fixtures__/after.json';
    const fileExpected = fs.readFileSync('./__tests__/__fixtures__/json-expected', 'utf-8');

    expect(gendiff(filePathBefore, filePathAfter)).toEqual(fileExpected);
  });
});
