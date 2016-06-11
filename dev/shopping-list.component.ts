import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from "./shopping-list-new-item.component";
import {ListItem} from "./list-item";
import {ShoppingListItemComponent} from "./shopping-list-item.component";

@Component({
  selector:'shopping-list',
  template:`
  <section>
    <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
  </section>
  <section>
    <h3>My List</h3>
    <div class="list">
      <ul>
        <li *ngFor="#listItem of listItems" (click)="onSelect(listItem)">{{listItem.name}} ({{listItem.amount}})</li>
      </ul>
    </div>
  </section>
  <section *ngIf="selectedItem != null">
    <shopping-list-item [item]="selectedItem" (removed)="onRemove($event)">
    </shopping-list-item>
  </section>
  `, 
  directives : [ShoppingListNewItemComponent, ShoppingListItemComponent]
})

export class shoppingListComponent {
listItems = new Array<ListItem>();
selectedItem: ListItem;

onItemAdded(item: ListItem) {
  this.listItems.push({name: item.name, amount: item.amount});
}

onSelect(item: ListItem){
  this.selectedItem = item;
}
onRemove(item: ListItem){

  this.listItems.splice(this.listItems.indexOf(item), 1);
  this.selectedItem = null;
}
}
