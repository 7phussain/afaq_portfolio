// react-router-dom components
import { Link } from 'react-router-dom';

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types';

// @mui material components
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKTypography from 'components/MKTypography';

import logo from 'assets/images/ARTANISTICS-nav-bar.png';

function DefaultFooter({ content }) {
  const { brand, socials, copyright } = content;

  return (
    <MKBox component="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}
            item
            xs={12}
            md={3}
            sx={{ ml: 'auto' }}
          >
            <MKBox
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}
            ></MKBox>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ textAlign: 'center', my: 3, mt: -6 }}
          >
            <p style={{ fontSize: '14px' }}>
              {' '}
              All rights reserved.@CopyRight by Afaq Ahmad
            </p>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  ).isRequired,
};

export default DefaultFooter;
