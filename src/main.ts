import {Editor} from "./Editor";
import { MyElement } from "./Element";
import { HTMLEmitter } from "./HTMLEmitter";

console.log('main loaded')

let emitter = new HTMLEmitter();
let editor = new Editor(emitter);

MyElement.createFrom( document.querySelector('#editor') )
    .replace(editor);
MyElement.createFrom( document.querySelector('#result') )
    .replace(emitter);
