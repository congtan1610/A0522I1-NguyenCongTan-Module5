import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryForm: FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl()
  });
 id:number;
  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(next=>{
       this.id=parseInt(next.get('id'));
      if (this.id!=null){
        this.categoryService.findById(this.id).subscribe(now=>{
          this.categoryForm.patchValue(now);
        })
      }
    });
  }

  ngOnInit() {
  }


  deleteCategory() {
    this.categoryService.deleteCategory(this.id).subscribe(nex=>{
      this.router.navigate(['/category/list']);
    });

  }
}
