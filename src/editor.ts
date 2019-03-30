import { MyElement } from "./Element";

export class Editor extends MyElement
{
    constructor()
    {
        console.log('ctor');
        super();

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
                console.log('keydown',e);
        })
        

        
    }

}

