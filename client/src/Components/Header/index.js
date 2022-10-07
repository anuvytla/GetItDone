import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
	faHouse,
	faBell,
	faSquareCheck,
	faDollarSign,
	faCircleInfo,
	faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Auth from "../../utils/auth/auth";

const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<header className="bg-main text-dark mb-4 py-2 display-flex align-center">
			<div className="ml-5 display-flex align-center">
				<Link className="text-main" to="/">
					<i className="fa-solid fa-2x fa-circle-check mx-3 "></i>
					<h1 className="display-inline-block " style={{ fontSize: "2rem" }}>
						Get It Done
					</h1>
				</Link>

				<div className="justify-flex-end">
					{Auth.loggedIn() ? (
						<>
							<NavLink exact="true" activeclassname="active" to="/dashboard">
								<FontAwesomeIcon icon={faHouse} color="#4d4d4e" />
							</NavLink>

							<NavLink
								exact="true"
								activeclassname="active"
								className="about-link"
								to="/about"
							>
								<FontAwesomeIcon icon={faCircleInfo} color="#4d4d4e" />
							</NavLink>

							<NavLink
								exact="true"
								activeclassname="active"
								className="task-link"
								to="/"
							>
								<FontAwesomeIcon icon={faSquareCheck} color="#4d4d4e" />
							</NavLink>

							<NavLink
								exact="true"
								activeclassname="active"
								className="notification-link"
								to="/notifications"
							>
								<FontAwesomeIcon icon={faBell} color="#4d4d4e" />
							</NavLink>

							<NavLink
								exact="true"
								activeclassname="active"
								className="donation-link"
								to="/donation"
							>
								<FontAwesomeIcon icon={faDollarSign} color="#4d4d4e" />
							</NavLink>
							<NavLink
								exact="true"
								activeclassname="active"
								className="about-link"
								to="/newTaskBoard"
							>
								<FontAwesomeIcon icon={faPlusSquare} color="#4d4d4e" />
							</NavLink>
							<button className="btn btn-lg btn-light m-2" onClick={logout}>
								Logout
							</button>
						</>
					) : (
						<>
							<Link className="btn m-2" to="/login">
								Login
							</Link>
							<Link className="btn m-2" to="/signup">
								Signup
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
