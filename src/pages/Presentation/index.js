// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';
import { Icon } from '@iconify/react';
import MKSocialButton from 'components/MKSocialButton';

// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';

// Presentation page sections
import Counters from 'pages/Presentation/sections/Counters';
import Testimonials from 'pages/Presentation/sections/Testimonials';

// Routes
import routes from 'routes';
import footerRoutes from 'footer.routes';

// Images
import bgImage from 'assets/images/bgg2.jpg';
import Services from 'components/Services';
import Tools from 'components/Tools';
import DBI from '../../assets/images/design-beyond-imagination.png';

import '../../StylingSheets/Presentation.css';
function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: 'external',
          route: '',
          label: 'free download',
          color: 'info',
        }}
        sticky
      />
      <MKBox
        width="100%"
        className="top"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) => `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={7}
            justifyContent="center"
            mx="auto"
          >
            {/*   <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Artanistics
            </MKTypography> */}
            {/*   <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Welcome to our world of captivating visuals, where artistry and design converge to
              create unforgettable experiences.
            </MKTypography> */}
          </Grid>
        </Container>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({
            palette: { white },
            functions: { rgba },
          }) => rgba(white.main, 0.8),
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />

        <Services />

        <Tools />

        <Testimonials />

        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={5}
                ml="auto"
                className="bottom"
                sx={{ textAlign: { xs: 'center', lg: 'left' } }}
              >
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  I deliver the best Software Services
                </MKTypography>
              </Grid>
              <Grid
                className="bottom2"
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: 'auto' }}
                mr={{ xs: 0, lg: 'auto' }}
                sx={{ textAlign: { xs: 'center', lg: 'right' } }}
              >
                <MKSocialButton
                  component="a"
                  style={{ margin: '12px' }}
                  href="https://www.fiverr.com/himsienkhan"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                  className="bottombtns"
                >
                  <Icon icon="jam:fiverr" />
                  &nbsp;Fiver
                </MKSocialButton>
                <MKSocialButton
                  className="bottombtns"
                  style={{ margin: '12px' }}
                  component="a"
                  href="https://www.linkedin.com/in/afaq-ahmad-72519727a"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <Icon icon="simple-icons:Linkedin" />
                  &nbsp;Linkedin
                </MKSocialButton>
                <MKSocialButton
                  className="bottombtns"
                  component="a"
                  href="/"
                  target="_blank"
                  color="pinterest"
                  style={{ margin: '12px' }}
                >
                  <Icon icon="arcticons:freelancer-upwork" />
                  &nbsp;UpWork
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
