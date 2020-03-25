import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Goal } from '../goal';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal=new Goal(0,'','',new Date());

  // addGoal an an event emmiter object
  @Output() addGoal=new EventEmitter<Goal>()
  // The Goal represents the type

  submitGoal(){
    this.addGoal.emit(this.newGoal);
  }
  // The submit goal function function in which we use the emit method and pass in the new goal object we want to create

  constructor() { }

  ngOnInit(): void {
  }

}
