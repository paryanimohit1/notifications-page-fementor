export interface Notification {
  notification_id: number;
  name: string;
  action: string;
  actionTakenOn?: string;
  time: string;
  avatar: string;
  supportingText?: string;
  supportingImage?: string;
  isUnread: boolean;
  isGroup?: boolean;
}
