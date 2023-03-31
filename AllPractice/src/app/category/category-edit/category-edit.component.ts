import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categoryForm: FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl()
  });
id:number;
  constructor(private categoryService: CategoryService,private activatedRoute:ActivatedRoute,private route:Router) {
    this.activatedRoute.paramMap.subscribe(next=>{
      this.id=parseInt(next.get('id'));
      if (this.id!=null){
        this.categoryService.findById(this.id).subscribe(now=>{
          this.categoryForm.patchValue(now);
        })
      }
    })
  }

  ngOnInit() {
  }

  updateCategory() {
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(this.id, category).subscribe(next=>{
      this.route.navigateByUrl("/category/list")
    });
  }
}
