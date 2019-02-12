
export interface Alert {
  title?: string;
  body: string;
  buttons?: Array<{
    text: string,
    cssClass?: string,
    handler?: () => void
  }>;
  dismiss?: (type: string) => void;
  cancle?: () => void;
}
