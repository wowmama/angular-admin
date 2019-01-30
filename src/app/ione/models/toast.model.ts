export interface Toast {
  uuid?: string;
  title?: string;
  subTile?: string;
  body: string;
  type?: '' | 'info' | 'warning' | 'success' | 'danger';
  handle?: () => void;
}
