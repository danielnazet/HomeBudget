import React from "react";
// assets
import logomark from "../assets/logomark.svg";

//heroicons:
import { TrashIcon } from "@heroicons/react/24/solid";

// rrd impports
import { Form, NavLink } from "react-router-dom";

const Nav = ({ userName }) => {
	return (
		<nav>
			<NavLink to="/" aria-label="Go to home page">
				<img src={logomark} alt="logo" height={30} />
				<span>HomeBudget</span>
			</NavLink>
			{userName && (
				<Form
					method="post"
					action="/logout"
					onSubmit={(event) => {
						if (!confirm("Delete user and all data?")) {
							event.preventDefault();
						}
					}}
				>
					<button type="submit" className="btn btn--warning">
						<span>Delete User</span>
						<TrashIcon width={30} />
					</button>
				</Form>
			)}
		</nav>
	);
};

export default Nav;
