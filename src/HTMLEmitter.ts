import { MyElement } from "./Element";

export class HTMLEmitter extends MyElement
{
    constructor()
    {
        super();

        this.createElement('div',null); 
        //this.element.innerHTML = "HTMLEmitter";
    }
    
}

