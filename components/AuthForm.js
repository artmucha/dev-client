import {
  Stack,
  TextField,
  FormControl,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

const AuthForm = ({type}) => {

  return (
    <FormControl>
      <Stack spacing={3}>
        <TextField
          fullWidth
          autoComplete="username"
          type="email"
          label="Email"
          error={Boolean(false)}
          helperText={'touched.email && errors.email'}
        />

        <TextField
          fullWidth
          autoComplete="current-password"
          type="password"
          label="Hasło"
          error={Boolean(false)}
          helperText={'text'}
        />
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        // loading={isSubmitting}
      >
        {type === 'login' ? 'Zaloguj' : 'Zarejestruj'}
      </LoadingButton>
    </FormControl>
  );
};

export default AuthForm;