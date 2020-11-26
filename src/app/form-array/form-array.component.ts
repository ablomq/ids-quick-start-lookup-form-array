import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { productsColumns, productsData } from "./mock-data";

@Component({
  selector: "ab-form-array",
  templateUrl: "./form-array.component.html",
  styleUrls: ["./form-array.component.scss"]
})
export class FormArrayComponent implements OnInit {
  submitted = false;

  toolbar = {
    results: true,
    keywordFilter: true,
    filterRow: true,
    advancedFilter: false,
    actions: false,
    views: false,
    rowHeight: false,
    collapsibleFilter: false,
    fullWidth: true
  };

  options = {
    paging: true,
    pagesize: 10,
    pagesizes: [10, 25, 50, 75]
  };

  columns = productsColumns;
  dataset = productsData;

  angForm = new FormGroup({
    names: new FormArray([
      new FormControl("", Validators.required),
      new FormControl("", Validators.required)
    ])
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  get names(): FormArray {
    return this.angForm.get("names") as FormArray;
  }
  onFormSubmit(): void {
    for (let i = 0; i < this.names.length; i++) {
      console.log(this.names.at(i).value);
    }
  }
  addNameField() {
    this.names.push(new FormControl("", Validators.required));
  }

  deleteNameField(index: number) {
    if (this.names.length !== 1) {
      this.names.removeAt(index);
    }
    console.log(this.names.length);
  }
}
