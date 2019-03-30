import { MyElement } from "./Element";
import { HTMLEmitter } from "./HTMLEmitter";

export class Editor extends MyElement
{
    emitter:HTMLEmitter;

    constructor(emitter: HTMLEmitter)
    {
        super();
        this.emitter = emitter;

        this.createElement('textarea',{
            style:
            {
                width: '100%',
                height: '100%'
            }
        }); 
        //this.element.innerHTML = "";
        this.onKeyDown(e => {
            if(e.keyCode === 13 && e.ctrlKey === true)
                this.emitter.emit("bogaloo");
        })
        

        
    }

}

