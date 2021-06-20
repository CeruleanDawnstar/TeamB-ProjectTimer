import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  users!: User[]

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void {
    this.userService.getAdminBoard()
    .subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
      
    );
  }

  goToGroup(){
    this.router.navigate(['/group']);
  }

}
