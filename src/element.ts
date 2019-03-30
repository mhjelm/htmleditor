import { IElement } from "./IElement";

export class MyElement implements IElement
{
    element:Element;

    constructor(element:Element|null = null)
    {
        this.element = element;
    }
    getDOMElement(): Element {
        return this.element;
    }
    createElement(type: string, opts: any): void {
        this.element = document.createElement(type);
        if(opts && opts.style)
            this.setStyle(opts.style);
    }
    setStyle(style:any):void
    {
        let el = <HTMLElement>this.element;
        Object.keys(style).forEach(s => {
            el.style[s] = style[s];
        });
    }
    replace(replaceEl: IElement): void {
        if(replaceEl === null )
        {
            console.error("replace, no replace element");
            return;
        }
        if(this.element === null )
        {
            console.error("replace, no element");
            return;
        }
        this.element.parentElement.replaceChild(replaceEl.getDOMElement(), this.element);
    }
    inject(parentel: IElement): void {
        throw new Error("Method not implemented.");
    }

    public static createFrom(domEl:Element|null):IElement
    {
        return new MyElement(domEl);
    }

}