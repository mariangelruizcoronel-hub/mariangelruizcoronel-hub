import { test } from '@playwright/test';
import { AuthGuardPage } from '../pages/AuthGuardPage';

test.describe('US - Auth Guard & Route Protection', () => {
  let authGuardPage: AuthGuardPage;

  test.beforeEach(async ({ page }) => {
    authGuardPage = new AuthGuardPage(page);
});

  // Scenario 1: Unauthenticated access to /dashboard redirects to login
  test('BO-17 TC1: Unauthenticated access to /dashboard redirects to login', async () => {
    await authGuardPage.navigateTo('/dashboard');
    await authGuardPage.verifyUrl(/.*login\?callbackUrl=%2Fdashboard/);
  });

  // Scenario 2: Unauthenticated access to /dashboard/profile redirects to login
  test('BO-17 TC2: Unauthenticated access to /dashboard/profile redirects to login', async () => {
    await authGuardPage.navigateTo('/dashboard/profile');
    await authGuardPage.verifyUrl(/.*login\?callbackUrl=%2Fdashboard%2Fprofile/);
  });

  // Scenario 3: Authenticated user on /login redirects to dashboard
  test.skip('BO-17 TC3: Authenticated user on /login redirects to dashboard', async () => {
    // NOTA: Para probar usuarios autenticados se requiere simular la sesión/cookie
    await authGuardPage.navigateTo('/login');
    await authGuardPage.verifyUrl(/.*dashboard/);
  });

  // Scenario 4: Authenticated user on /register redirects to dashboard
  test.skip('BO-17 TC4: Authenticated user on /register redirects to dashboard', async () => {
    // NOTA: Para probar usuarios autenticados se requiere simular la sesión/cookie
    await authGuardPage.navigateTo('/register');
    await authGuardPage.verifyUrl(/.*dashboard/);
  });

  // Scenario 5: Public routes accessible without auth
  test('BO-17 TC5: Public routes accessible without auth', async () => {
    // Probar /
    await authGuardPage.navigateTo('/');
    await authGuardPage.verifyUrl('https://dojo.upexgalaxy.com/');

    // Probar /guide
    await authGuardPage.navigateTo('/guide');
    await authGuardPage.verifyUrl(/.*guide/);
  });
});