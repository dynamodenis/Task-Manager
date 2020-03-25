import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal:Goal;
  @Output () isComplete= new EventEmitter <boolean>();

  // This clears a goal once it is completed
  // goalComplete(complete:boolean){
  //   this.isComplete.emit(complete);
  // }

  // This deletes a goal once completed
  goalDelete(complete:boolean){
    // isComplete is used as event emitter
    this.isComplete.emit(complete); 
  }
  constructor() { }

  ngOnInit() {
  }

}
