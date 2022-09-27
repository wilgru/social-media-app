import {
  Link
} from "react-router-dom";

function Homepage() {
	return (
		<div className="container" id="homepage">
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
			<div id="homepage-preview-img"></div>
			<Link to='/create'>
				<button className='btn' id='create-event-btn'>
					🎉 Create my event
				</button>
			</Link>

		</div>
	);
}
  
export default Homepage;