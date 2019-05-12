import { greeting } from '../index';

test('greeting', () => {
  expect(greeting('Carl')).toBe('Hello, Carl');
});