import { SuperPage } from './SuperPage';

export class AuthGuardPage extends SuperPage {

  // Navegar a cualquier ruta
  async navigateTo(path: string) {
    await this.page.goto(`https://dojo.upexgalaxy.com${path}`);
  }

  // Validar que la URL actual coincide exactamente o por expresión regular
  async verifyUrl(expectedUrlPattern: RegExp | string) {
    await this.expect(this.page).toHaveURL(expectedUrlPattern);
  }
}