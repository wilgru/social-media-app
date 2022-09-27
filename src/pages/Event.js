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
					<InfoBlock line1={"placeholder1"} line2={"placeholder2"}/>
					<InfoBlock line1={"placeholder1"} line2={"placeholder2"}/>
				</div>
			</div>
		</div>
	);
}
  
export default Event;