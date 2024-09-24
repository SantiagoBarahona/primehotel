import { SnackbarProvider as Snackbars } from 'notistack';
import { IconButton } from '@mui/material';
import { Fragment } from 'react';
import { closeSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';

export default function SnackbarProvider({ children }) {


    const action = snackbarId => (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => closeSnackbar(snackbarId)}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    )

    return (
        <Snackbars
            maxSnack={3}
            anchorOrigin={{
                horizontal: "right",
                vertical: "bottom"
            }}
            autoHideDuration={3000}
            action={action}
        >{children}
        </Snackbars>
    )
}