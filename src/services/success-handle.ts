import { toast } from 'react-toastify';
import { SuccessType } from '../types/success';


export const successHandle = (data: SuccessType): void => {
  const { username } = data;
  console.log(username);

  const options = {
    type: toast.TYPE.SUCCESS,
    hideProgressBar: false,
    position: toast.POSITION.BOTTOM_RIGHT,
    pauseOnHover: true,
    progress: 0.2
  };

  if (username) {
    toast.info(`User ${username} has register. Please LogIn to continue`, options);
  }
}
