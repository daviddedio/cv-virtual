import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const CustomAlert = ({mensaje, ntype}) => {
    const types = ['success', 'info', 'warning', 'error' ]
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={types[ntype]}>{mensaje}</Alert>
        </Stack>
    );
}