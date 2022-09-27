/** @jsxImportSource theme-ui */
import InfoBlock from "../components/InfoBlock";
import img_event_0 from '../img_event_0.png'

function Event() {
	return (
		<div className="container" id="event">
			<div sx={{
				width: "100%",
				paddingBottom: "100%",
				background: `url(${img_event_0})`,
				backgroundPosition: "center",
				backgroundSize: "cover"
			}}></div>
			<div sx={{
				width: "-webkit-fill-available",
				margin: "0 20px"
			}}>
				<h2 sx={{
					marginTop: "11px"
				}}>
					Birthday Bash
				</h2>
				<h4 sx={{marginTop: "4px"}}>Hosted by <span sx={{fontWeight: "700"}}>Elysia</span></h4>
				<div sx={{
					marginTop: "32px",
					display: "flex",
					flexDirection: "column",
					gap: "16px"
				}}>
					<InfoBlock type="time" line1={"18 August 6:00PM"} line2={"19 August 1:00PM"}/>
					<InfoBlock type="location" line1={"Street name"} line2={"Suburb, State, Postcode"}/>
				</div>
			</div>
		</div>
	);
}
  
export default Event;