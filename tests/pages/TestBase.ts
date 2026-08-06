/* eslint-disable @typescript-eslint/naming-convention */
import { test as driver } from '@playwright/test';
import { AuthGuardPage } from './AuthGuardPage';

const test = driver.extend<{
    authGuardPage: AuthGuardPage;
}>({
    authGuardPage: async ({ page }: { page: any }, use: (r: AuthGuardPage) => Promise<void>) => await use(new AuthGuardPage(page))
});

export { test };
// Main utilities:
export const story = test.describe;
export const expect = test.expect;
// Hooks:
export const beforeAll = test.beforeAll;
export const precondition = test.beforeEach;
export const afterEach = test.afterEach;
export const afterAll = test.afterAll;