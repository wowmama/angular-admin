export interface IonePageOption {
  name: string;
  breadcrumbs: string[];
}

export function IonePage(options: IonePageOption) {
  return (target: any) => {
    target.ionePageDecorator = () => {
      return { ...options };
    };
  };
}
