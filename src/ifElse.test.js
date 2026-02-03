'use strict';

const ifElse = require('./ifElse');

test('calls condition callback', () => {
  const condition = jest.fn(() => true);
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(condition).toHaveBeenCalled();
});

test('calls first callback when condition returns true', () => {
  const condition = jest.fn(() => true);
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(first).toHaveBeenCalled();
  expect(second).not.toHaveBeenCalled();
});

test('calls second callback when condition returns false', () => {
  const condition = jest.fn(() => false);
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(second).toHaveBeenCalled();
  expect(first).not.toHaveBeenCalled();
});

test('callbacks are called without arguments', () => {
  const condition = jest.fn(() => true);
  const first = jest.fn();
  const second = jest.fn();

  ifElse(condition, first, second);

  expect(first).toHaveBeenCalledWith();
  expect(condition).toHaveBeenCalledWith();
});

test('returns nothing', () => {
  const condition = jest.fn(() => false);
  const first = jest.fn();
  const second = jest.fn();

  const result = ifElse(condition, first, second);

  expect(result).toBeUndefined();
});
