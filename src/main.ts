import {Editor} from "./Editor";
import { MyElement } from "./Element";
import { HTMLEmitter } from "./HTMLEmitter";

console.log('main loaded')

let editor = new Editor();
let emitter = new HTMLEmitter();

MyElement.createFrom( document.querySelector('#editor') )
    .replace(editor);
MyElement.createFrom( document.querySelector('#result') )
    .replace(emitter);
