import { useSnackbar } from 'notistack';


export default function useNotification() {

    const { enqueueSnackbar } = useSnackbar()


    const notificate = (messagge, options = null) => {
        enqueueSnackbar(messagge, options)
    }

    return { notificate }
}