import { Link as NextLink } from 'next/link';
import { styled } from '@mui/material/styles';
import { Stack, Link, Container, Typography } from '@mui/material';

import AuthForm from 'components/AuthForm';

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

const Register = () => {
  return (
    <Container maxWidth="sm">
      <ContentStyle>
        <Stack sx={{ mb: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>Zarejestruj się</Typography>
        </Stack>

        <AuthForm type="register" apiURL="http://localhost:5000/api/users/signup" />

        <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
          Rejestrując się akceptujesz&nbsp;
          <Link underline="always" sx={{ color: 'text.primary' }}>
            Regulamin
          </Link>
          &nbsp;oraz&nbsp;
          <Link underline="always" sx={{ color: 'text.primary' }}>
            Politykę Prywatności&nbsp;
          </Link>
          serwisu.
        </Typography>

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Masz już konto?&nbsp;
          <Link underline="none" variant="subtitle2" component={NextLink} href="/logowanie">
            Zaloguj się!
          </Link>
        </Typography>
      </ContentStyle>
    </Container>
  );
};

export default Register;