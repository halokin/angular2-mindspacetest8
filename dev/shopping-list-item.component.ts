import {Component} from 'angular2/core';
import {ListItem} from "./list-item";
import {ShoppingListService} from "./shopping-list.service";
import {EventEmitter} from 'angular2/core';

@Component ({
	selector: 'shopping-list-item',
	template: `
<div class="input">
	<label for="item-name">name</label>
	<input type="text" id="item-name" [(ngModel)]="item.name">
</div>
<div class="input">
	<label for="item-amt">amount</label>
	<input type="text" id="item-amt" [(ngModel)]="item.amount">
</div>
<button class="danger" (click)="onDelete()">delete item</button>
	`,
	inputs:['item'],
	outputs: ['removed']
})
export class ShoppingListItemComponent {
	item = {name: '', amount: 0};
	removed = new EventEmitter<ListItem>();

	constructor(private _shoppingListService: ShoppingListService) {}

	onDelete() {
	this._shoppingListService.deleteItem(this.item);
	this.removed.emit(null);

	}
}