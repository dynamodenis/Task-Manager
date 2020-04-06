import { Injectable } from '@angular/core';
import { Goal } from './goal'

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {

  getGoals(){
    return Goal;
  }

  constructor() { }
}
