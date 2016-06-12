import {Component} from 'angular2/core';
import {ListItem} from "./list-item";
import {ShoppingListService} from "./shopping-list.service";
import {ControlGroup} from 'angular2/common';
import {FormBuilder} from 'angular2/common';
import {OnInit} from 'angular2/core';
import {Validators} from 'angular2/common';
import {Control} from 'angular2/common'

@Component({
selector: 'shopping-list-new-item',
template: `
<form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
<div class="input">
	<label for="item-name">name</label>
	<input type="text" id="item-name" [(ngModel)]="item.name" [ngFormControl]="myForm.controls['itemName']">
</div>
<div class="input">
	<label for="item-amt">amount</label>
	<input type="text" id="item-amt" [(ngModel)]="item.amount" [ngFormControl]="myForm.controls['itemAmount']">
</div>
<button type="submit" [disabled]="!myForm.valid">add item</button></form>

`, 
	
})

export class ShoppingListNewItemComponent {
item = {name:'', amount: 0};
myForm: ControlGroup;

constructor(private _shoppingListService: ShoppingListService, private _formBuilder: FormBuilder) {}

onSubmit() {
	this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
}

ngOnInit():any {
	this.myForm = this._formBuilder.group({
	'itemName': ['', Validators.required],
	'itemAmount': ['', Validators.compose([
	Validators.required,
	greaterZero
	])],
	});
}
	
}

function greaterZero(control: Control): {[s: string]: boolean} {
	if (control.value <= 0){
	return {notEnough: true};
	}
}