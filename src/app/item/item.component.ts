import { Component, OnInit,Input } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {


  @Input() itemText:String = ''
  @Input() isDone:boolean = false
  @Input() id:Number = 0
  constructor(private itemService:ItemService) { 

  }

  ngOnInit(): void {
  }

  onCheckDone(){
    this.isDone = !this.isDone
  }

  onDeleteItem(){
    this.itemService.deleteItem(this.id)
  }

}
