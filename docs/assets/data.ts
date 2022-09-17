import { Notification } from "src/app/interfaces";

export const notificationData: Notification[] = [
  {
    notification_id: 1,
    name: 'Mark Webber',
    action: 'reacted to your recent post',
    actionTakenOn: 'My first tournament today!',
    time: '1m ago',
    avatar: 'assets/images/avatar-mark-webber.webp',
    isUnread: true,
  },
  {
    notification_id: 2,
    name: 'Angela Gray',
    action: 'followed you',
    time: '5m ago',
    avatar: 'assets/images/avatar-angela-gray.webp',
    isUnread: true,
  },
  {
    notification_id: 3,
    name: 'Jacob Thompson',
    action: 'has joined your group',
    actionTakenOn: 'Chess Club',
    time: '1 day ago',
    avatar: 'assets/images/avatar-jacob-thompson.webp',
    isUnread: true,
    isGroup: true
  },
  {
    notification_id: 4,
    name: 'Rizky Hasanuddin',
    action: 'sent you a private message',
    time: '5 days ago',
    supportingText:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    avatar: 'assets/images/avatar-rizky-hasanuddin.webp',
    isUnread: false,
  },
  {
    notification_id: 5,
    name: 'Kimberly Smith',
    action: 'commented on your picture',
    time: '1 week ago',
    avatar: 'assets/images/avatar-kimberly-smith.webp',
    supportingImage: 'assets/images/image-chess.webp',
    isUnread: false,
  },
  {
    notification_id: 6,
    name: 'Nathan Peterson',
    action: 'reacted to your recent post',
    actionTakenOn: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    avatar: 'assets/images/avatar-nathan-peterson.webp',
    isUnread: false,
  },
  {
    notification_id: 7,
    name: 'Anna Kim',
    action: 'left the group',
    actionTakenOn: 'Chess Club',
    time: '2 weeks ago',
    avatar: 'assets/images/avatar-anna-kim.webp',
    isUnread: false,
    isGroup: true
  },
]
