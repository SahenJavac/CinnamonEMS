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


  toggleIcon() {
    this.showIcon = !this.showIcon;
  }

  onInputChange() {
    this.filteredEmployees = this.employees.filter(employee => employee.designation.toLowerCase().includes(this.designationFilter.toLowerCase()))
  }

  onMessageRecieved(value: string) {
    this.message = value
  }

}
