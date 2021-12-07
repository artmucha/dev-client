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

const Login = () => {
  return (
    <Container maxWidth="sm">
      <ContentStyle>
        <Stack sx={{ mb: 5 }}>
          <Typography variant="h4" gutterBottom>Zaloguj się</Typography>
        </Stack>

        <AuthForm type="login" />

        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Nie masz jeszcze konta?&nbsp;
          <Link underline="none" variant="subtitle2" component={NextLink} href="/rejestracja">
            Zarejestruj się!
          </Link>
        </Typography>
      </ContentStyle>
    </Container>
  );
};

export default Login;