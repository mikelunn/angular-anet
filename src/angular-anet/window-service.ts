/**
 * Created by complunm on 1/28/17.
 */
import {Injectable} from '@angular/core';

function _window() : any {
  return window;
}
@Injectable()
export class WindowRef {
  get nativeWindow() : any {
    return _window();
  }
}
