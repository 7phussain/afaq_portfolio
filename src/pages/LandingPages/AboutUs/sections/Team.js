// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

import afaqImage from '../../../../assets/images/afaqImage.jpg';

// Material Kit 2 React examples
import HorizontalTeamCard from 'examples/Cards/TeamCards/HorizontalTeamCard';

// Images
import team1 from 'assets/images/female.png';
import team2 from 'assets/images/male.jpeg';
function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              The Executive Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              There&apos;s nothing I really wanted to do in life that
              I wasn&apos;t able to get good at. That&apos;s my skill.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={afaqImage}
                name="Afaq Ahmad"
                position={{
                  color: 'info',
                  label: 'Sofware Engineer',
                }}
                description="I write Code to transform ideas into reality. With a passion for problem-solving and an eye for clean syntax, I strive to create elegant and efficient software solutions.'"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
