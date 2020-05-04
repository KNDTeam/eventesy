import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Chat, Message } from '@app/entities/Chat';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private selectedMessage$ = new Subject();
  private newMessage$ = new Subject();

  private sortBy = (function() {
    var toString = Object.prototype.toString,
      parse = function(x) { return x; },
      getItem = function(x) {
        var isObject = x != null && typeof x === 'object';
        var isProp = isObject && this.prop in x;
        return this.parser(isProp ? x[this.prop] : x);
      };

    return function sortby(array, cfg) {
      if (!(array instanceof Array && array.length)) return [];
      if (toString.call(cfg) !== '[object Object]') cfg = {};
      if (typeof cfg.parser !== 'function') cfg.parser = parse;
      cfg.desc = !!cfg.desc ? -1 : 1;
      return array.sort(function(a, b) {
        a = getItem.call(cfg, a);
        b = getItem.call(cfg, b);
        return cfg.desc * (a < b ? -1 : +(a > b));
      });
    };

  }());

  constructor(
    private http: HttpClient
  ) { }

  public getMockChat(): Observable<Chat> {
    return this.http.get('/assets/data/chat.json').pipe(
      map((content: Chat) => content as Chat)
    );
  }

  public getMockMessages(): Observable<Message[]> {
    return this.http.get('/assets/data/chat.json').pipe(
      map((content: Chat) => {
        return this.sortBy(content.messages, { prop: 'timestamp' }) as Message[];
      })
    );
  }

  public setSelectedMessage(message) {
    this.selectedMessage$.next(message);
  }

  public listenSelectedMessage() {
    return this.selectedMessage$.asObservable();
  }

  public setNewMessage(message) {
    this.newMessage$.next(message);
  }

  public listenNewMessages() {
    return this.newMessage$.asObservable();
  }

}
