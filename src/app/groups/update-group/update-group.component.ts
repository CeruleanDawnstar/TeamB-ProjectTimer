import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/group';
import { GroupsService } from 'src/app/_services/groups.service';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.css']
})
export class UpdateGroupComponent implements OnInit {

  _id!: string;
  group!: Group;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private groupService: GroupsService) { }

  ngOnInit(): void {
    this.group = new Group();

    this._id = this.route.snapshot.params['id'];

    this.groupService.getById(this._id)
    .subscribe(data =>{
      console.log(data)
      this.group = data;
    },
    error => console.log(error)
    );
  }


  updateGroup(){
    this.groupService.update(this._id, this.group)
    .subscribe(data => {
      console.log(data);
      this.group = new Group();
      this.goToList();
    }, 
    error => console.log(error)
    );
  }


  goToList(){
    this.router.navigate(['/group'])
  }


}
