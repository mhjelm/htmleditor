import { MyElement } from "./element";

export class Editor extends MyElement
{
    constructor()
    {
        console.log('ctor');
        super();

        this.createElement('div',null); // todo: figure out how to create overload..
        this.element.innerHTML = "sadfdfda";
        

        
    }
    
    ping(): any {
        console.log('pong');
    }

}

