import { expect, test } from 'vitest';

import { getSum } from './cumulativeSum';
import { search } from './binarySearch';
import { LRU } from './lru';

test('cumulative sum of an array', () => {
    expect(getSum([1, 3, 5, 7])).toBe(16);
    expect(getSum([-2, -4, -8])).toBe(-14);
});

test('binary search', () => {
    expect(search([0,1,2,3,4,5,6,7,8], 7)).toBe(7);
});

test('lru', () => {
    const cache = new LRU(5);
    cache.putItem('a', 1);
    expect(cache.getItem('a')).toBe(1);
});