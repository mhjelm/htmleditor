import { IElement } from "./IElement";

export class MyElement implements IElement
{
    getDOMElement(): Element {
        return this.element;
    }
    element:Element;

    constructor(element:Element|null = null)
    {
        this.element = element;
    }
    createElement(type: string, opts: object | null): void {
        this.element = document.createElement(type);
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