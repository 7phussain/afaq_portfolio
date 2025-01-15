// @mui material components
import Grid from '@mui/material/Grid';

// Material Kit 2 React components
import MKBox from 'components/MKBox';
import MKInput from 'components/MKInput';
import MKButton from 'components/MKButton';
import MKTypography from 'components/MKTypography';

// Material Kit 2 React examples
import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import DefaultFooter from 'examples/Footers/DefaultFooter';

// Routes
import routes from 'routes';
import footerRoutes from 'footer.routes';

import qrcode from 'assets/images/QrCode.jpeg';

// Image
import bgImage from 'assets/images/contactUs.jpg';
import { useState } from 'react';
import '../../../StylingSheets/contactus.css';
function ContactUs() {
  const [name, setName] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, seterrorMessage] = useState('');

  const [completeMessage, setCompleteMessage] = useState('');

  const generateMessage = () => {
    setCompleteMessage(
      `Hi Afaq, My name is ${name}. This is what i want to say you: ${Message}`
    );
  };

  const checkValidation = () => {
    if (name == '' || name == null) {
      seterrorMessage('kindly Enter your Name');
      return false;
    } else if (Message == '' || Message == null) {
      seterrorMessage('kindly Enter your Message');
      return false;
    }
    seterrorMessage('');
    return true;
  };
  const callApi = () => {
    // Appending the phone number to the URL
    let url = `https://web.whatsapp.com/send?phone=+923170683216`;

    // Appending the message to the URL by encoding it
    url += `&text=${encodeURI(completeMessage)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
    window.open(url);
  };
  const sendMessage = (e) => {
    e.preventDefault();
    if (checkValidation() == true) {
      generateMessage();
      callApi();
    }
  };
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: 'external',
            route:
              'https://www.creative-tim.com/product/material-kit-react',
            label: 'free download',
            color: 'info',
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <img
          style={{
            marginLeft: '80px',
            marginTop: '60px',
            borderRadius: '40px',
          }}
          className="img-contact-us"
          src={bgImage}
          alt="bgimg"
        />
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: 'auto', lg: 6 }}
          mr={{ xs: 'auto', lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Contact us
              </MKTypography>
            </MKBox>
            <div
              style={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                margin: '20px',
              }}
            >
              <h5
                style={{
                  fontSize: '15px',
                }}
              >
                Scan Qr Code for Whatsapp Chat
              </h5>
              <img
                src={qrcode}
                style={{
                  textAlign: 'center',
                  height: '120px',
                  width: '120px',
                  marginTop: '10px',
                }}
                alt="Qr COde"
              />
            </div>

            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For any query or placing order, please contact on
                whatsapp number ( +92 317 0683216) for effective
                communication.
              </MKTypography>

              <MKBox
                width="100%"
                component="form"
                method="post"
                autoComplete="off"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="text"
                      variant="standard"
                      label="Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      onChange={(e) => setName(() => e.target.value)}
                      value={name}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}></Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      placeholder="write message here... "
                      InputLabelProps={{ shrink: true }}
                      multiline
                      onChange={(e) =>
                        setMessage(() => e.target.value)
                      }
                      value={Message}
                      fullWidth
                      rows={3}
                    />
                  </Grid>
                </Grid>
                <p
                  style={{
                    textAlign: 'center',
                    fontSize: '14px',
                    color: 'red',
                    marginTop: '20px',
                    marginBottom: '-20px',
                  }}
                >
                  {errorMessage}
                </p>
                <Grid
                  container
                  item
                  justifyContent="center"
                  xs={12}
                  mt={5}
                  mb={2}
                >
                  <MKButton
                    onClick={(e) => sendMessage(e)}
                    style={{
                      color: 'white',
                      backgroundColor: '#267FEA',
                    }}
                  >
                    Send Message on Whatsapp
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
