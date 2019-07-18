export class WorldPageObject {

    public static async open(path: string): Promise<void> {
        await browser.url(path);
    }
}
