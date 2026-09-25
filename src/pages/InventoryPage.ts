import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly productsHeader;
  readonly cartButton;

  constructor(page: Page) {
    super(page);
    this.productsHeader = this.page.getByText('Products');
    this.cartButton = this.page.getByRole('button', { name: /Cart/i });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://www.saucedemo.com/inventory.html');
    await this.waitForReady();
  }
}
