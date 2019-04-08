import {SelectionModel} from '@angular/cdk/collections';
import {Component, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface list {
  name: string;
  position: number;
  dob: number;
  gender: string;
  snils: number;
}

const USER_DATA: list[] = [
  {position: 1, name: 'this.name', dob: 1.0079, gender: 'H', snils: 22},
  {position: 2, name: 'Helium', dob: 4.0026, gender: 'He', snils: 22},
  {position: 3, name: 'Lithium', dob: 6.941, gender: 'Li', snils: 22},
  {position: 4, name: 'Beryllium', dob: 9.0122, gender: 'Be', snils: 22},
  {position: 5, name: 'Boron', dob: 10.811, gender: 'B', snils: 22},
];



/**
 * @title Table with selection
 */
@Component({
  selector: 'table-selection',
  styleUrls: ['table.css'],
  templateUrl: 'table.html',
})
export class table {
  displayedColumns: string[] = ['select', 'name', 'dob', 'gender', 'snils'];
  dataSource = new MatTableDataSource<list>(USER_DATA);
  selection = new SelectionModel<list>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: list): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
