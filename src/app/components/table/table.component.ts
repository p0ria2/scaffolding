import { Component, OnInit } from '@angular/core';
import { getTableOptions } from 'src/app/decorators/table.decorator';
import { User } from 'src/app/models/user.model';
import { TableFieldOptions } from './../../decorators/table.decorator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  columns: TableFieldOptions<User>[] = [];
  users: Partial<User>[] = [
    {
      firstName: 'پوریا',
      lastName: 'امن زاده',
      isAdmin: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.columns = getTableOptions(User);
  }


}
