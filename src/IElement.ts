export interface IElement
{
    getDOMElement(): Element;
    createElement(type:string,opts:object|null):void;
    inject(parentel:IElement):void;
    replace(parentel:IElement):void;
}

