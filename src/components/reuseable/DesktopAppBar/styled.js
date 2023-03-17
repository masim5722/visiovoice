import { AppBar, Typography } from "@mui/material"
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
 * Styled component for to desktop app bar
 */
export const DesktopBarContainer = styled(AppBar)`
	height: 56px !important;
	background-color: #ffffff !important;
	box-shadow: none !important;
	padding-left: 5%;
	padding-right: 5%;
	z-index: 99;

	// medium screens specific
	${props => props.theme.breakpoints.down("md")} {
		display: none;
	}
`
export const DesktopTopBarLogo = styled("img")`
	width: 140px;
	position: absolute;
	${'' /* max-width: 10%; */}

`
export const DesktopBarMenu = styled("div")`
	display: flex;
	align-items: center;
`
export const DesktopBarLink = styled(Typography)`
	color: ${props => (props.active ? "#008485" : "#808080")};
	display: flex;
	align-items: center;
	text-decoration: none;
	position: relative;
	margin: 0 2rem;
	height: 100%;
	cursor: pointer;
	font-weight: 450;
	font-size: 16px;

	&.active {
		color: ;
	}
	${props =>
		props.active &&
		`&.MuiTypography-root:after {
		${"" /* border-bottom: 1px solid #008485; */}
		content: "";
		position: absolute;
		left: 0;
		bottom: 0;
		top: 10px;
		height: 1rem;
		width: 100%;
		display: block;
		border-bottom: 1px solid #008485;
	}`}
`
