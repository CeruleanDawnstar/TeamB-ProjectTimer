import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/group';
import { GroupsService } from 'src/app/_services/groups.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  group: Group = new Group();
  submitted = false;

  constructor(private groupService: GroupsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveGroup(): void {

    this.groupService.add(this.group)
    .subscribe(
      data => {
        console.log(data);
        this.group = new Group();
        this.submitted = true;
        this.goToList();
      },
      error => {
        console.log(error);
      }
    );
  }

  goToList(){
    this.router.navigate(['/group']);
  }


  newParking(): void {
    this.submitted = false;
    this.group = new Group();

  }
}
