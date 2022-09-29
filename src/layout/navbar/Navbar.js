import React from "react";
import MainButton from "../../components/button/MainButton";
import logo from "../../images/logo.png";

import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-one border-bottom border-color-dark mainNav'>
			<div className='container-xxl'>
				<a className='navbar-brand d-flex align-items-center m-0' href='#'>
					<img src={logo} alt='Logo' />
					<h2>localtrade</h2>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
						<li className='nav-item dropdown'>
							<a
								className='nav-link text-color dropdown-toggle'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Buy Crypto
							</a>
							<ul className='dropdown-menu'>
								<li>
									<a className='dropdown-item' href='#'>
										Buy Crypto
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Sell Crypto
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link text-color dropdown-toggle'
								href='#'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'
							>
								Finance
							</a>
							<ul className='dropdown-menu'>
								<li>
									<a className='dropdown-item' href='#'>
										Learn Finance
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='#'>
										Go to Blog
									</a>
								</li>
							</ul>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-color' href='#'>
								Listing
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-color' href='#'>
								Academy
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-color' href='#'>
								About us
							</a>
						</li>
					</ul>

					<ul className='navbar-nav ms-auto mb-2 mb-lg-0 lastMenu'>
						<li className='nav-item border-start border-color-dark'>
							<a className='nav-link text-color' href='#'>
								Listing
							</a>
						</li>
						<li className='nav-item border-start border-color-dark'>
							<a className='nav-link text-color' href='#'>
								Academy
							</a>
						</li>
						<li className='nav-item border-start border-color-dark'>
							<a className='nav-link text-color' href='#'>
								About us
							</a>
						</li>
						<li className='nav-item'>
							<MainButton>Log In</MainButton>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
