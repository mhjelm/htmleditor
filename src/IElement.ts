export interface IElement
{
    getDOMElement(): HTMLElement;
    createElement(type:string,opts:object|null):void;
    inject(parentel:IElement):void;
    replace(parentel:IElement):void;
    onKeyDown(handler:(ev:any)=>void):void;
}

