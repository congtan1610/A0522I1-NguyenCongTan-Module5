import {Component, OnInit} from '@angular/core';
import {ListService} from "../service/list.service";
import {Student} from "../model/student";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  indexPagination: number = 1;
  totalPagination: number;
  list: Student[];
  nameF: string = '';
  nameDel: string = '';
  idDel: number;
  editForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z][a-z]+(\\s[A-Za-z]+)*$')]),
    team: new FormControl(),
    topic: new FormControl('', [Validators.required]),
    teacher: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^([\\d]{10}|[\\d]{12}|[\\d]{11})$')])
  });

  constructor(private listService: ListService, private route: Router) {

  }

  ngOnInit(): void { this.listService.getAll(0, this.nameF).subscribe((next: any) => {
    this.list = next.content;
    this.totalPagination = next.totalPages;
    this.indexPagination=1;
  })
  }

  edit(id: number) {
    this.listService.findById(id).subscribe(next => {
      this.editForm.patchValue(next);
    })
  }

  check(id: number) {
    this.listService.findById(id).subscribe(next => {
      this.nameDel = next.name;
      this.idDel = next.id;
    })
  }

  delete() {
    this.listService.delete(this.idDel).subscribe(now => {
      this.ngOnInit();
    })
  }


  firtPage() {
    this.indexPagination = 1;
    this.listService.getAll((this.indexPagination) - 1, this.nameF).subscribe((next) => {
      this.list = next.content;
    })
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.listService.getAll((this.indexPagination) - 1, this.nameF).subscribe((next) => {
      this.list = next.content;
    })
  }

  prviousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination == 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.listService.getAll(this.indexPagination - 1, this.nameF).subscribe((next) => {
        this.list = next.content;
      })
    }
  }

  lastPage() {
    this.indexPagination = this.totalPagination;
    this.listService.getAll(this.indexPagination - 1, this.nameF).subscribe((next) => {
      this.list = next.content;
    })
  }

  findPaginnation(target: any) {
    if (parseInt(target.value) > this.totalPagination) {
      target.value = this.indexPagination;
    } else {
      this.listService.getAll(target.value - 1, this.nameF).subscribe((next: any) => {
        this.list = next.content;
      })
      this.indexPagination = parseInt(target.value);
    }
  }

  findByName() {
    this.listService.getAll(0, this.nameF).subscribe((next) => {
      this.list = next.content;
      this.totalPagination = next.totalPages;
    })
    this.indexPagination = 1;
  }

  changNameF(target: any) {
    this.nameF = target.value.toString();
  }

  submit(editForm: FormGroup) {
    if (!editForm.valid) {
      alert("Dữ liệu nhập vào bị lỗi");
    }
    if (this.editForm.valid) {
      this.listService.saveById(editForm.value).subscribe(next => {
        this.listService.getAll((this.indexPagination) - 1, this.nameF).subscribe((next) => {
          this.list = next.content;
        })
        this.route.navigateByUrl("/");
      })
    }
  }


}
