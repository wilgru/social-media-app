/** @jsxImportSource theme-ui */
import {Link} from "react-router-dom";
import img_home_0 from '../img_home_0.png'


function Homepage() {
	return (
		<div className="container" sx={{marginTop: "94px", gap: "10px"}}>
			<header>
				<h1>
					Imagine if <br></br> 
					<span className='highlight-title'>Snapchat</span> <br></br>
					had events.
				</h1>
				<h3>
					Easily host and share events with your friends across any social media.
				</h3>
			</header>
			<div sx={{
				  background: `url(${img_home_0})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					width: "165.63px",
					height: "292px",
					filter: "drop-shadow(0px 0px 33.1283px rgba(0, 0, 0, 0.05))",
					borderRadius: "24.8462px"
			}}></div>
			<Link to='/create'>
				<button className='btn' sx={{width: "187px", height: "50px"}}>
					🎉 Create my event
				</button>
			</Link>

		</div>
	);
}
  
export default Homepage;