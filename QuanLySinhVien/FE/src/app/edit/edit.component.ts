import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ListService} from "../service/list.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z][a-z]+(\\s[A-Za-z]+)*$')]),
    team: new FormControl(),
    topic: new FormControl('',[Validators.required]),
    teacher: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^([\\d]{10}|[\\d]{12}|[\\d]{11})$')])
  });
  constructor(private listService:ListService,private activatedRoute:ActivatedRoute,private route:Router) {
    this.activatedRoute.paramMap.subscribe(next=>{
      const id=parseInt(next.get('id'));
      if (id!=null){
        this.listService.findById(id).subscribe(now=>{
          this.editForm.patchValue(now);
        })
      }
    })
  }

  ngOnInit(): void {
  }
  compare(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  submit(editForm: FormGroup) {
    if (!editForm.valid){
      alert("Dữ liệu nhập vào bị lỗi");
    }
    if (this.editForm.valid) {
      this.listService.saveById(editForm.value).subscribe(next=>{
        alert("Cập nhật thành công");
        this.route.navigateByUrl("/list");
      })
    }
  }
}
