export interface Toast {
  uuid?: string;
  title?: string;
  subTitle?: string;
  body: string;
  type?: '' | 'info' | 'warning' | 'success' | 'danger';
  handle?: () => void;
}
