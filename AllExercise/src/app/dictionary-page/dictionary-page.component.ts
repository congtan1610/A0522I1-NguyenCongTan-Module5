import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {Word} from "../model/word";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {

  words:Word[]=[];
  constructor(private dictionaryService: DictionaryService) { this.words=dictionaryService.getAll()}

  ngOnInit(): void {
  }

}
