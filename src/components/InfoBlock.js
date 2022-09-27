/** @jsxImportSource theme-ui */
import arrowSVG from '../arrow.svg';

function InfoBlock(props) {

	return (
		<div sx={{display: "flex", gap: "20px"}}>
			<div sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				padding: "12px",
				gap: "1px",
				width: "48px",
				height: "48px",
				background: "#FFFFFF",
				boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
				borderRadius: "10px",
			}}></div>
			
			<div sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly"
			}}>
				<h4 sx={{
					color: 'primary1',
					width: "100%",
					fontFamily: "'Helvetica'",
					fontStyle: "normal",
					fontWeight: "400",
					fontSize: "14px",
					lineHeight: "16px",
				}}>
					{props.line1}
				</h4>

				<h4 sx={{
					color: 'neutral1',
					width: "100%",
					fontFamily: "'Helvetica'",
					fontStyle: "normal",
					fontWeight: "400",
					fontSize: "14px",
					lineHeight: "16px",
				}}>
					to <span sx={{fontWeight: "700"}}>{props.line2}</span> UTC +10
				</h4>
			</div>

			<div sx={{
					width: "14px",
					display: "flex",
					alignItems: "center",
					marginLeft: "auto"
				}}>
					<img src={arrowSVG}></img>
			</div>
		</div>
	)
}

export default InfoBlock;