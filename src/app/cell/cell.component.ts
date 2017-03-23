import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() day:any;

  @Output()
  selectDay = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  Select(){
		console.log("day : " + this.day.number);
		this.selectDay.emit(this.day);
	}

}
