import {Editor} from "./editor";
import { MyElement } from "./element";

console.log('main loaded')

let ed = new Editor();
ed.ping();

MyElement.createFrom( document.querySelector('#editor') )
    .replace(ed);
