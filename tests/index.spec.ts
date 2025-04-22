import { test, expect } from '@playwright/test';

test('Header and footer are visible on index page', async ({ page }) => {

    await page.goto('https://tempo-run-astro5.netlify.app/');

    const header = page.locator('header');
    await expect(header).toBeVisible();

    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
});

test('Link to subpage is clickable and subpage is able to load', async ({ page }) => {

    await page.goto('https://tempo-run-astro5.netlify.app/');

    const subpageLink = page.getByRole('link', { name: 'To subpage' }).first();
    await expect(subpageLink).toBeVisible();

    await subpageLink.click();

    await expect(page).toHaveURL('https://tempo-run-astro5.netlify.app/subpage/');

    await expect(page.locator('h1')).toContainText('Subpage');
});

test('Slider is working', async ({ page }) => {
    await page.goto('https://tempo-run-astro5.netlify.app/');

    const sliders = page.locator('.swiper');
    const count = await sliders.count();

    for (let i = 0; i < count; i++) {
        const slider = sliders.nth(i);

        await expect(slider).toBeVisible();

        const box = await slider.boundingBox();
        if (!box) throw new Error('Slider not found');

        await page.mouse.move(box.x + box.width - 10, box.y + box.height / 2);
        await page.mouse.down();
        await page.mouse.move(box.x + 10, box.y + box.height / 2, { steps: 20 });
        await page.mouse.up();

        const activeSlide = page.locator('.swiper-slide.swiper-slide-active');
        await expect(activeSlide).toBeVisible();
    }
});
