import { Tab } from "./Tab";

var root: HTMLDivElement;

export abstract class TabHandler {
    private static tablist: Tab[] = [];
    
    static CREATE_TAB(): void {
        var tab: Tab = new Tab("", root, true);
        tab.INIT();
        TabHandler.tablist.push(tab);
    }
}