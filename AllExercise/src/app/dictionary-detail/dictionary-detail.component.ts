import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute} from "@angular/router";
import {Word} from "../model/word";


@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: Word;

  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.word = dictionaryService.findById(parseInt(id));
      }
    }, error1 => {
    }, () => {
    })
  }

  ngOnInit(): void {
  }

}
