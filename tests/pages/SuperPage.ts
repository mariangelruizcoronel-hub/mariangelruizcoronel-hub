import { expect, type Page } from '@playwright/test';

export class SuperPage {
    page: Page;
    expect = expect;

    constructor(driver: Page) {
        this.page = driver;
    }
}