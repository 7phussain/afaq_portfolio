// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from 'components/MKBox';

import AF from 'assets/images/afaqImage.jpg';
// Material Kit 2 React examples
import DefaultInfoCard from 'examples/Cards/InfoCards/DefaultInfoCard';
import CenteredBlogCard from 'examples/Cards/BlogCards/CenteredBlogCard';

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    title="Reliable"
                    description="
                    Indeed, My prides itself on being a reliable partner for all your needs. I understand the importance of reliability when it comes to delivering high-quality softwares"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    title="Affordable"
                    description="I proud to offer competitive and affordable pricing for our software services. I believe in making high-quality design accessible to a wide range of clients, regardless of their budget constraints"
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    title="Skillfull"
                    description="My main focus is on delivering high-quality and creative solutions. My team of skilled developers is dedicated to pushing the boundaries of creativity and craftsmanship in every project we undertake."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    title="Main Focus on Customer Satisfaction"
                    description="Customer satisfaction is my main focus. I believe that a successful project goes beyond delivering a visually appealing design—it involves understanding and meeting our clients' unique needs and exceeding their expectations."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            lg={4}
            sx={{ ml: 'auto', mt: { xs: 3, lg: 0 } }}
          >
            <CenteredBlogCard
              image={AF}
              title="Afaq Ahmad"
              description="I am dedicated software engineer with a passion for crafting elegant solutions. With a strong foundation in coding and a keen eye for detail, I strive to deliver innovative and efficient software solutions that drive positive impact and exceed expectations. Combining my technical expertise with a collaborative mindset, I am driven to continuously learn and adapt in order to tackle complex challenges and contribute to the ever-evolving field of software engineering."
              action={{
                type: 'internal',
                route: '/pages/landing-pages/contact-us',
                color: 'info',
                label: 'Contact me',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
