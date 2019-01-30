export interface Toast {
  uuid?: string;
  title?: string;
  subTile?: string;
  body: string;
  handle?: () => void;
}
