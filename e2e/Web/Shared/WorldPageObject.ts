export default class WorldPageObject {

    public static async open(path: string): Promise<void> {
        return await browser.url(path);
    }
}
