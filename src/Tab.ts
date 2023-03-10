export class Tab {
    constructor(url: string, root: HTMLDivElement, content: ``, active: boolean = false) { 
        this._url = url;
        this._root = root;
        this.active = active;
    }
    private _root: HTMLDivElement;
    private _content: HTMLDivElement;
    private _url: string;
    private _load: Event = new Event("load");
    get url(): string {
        return this._url;
    }
    public INIT(): void {
        this._content = document.createElement("div");
        this._content.innerHTML = ``
        this._root.appendChild(this._content);
        
    }
    public SET_URL(url: string): void {
        this._url = url;
        this.UPDATE_PAGE();
    }
    public UPDATE_PAGE(): void {
        this._content.setAttribute("src", this._url);
        dispatchEvent(this._load);
    }

    public active: boolean = false;
}