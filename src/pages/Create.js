/** @jsxImportSource theme-ui */
import {Link} from "react-router-dom";

function Create() {
	const input = {
		border: "0",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		padding: "12px",
		gap: "1px",
		width: "100%",
		height: "50px",
		background: "#FFFFFF",
		boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
		borderRadius: "10px",
	}

	return (
		<div id="create" sx={{margin: "20px", display: "flex", flexDirection: "column", alignItems: "center"}}>
			<h1 sx={{width: "100%", textAlign:"left"}} className='highlight-title'>
				🎉 New Event 
			</h1>
			<form sx={{marginTop:"20px", width: "100%", display: "flex", flexDirection: "column", gap: "16px"}}>
				<h4>Details</h4>
				<input sx={input} placeholder="Full Name"></input>
				<input sx={input} placeholder="Event Title"></input>
				<input sx={input} style={{flexDirection: "initial"}} type="date" placeholder=""></input>
				<h4>Location</h4>
				<input sx={input} placeholder="Street address"></input>
				<input sx={input} placeholder="City"></input>
				<div sx={{display: "flex", gap: "8px"}}>
					<input sx={input} placeholder="Post Code"></input>
					<input sx={input} placeholder="State"></input>
				</div>
				<input sx={input} placeholder="Country"></input>
			</form>
			<Link to='/event' sx={{marginTop: "20px"}}>
				<button className='btn'>
					Create event!
				</button>
			</Link>
		</div>
	);
}
  
export default Create;