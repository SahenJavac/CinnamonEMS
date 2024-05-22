import { Component } from '@angular/core';
import employees from './data/employees.json'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './Employee.model';
import { ProgressBarComponent } from '../shared/progress-bar/progress-bar.component';
import { Person } from './person';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule, FormsModule, ProgressBarComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})

export class EmployeesComponent {

  title: string = "Cinnamon Employee Management System";
  employees: Employee[] = employees;
  filteredEmployees: Employee[] = employees;
  message: string = "";
  showIcon: boolean = false;
  designationFilter: string = "";

  initialArray: string[] = ['s', 'a', 'h', 'e', 'n'];
  changedArray: string[] = [];

  initialString: string = 'Sahen';
  changedString: string = ''

  

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }

  onInputChange() {
    this.filteredEmployees = this.employees.filter(employee => employee.designation.toLowerCase().includes(this.designationFilter.toLowerCase()))                            
  }

  onMessageRecieved(value: string) {            
    this.message = value  
  }

  arrayManipulate() {
    
    
    //Reversing array
    for (let i = 0; i < this.initialArray.length; i++) {
      this.changedArray.push(this.initialArray[this.initialArray.length - i - 1])
    }



   /* //BubbleSort
    let bubbleSortArray: number[] = [2, 8, 3, 6, 1, 3, 4, 9, 3, 5]
    console.log('THis is before sort ', bubbleSortArray)
    for (let i = 0; i < bubbleSortArray.length; i++) {
      for (let j = 0; j < bubbleSortArray.length - 1 - i; j++) {
        if (bubbleSortArray[j] > bubbleSortArray[j + 1]) {
          let tempElement = bubbleSortArray[j]
          bubbleSortArray[j] = bubbleSortArray[j + 1]
          bubbleSortArray[j + 1] = tempElement;;
        }
      }
    }
    console.log('This is array after sort ', bubbleSortArray) */






      //String reverse
    /*    this.changedString = this.initialString.split('').reverse().join('')
       console.log(this.changedString) */
  }


/*   function selectionSort(arr: number[]): number[] {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap
        }
    }
    return arr;
} */






}
