import {Component} from 'angular2/core';
import {ListItem} from "./list-item";
import {ShoppingListService} from "./shopping-list.service";

@Component({
selector: 'shopping-list-new-item',
template: `
<div class="input">
	<label for="item-name">name</label>
	<input type="text" id="item-name" [(ngModel)]="item.name">
</div>
<div class="input">
	<label for="item-amt">amount</label>
	<input type="text" id="item-amt" [(ngModel)]="item.amount">
</div>
<button (click)="onClick()">add item</button>
`, 
	
})

export class ShoppingListNewItemComponent {
item = {name:'', amount: 0};

constructor(private _shoppingListService: ShoppingListService) {}

onClick() {
	this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
}

	
}