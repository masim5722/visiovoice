import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import DesktopAppBar from '../../components/reuseable/DesktopAppBar/DesktopAppBar'
import { PRIVACY_POLICY_LABEL } from '../../constants/privacyPolicyConstants'
import { Heading, HomeScreenWrapper } from '../Home/style'

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <DesktopAppBar showSocialIcons={false} />

            {/* Add your Home page content/components here */}
            <HomeScreenWrapper
                container
                spacing={0}
                topbarEnabled={true}
                height={"auto"}
            >
                {/* Page title */}
                <Grid md={12} lg={12}>
                    <Typography fontSize={"32px"} fontWeight={600}>Privacy Policy</Typography>

                </Grid>
                {/* Left Box */}
                <Grid
                    md={12}
                    lg={12}
                // sx={{ display: "flex", justifyContent: "flex-end" }}
                >

                    <Typography>Thank you for using our app! We take privacy seriously, and we want to be transparent about how we collect, use, and protect your personal information. This Privacy Policy explains our practices regarding the information we collect from you when you use our app, and how we use and disclose that information.</Typography>

                    <Typography sx={{ marginTop: "8px" }} fontWeight={600}>1. Information We Collect</Typography>
                    <Typography>
                        When you use our app, we may collect the following information:
                    </Typography>
                    <Typography> - Your camera feed: We access your device's camera to detect objects and their counts.</Typography>
                    <Typography> - Device information: We may collect information about your device, such as its model, operating system, and IP address.</Typography>
                    <Typography> - Usage information: We may collect information about how you use our app, such as the features you use and the actions you take.</Typography>
                    <Typography sx={{ marginTop: "8px" }} fontWeight={600}>2. How We Use Your Information</Typography>

                    <Typography>We may use the information we collect from you to:</Typography>
                    <Typography> - Provide and improve our app: We use your camera feed to detect objects and their counts.</Typography>
                    <Typography> - Personalize your experience: We may use your usage information to personalize your experience within our app.</Typography>
                    <Typography> - Communicate with you: We may use your information to respond to your inquiries, provide customer support, or send you marketing communications.</Typography>
                    <Typography> - Protect our rights and interests: We may use your information to investigate and prevent fraud, abuse, or other unlawful activities.</Typography>

                    <Typography sx={{ marginTop: "8px" }} fontWeight={600}>3. How We Share Your Information</Typography>
                    <Typography>We do not sell or rent your personal information to third parties.</Typography>


                    <Typography sx={{ marginTop: "8px" }} fontWeight={600}>4. Your Rights and Choices</Typography>
                    <Typography>You have certain rights regarding your personal information, including the right to access, correct, and delete your information. You may also have the right to object to or restrict certain types of processing. Please contact us if you wish to exercise any of these rights.</Typography>


                </Grid>
            </HomeScreenWrapper>

            <Grid sx={{ position: "absolute", width: "100%", bottom: 10 }}>
                <Grid
                    md={12}
                    lg={12}
                    sx={{ height: "1px", backgroundColor: "grey", margin: "auto", width: '90%' }}
                ></Grid>
                <DesktopAppBar showSocialIcons={true} />
            </Grid>
        </div>


    )
}

export default PrivacyPolicy