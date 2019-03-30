import { MyElement } from "./Element";

export class HTMLEmitter extends MyElement
{
    constructor()
    {
        super();

        this.createElement('div',null); // todo: figure out how to create overload..
        this.element.innerHTML = "HTMLEmitter";
    }
    
}

