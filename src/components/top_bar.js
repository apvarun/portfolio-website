import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/projects">Side-Projects</NavLink>
					<NavLink to="/designs">Designs</NavLink>
					{/* <NavLink to="/contact">Contact</NavLink> */}
				</nav>
			</div>
		)
	}
}