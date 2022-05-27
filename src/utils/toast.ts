export enum ToastType {
  'SUCCESS', 'ERROR', 'INFO'
}

type Toast = {
  title: string;
  type: ToastType;
  message: string;
}

export function makeToast(params: Toast) {
  console.log({
    ...params
  })
}