import { Component, OnInit } from '@angular/core';
import { Notification } from 'src/app/interfaces';
import { notificationData } from 'src/assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  unreadNotificationCount: number = 3;
  notificationsList: Notification[] = notificationData;

  ngOnInit() {
    this.updateUnreadNotificationCount(
      this.notificationsList.filter((n) => n.isUnread).length
    );
  }

  markAllAsRead() {
    this.notificationsList.forEach((n) => (n.isUnread = false));
    this.updateUnreadNotificationCount(0);
  }

  markAsRead(notification_id: number) {
    if (notification_id) {
      this.notificationsList.find(
        (n) => n.notification_id === notification_id
      )!.isUnread = false;
    }
  }

  updateUnreadNotificationCount(count: number = 0) {
    this.unreadNotificationCount = count;
  }
}
