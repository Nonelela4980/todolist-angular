import { Injectable } from '@angular/core';
import { items } from 'src/data/items-data';
import Item from 'src/interfaces/Items';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems():Item[]{
    return items
  }

  addItem(item:Item){
    items.push(item)
  }

}
