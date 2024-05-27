import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

export const showSwal = (text: string, status: any, cb: any) => {
    withReactContent(Swal).fire({
      title: <i>{ text }</i>,
      icon: status,
      preConfirm: () => {
        cb;
        console.log('holis')
      }
    })
  }