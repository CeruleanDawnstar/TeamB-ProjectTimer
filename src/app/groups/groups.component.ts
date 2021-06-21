import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../_services/groups.service';
import { Group } from '../group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  
  groups!: Group[] 

  constructor(private groupService: GroupsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAllGroup();
  }

  getAllGroup(): void {
    this.groupService.getAll()
    .subscribe(
      data => {
        this.groups = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
      
    );
  }

  goToAdd(){
    this.router.navigate(['/add']);
  }


  deleteGroup(_id: any) {
    this.groupService.delete(_id)
      .subscribe(
        data => {
          console.log(data);
          this.getAllGroup();
        },
        error => console.log(error));
  }


  updateGroup(_id: string){
    this.router.navigate(['update', _id]);
  }

}
