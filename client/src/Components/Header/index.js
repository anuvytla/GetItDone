import React from "react";
import Tippy from '@tippyjs/react';
import { Link, NavLink } from "react-router-dom";
import {
	faHouse,
	faBell,
	faSquareCheck,
	faDollarSign,
	faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Auth from "../../utils/auth/auth";

const Header = () => {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<header className="bg-main text-dark mb-5 pt-2">
			<div className="ml-5 display-flex align-center justify-space-around">
				<Link className="text-main" to="/">
					<i className="fa-solid fa-2x fa-circle-check mx-3 "></i>
					<h1
						className="display-inline-block "
						style={{ fontSize: "2rem", fontFamily: "Kalam, cursive" }}
					>
						Get It Done
					</h1>
				</Link>

				<div className="display-flex justify-flex-end">
					{Auth.loggedIn() ? (
						<>
							<Tippy content="Home">
								<NavLink exact="true" activeclassname="active" to="/dashboard">
									<FontAwesomeIcon
										icon={faHouse}
										color="#007f5f"
										size="2x"
										className="mx-2"
									/>
								</NavLink>
							</Tippy>

							<Tippy content="About">
								<NavLink
									exact="true"
									activeclassname="active"
									className="about-link"
									to="/about"
								>
									<FontAwesomeIcon
										icon={faCircleInfo}
										color="#007f5f"
										size="2x"
										className="mx-2"
									/>
								</NavLink>
							</Tippy>

							<Tippy content="Home">
								<NavLink
									exact="true"
									activeclassname="active"
									className="task-link"
									to="/kanban/aaaaaaaaaaaaaaaaaaaaaaaa"
								>
									<FontAwesomeIcon
										icon={faSquareCheck}
										color="#007f5f"
										size="2x"
										className="mx-2"
									/>
								</NavLink>
							</Tippy>

							<Tippy content="Notification">
								<NavLink
									exact="true"
									activeclassname="active"
									className="notification-link"
									to="/notifications"
								>
									<FontAwesomeIcon
										icon={faBell}
										color="#007f5f"
										size="2x"
										className="mx-2"
									/>
								</NavLink>
							</Tippy>

							<Tippy content="Donate">
								<NavLink
									exact="true"
									activeclassname="active"
									className="donation-link"
									to="/donation"
								>
									<FontAwesomeIcon
										icon={faDollarSign}
										color="#007f5f"
										size="2x"
										className="mx-2"
									/>
								</NavLink>
							</Tippy>
							<button className="btn mb-2 ml-4 m-top" onClick={logout}>
								Logout
							</button>
						</>
					) : (
						<>
							<div className="topnav-right">
								<Link className="btn m-2" to="/login">
									Login
								</Link>
								<Link className="btn m-2" to="/signup">
									Signup
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
