import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export const HalfRating = ({puntos}) => {
    return (
        <Stack spacing={1}>
            <Rating name="simple-controlled" value={puntos} precision={0.5} readOnly size="large" />
        </Stack>
    );
}