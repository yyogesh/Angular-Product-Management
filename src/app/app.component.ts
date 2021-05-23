import { Component } from '@angular/core';

interface Item {
  name: string;
  val: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angualr-may';
  items: Item[] = [{ name: 'One', val: 1 }, { name: 'Two', val: 2 }, { name: 'Three', val: 3 }];
  selectedValue: string = '2';
  isValid = true;

  num: string = '';

  objectKeys = Object.keys;
  skills = { Skill1: 'Angular', Skill2: 'React', Skill3: 'Vue' };

  employees = [
    {
      code: 'emp101', name: 'Tom', gender: 'Male',
      annualSalary: 5500, dateOfBirth: '25/6/1988'
    },
    {
      code: 'emp102', name: 'Alex', gender: 'Male',
      annualSalary: 5700.95, dateOfBirth: '9/6/1982'
    },
    {
      code: 'emp103', name: 'Mike', gender: 'Male',
      annualSalary: 5900, dateOfBirth: '12/8/1979'
    },
    {
      code: 'emp104', name: 'Mary', gender: 'Female',
      annualSalary: 6500.826, dateOfBirth: '14/10/1980'
    },
  ];

  getEmployees(): void {
    this.employees = [
      {
        code: 'emp101', name: 'Tom', gender: 'Male',
        annualSalary: 5500, dateOfBirth: '25/6/1988'
      },
      {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: '9/6/1982'
      },
      {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: '12/8/1979'
      },
      {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: '14/10/1980'
      },
      {
        code: 'emp105', name: 'Nancy', gender: 'Female',
        annualSalary: 6700.826, dateOfBirth: '15/12/1982'
      },
    ];
  }

  trackByEmployee(index: number, employee: any) {
    return employee.code
  }

  // getSKillValue(key: string): string {
  //   return this.skills[key];
  // }

}
