export interface IonePage {
  name: string;
  breadcrumbs: string[];
}

export function ionePage(options: IonePage) {
  return (target: any) => {
    target.ionePageDecorator = () => {
      return { ...options };
    };
  };
}
