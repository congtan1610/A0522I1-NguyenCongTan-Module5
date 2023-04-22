import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ListService} from "../service/list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  editForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name: new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z][a-z]+(\\s[A-Za-z]+)*$')]),
    team: new FormControl(),
    topic: new FormControl('',[Validators.required]),
    teacher: new FormControl(),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern('^([\\d]{10}|[\\d]{12}|[\\d]{11})$')])
  });
  constructor(private listService:ListService,private route:Router) { }

  ngOnInit(): void {
  }
  submit(editForm: FormGroup) {
    if (!editForm.valid){
      alert("Dữ liệu nhập vào bị lỗi");
    }
    if (this.editForm.valid) {
      this.listService.save(editForm.value).subscribe(next=>{
        alert("Thêm thành công");
        this.route.navigateByUrl("/");
      })
    }
  }

  back() {
    this.route.navigateByUrl("/");
  }
}
