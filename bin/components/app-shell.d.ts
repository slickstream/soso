import { LitElement, TemplateResult, CSSResult } from 'lit-element';
export declare class SososAppShell extends LitElement {
    drawerOpen: boolean;
    private resizeListener;
    static readonly styles: CSSResult;
    render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private toggleDrawer;
    private closeDrawer;
    private onResize;
}
