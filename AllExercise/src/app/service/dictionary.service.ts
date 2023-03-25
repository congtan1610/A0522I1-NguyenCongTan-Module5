import { Injectable } from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  list:Word[]=[
    {
      id:1,
      name:'chicken',
      description:'con ga'
    },
    {
      id:2,
      name:'duck',
      description:'con vit'
    }
  ];

  constructor() { }
  getAll():Array<Word>{
    return this.list;
  }
  findById(value:number):Word{
    return this.list.filter(word=>word.id===value)[0];
  }
}
