import React from 'react';
import "./Footer.css";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className=''>
			<div className='footer flex flex-row w-screen bg bg-teal-100'>
				<div className='footerRights w-1/2'>
					<image src="" alt="logo" />
					<h3 className='font-bold text-4xl'>ALL RIGHTS RESERVED</h3>
					<div className='footerRightsButton flex justify-center items-center'>
						<button className=''>
							<Link to="/contact">
								Contact Us
							</Link>
						</button>
					</div>
				</div>


				<div className='footerInfo w-1/2'>
					<h5>Made with ❤️ by</h5>

					<div className='contactInfo flex flex-column'>
						<p>Anshul Singla</p>
						<div className='socialIcons flex flex-column'>
							<a href='https://github.com/anshul1265' target='blank'>
								<BsGithub className='github' />
							</a>
							<a href="https://www.instagram.com/anshul_1265/" target='blank'>
								<BsInstagram />
							</a>
							<a href="https://www.linkedin.com/in/anshul-singla-38798121b/" target='blank'>
								<BsLinkedin />
							</a>
						</div>
					</div>

					<div className='contactInfo flex flex-column'>
						<p>Anshul Singla </p>
						<div className='socialIcons flex flex-column'>
							<a href='https://github.com/anshul1265' target='blank'>
								<BsGithub />
							</a>
							<a href="https://www.instagram.com/anshul_1265/" target='blank'>
								<BsInstagram />
							</a>
							<a href="https://www.linkedin.com/in/anshul-singla-38798121b/" target='blank'>
								<BsLinkedin />
							</a>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Footer