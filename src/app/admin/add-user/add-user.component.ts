import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(
    public userservice: UserService,
    private notificationService: NotificationService,

    ) { }
  ngOnInit() {

  }

  onClear() {
    this.userservice.form.reset();
    this.userservice.intializeFromGroup();
    this.notificationService.success(':: Form Cleared');

  }



  onSubmit() {
    if (this.userservice.form.valid) {
      if (!this.userservice.form.get('$key').value) {
      this.userservice.insertUser(this.userservice.form.value);
      } else {
      this.userservice.updateUser(this.userservice.form.value);
      }
      this.userservice.form.reset();
      this.userservice.intializeFromGroup();
      this.notificationService.success(':: Submitted successfully');

    }
  }


    onClose() {
    this.userservice.form.reset();
    this.userservice.intializeFromGroup();

  }



}
