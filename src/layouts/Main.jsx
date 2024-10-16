// rrd imports
import { Outlet, useLoaderData } from "react-router-dom";

// import assets
import wave from "../assets/wave.svg";

//  helper functions
import { fetchData } from "../helpers";

// components
import Nav from "../components/Nav";

// loader
export function mainLoader() {
	const userName = fetchData("userName");
	return { userName };
}

const Main = () => {
	const { userName } = useLoaderData();

	return (
		<div className="layout">
			<Nav userName={userName} />
			<main>
				<Outlet />
			</main>
			<img src={wave} alt="waveFooter" />
		</div>
	);
};
export default Main;
