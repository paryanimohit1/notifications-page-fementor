import { Component, Input } from '@angular/core';
import { Notification } from '../interfaces';

@Component({
  selector: 'notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
})
export class NotificationItemComponent {
  @Input('notificationData') notification!: Notification;
}
