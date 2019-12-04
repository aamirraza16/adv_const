import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import whoWeAreService from '../services/front/who-we-are.service';

function WhoWeArePage() {
	const [whoWeAre, setWhoWeAre] = useState();
	useEffect(() => {
		whoWeAreService.getAll().then(res => setWhoWeAre(res[0]));
	}, [])
	return (
		<div style={{ background: "#fff" }}>
			<HeaderComponent topclassNameName={"relative-top"} />
			<main style={{ background: "#fff", marginBottom:'40px' }}>
				{whoWeAre ? 
				<div className="container">
					<div className="row contactUs-text-container">
						<div className="col-sm-12">
							<img src={whoWeAre.banner_image} className="who-we-are-img-1"/>
							<h3 className="h3-responsive aboutus font-weight-bold">{whoWeAre.primary_title}</h3>
							<p className='font-weight-bold' >
								{whoWeAre.primary_description}
							</p>

						</div>
					</div>
					<div className="row">
						<div className="col-md-5 col-sm-12 box tex-box" style={{ marginTop: "50px" }}>
							<div className="inner">
								<h3>{whoWeAre.ceo_message}</h3>
								<a href="#">CEO</a>
							</div>
						</div>
						<div className="col-md-7 col-sm-12 p-0" style={{ marginTop: "50px" }}>
							<img src={whoWeAre.ceo_message_image} className="img-fluid" />
						</div>
					</div>

					<div className="row contactUs-text-container">
						<div className="col-md-12 col-sm-12">
							<h3 className="h3-responsive aboutus font-weight-bold">{whoWeAre.secondary_title}</h3>
							<p className='font-weight-bold' >
								{whoWeAre.secondary_description}
							</p>

						</div>
					</div>

					<div className="row mb-5">
						<div className="col-md-6 col-sm-12 box" style={{ marginTop: "100px" }}>
							<img src={whoWeAre.work_with_us_image} className="img-fluid" />
						</div>

						<div className="col-md-6 col-sm-12 p-0" style={{ marginTop: "100px" }}>
							<div className="inner">
								<h6 className='pl-5' >Work With Us</h6>
								<h3 className="h3-responsive font-weight-bold pl-5 pr-5">{whoWeAre.work_with_us_title}</h3>
								<a href="#" className='pl-5 mt-3' >Apply now</a>
							</div>
						</div>
					</div>

				</div> : null}
			</main>
			<br/>
			<br/>
			<FooterComponent />
		</div>
	)
}

export default WhoWeArePage
