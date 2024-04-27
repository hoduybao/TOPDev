export interface NotificationType {
  id?: string | number;
  title: string;
  description: string;
  timestamp: string | any;
  isSeen: boolean;
  url: string;
}
