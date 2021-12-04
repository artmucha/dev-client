import Link from 'next/link';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Home page
        </Typography>
        <Link href="/about">
          Go to the next page
        </Link>
      </Box>
    </Container>
  );
};

export default Home;