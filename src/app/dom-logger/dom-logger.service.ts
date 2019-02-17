import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DomLoggerService {

  constructor() { }
}

let thingy = new BehaviorSubject<any[]>([]);

export function Log() {
  return function (target, key) {
    let val = target[key];
    const getter = () => {
      const el = document.querySelector('#list')
      if (el) {
        let textValue = val
        if (val instanceof Array && val.length === 0) {
          textValue = '[]'
        } else if (val instanceof Object) {
          textValue = JSON.stringify(val, null, 2)
        }
        const prev: any[] = thingy.value;
        const curr = [...prev, `${key}:~ ${textValue}`];
        const clean = Array.from(new Set(curr));
        thingy.next(clean);
      }

      return val
    };

    const setter = (next) => {
      val = next;
    }

    Object.defineProperty(target, key, {
      get: getter, set: setter, enumerable: true, configurable: true
    });
  };
}

thingy.pipe(
  distinctUntilChanged((x, y) => {
    // Slow but easy to write
    return JSON.stringify(x) === JSON.stringify(y);
  }),
).subscribe((val) => {
  const max = val.length - 1;

  const el = document.querySelector('#list')
  const container = document.querySelector('.container')
  if (!el) return;

  const splitter = String(val[max]).split('~'); // Hack

  var li = document.createElement("li");
  li.className = 'list-item';
  setTimeout(() => {
    li.className += '-show';
    container.scrollTop = container.scrollHeight;
  }, 10);

  var spanKey = document.createElement("span");
  spanKey.className = 'key-span';
  spanKey.appendChild(document.createTextNode(splitter[0]))

  var spanVal = document.createElement("span");
  spanVal.className = 'val-span';
  spanVal.appendChild(document.createTextNode(splitter[1]))

  li.appendChild(spanKey);
  li.appendChild(spanVal);
  el.appendChild(li)
})