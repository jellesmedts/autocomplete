import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public passwords: any = [];
  public loading;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPasswords().subscribe(
      data => {
        this.passwords = data;
        },
        err => {
          console.error(err);
        })
        .add(() => {
          // console.log(this.passwords);
        });
  }
}
