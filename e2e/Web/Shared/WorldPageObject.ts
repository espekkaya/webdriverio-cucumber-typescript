export default class WorldPageObject {

    public static open(path: string): void {
        browser.url(path);
    }
}
