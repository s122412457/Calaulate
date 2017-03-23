import { Component,ViewChild } from '@angular/core';
import * as moment from 'moment';
import { CellComponent } from './cell/cell.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';
  title = moment();

  @ViewChild(CellComponent)
  
  months = this._removeTime(moment());  
  month;// = this._removeTime(moment());  
  weeks = [];
  days = [];
  selected;
 
   constructor() {    
    
       
   }

   ngOnInit() {
      this.month = this._removeTime(moment()); 
      var start = this.month;
      start.date(1);
      this._removeTime(start.day(0));
      this._buildMonth( start, this.month);

      console.dir('weeks : '+ this.weeks);

   } 

   onSelect(day){
     console.log(day.name);
     this.selected = day.date;
   }

  _removeTime(date){
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  _buildMonth(start, month) {     
                    var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
                   
                    while (!done) {
                        this.weeks.push({ days: this._buildWeek(date.clone(), month) });
                        date.add(1, "w");
                        done = count++ > 2 && monthIndex !== date.month();
                        monthIndex = date.month();
                    }
  }

  _buildWeek(date, month) {                  
                    var days = [];
                    for (var i = 0; i < 7; i++) {
                        days.push({
                            name: date.format("dd").substring(0, 1),
                            number: date.date(),
                            isCurrentMonth: date.month() === month.month(),
                            isToday: date.isSame(new Date(), "day"),
                            date: date
                        });
                        date = date.clone();
                        date.add(1, "d");
                    }
                    return days;
  }
    

}
