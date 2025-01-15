// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

// Material Kit 2 React examples
import DefaultReviewCard from 'examples/Cards/ReviewCards/DefaultReviewCard';

function Information() {
  return (
    <MKBox
      component="section"
      py={12}
      style={{ marginBottom: '-14vw' }}
    >
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={10}
          justifyContent="center"
          sx={{ mx: 'auto', textAlign: 'center' }}
        >
          <MKTypography variant="h2">Trusted by over</MKTypography>
          <MKTypography
            variant="h2"
            color="info"
            textGradient
            mb={2}
            mx={2}
          >
            100+ People
          </MKTypography>
          <p style={{ width: '100vw', fontSize: '17px' }} mb={2}>
            I takes great pride in earning the trust of over 100
            individuals who have witnessed my exceptional software
            development Skills. My dedication to delivering
            high-quality softwares solutions, coupled with my
            attention to detail and innovative approach, has garnered
            the trust and confidence of my clients.
          </p>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Farhan Tariq"
              date="1 day ago"
              review="Greate Software Developer, the documentation is excellent and helped me get things done more efficiently."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Designify"
              date="1 week ago"
              review="I found solution to all my  needs from Abdullah Naveed. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Masood Ibrar"
              date="3 weeks ago"
              review="Great product. Helped me cut the time to set up a site. I used the components within instead of starting from scratch. I highly recommend for developers who want to spend more time on the backend!."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
