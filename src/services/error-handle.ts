import request from 'axios';
import { toast } from 'react-toastify';
import { ErrorType } from '../types/error';
import { HTTP_CODE } from '../const';


export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.UNAUTHORIZED:
        if (typeof response.data.detail === 'string') {
          toast.error(response.data.detail);
        }
        break;
      case HTTP_CODE.UNPROCESSABLE_ENTITY:
        if (Array.isArray(response.data.detail)) {
          toast.error(response.data.detail[0].msg);
        }
        break;
    }
  }
}
