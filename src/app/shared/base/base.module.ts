import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    exports: [
        CommonModule, MaterialModule, FormsModule, ReactiveFormsModule
    ]
})
export class BaseModule { }