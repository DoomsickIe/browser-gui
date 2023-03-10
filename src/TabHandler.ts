import { Tab } from "./Tab";

var root: HTMLDivElement;

var tablist: Tab[] = [];

function CREATE_TAB(cont): void {
    var tab: Tab = new Tab("", root, cont);
    tab.INIT();
    tablist.push(tab);
}