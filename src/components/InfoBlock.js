/** @jsxImportSource theme-ui */
import arrowSVG from '../arrow.svg';
import calSVG from '../calendar.svg';
import locationSVG from '../location.svg';

function InfoBlock(props) {
	const typeIsDate = props.type === "time"

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
			}}>
				{typeIsDate ? (
					<img src={calSVG}></img>
				) : (
					<img src={locationSVG}></img>
				)}
			</div>
			
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
					fontWeight: "700",
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
					{typeIsDate ? (
						<>
							to <span sx={{fontWeight: "700"}}>{props.line2}</span> UTC +10
						</>
					) : (
						<>
							{props.line2}
						</>
					)}
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