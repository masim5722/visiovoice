import { Grid, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

/**
 * Breakpoint
 * xs, extra-small: 0px
 * sm, small: 600px
 * md, medium: 900px
 * lg, large: 1200px
 * xl, extra-large: 1536px
 **/
/**
 * Styled component for to home screen wrapper
 */
export const Wrapper = styled(Grid)(({ theme, topbarEnabled, height, padding = true }) => ({
	textAlign: "left",
	paddingLeft: padding && "5%",
	paddingRight: padding && "5%",
	marginBottom: "20px !important",

	// extra small screens specific
	[theme.breakpoints.up("xs")]: {
		...(topbarEnabled && {
			paddingTop: padding && "80px",
			height: height
		})
	},
	// small screens specific
	[theme.breakpoints.up("sm")]: {
		...(topbarEnabled && {
			paddingTop: padding && "80px",
			height: height
		})
	},
	// medium screens specific
	[theme.breakpoints.up("md")]: {
		margin: "0 !important",
		paddingRight: padding && "0 !important",
		paddingLeft: padding && "0 !important",
		height: height || "100vh",
		paddingTop: 0
	},
	// large screens specific
	[theme.breakpoints.up("lg")]: {
		margin: "0 !important",
		paddingRight: padding && "10rem",
		paddingLeft: padding && "10rem",
		height: height || "100vh",
		paddingTop: 0
	}
}))


export const HomeScreenWrapper = styled(Wrapper)`
	padding-bottom: 80px;
	// medium screens specific
	${props => props.theme.breakpoints.up("md")} {
		padding-top: 80px;
		padding-right: 5% !important;
		padding-left: 5% !important;
	}
`

export const Heading = styled(Typography)`
	font-size: 4rem;
`

export const Description = styled(Typography)`
	font-size: 1rem;
    padding-right: 2rem;
`