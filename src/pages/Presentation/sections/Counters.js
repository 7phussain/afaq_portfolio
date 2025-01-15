// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// Material Kit 2 React components
import MKBox from 'components/MKBox';

// Material Kit 2 React examples
import DefaultCounterCard from 'examples/Cards/CounterCards/DefaultCounterCard';

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: 'auto' }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={6}
              suffix="+"
              title="Services"
              description="I take pride in offering a diverse range of 6+ Software services to cater to all your creative needs."
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider
              orientation="vertical"
              sx={{ display: { xs: 'none', md: 'block' }, mx: 0 }}
            />
            <DefaultCounterCard
              count={100}
              suffix="+"
              title="Projects"
              description="
              I has successfully completed over 100 projects. My expertise extends beyond the digital realm, encompassing a wide range of offline Software projects."
            />
            <Divider
              orientation="vertical"
              sx={{ display: { xs: 'none', md: 'block' }, ml: 0 }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={3}
              suffix="+"
              title="Experience"
              description="With an impressive track record of three years in the Software Development field, I bring a wealth of experience and expertise to every project."
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
