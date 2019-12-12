import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import whoWeAreService from '../services/front/who-we-are.service';
import { Link } from 'react-router-dom';

function WhoWeArePage() {
	const [whoWeAre, setWhoWeAre] = useState();
	useEffect(() => {
		whoWeAreService.getAll().then(res => setWhoWeAre(res[0]));
	}, [])
	return (
		<div style={{ background: "#fff" }}>
			<HeaderComponent topclassNameName={"relative-top"} />
			<main style={{ background: "#fff", marginBottom: '40px' }}>
				{whoWeAre ?
					<div className="container">
						<div className="row contactUs-text-container">
							<div className="col-sm-12">
								<div>
									<img src={whoWeAre.banner_image} className="who-we-are-img-1" />
								</div>
								<br />
								<h3 className="who-h1 mt-2">ABOUT COMPANY</h3>
								<div className='row' >
									<div className='col-sm col-md-10' >
										{/* <strong>
									<p className='font-weight-bold who-we-des'>
									{whoWeAre.primary_description}
									</p>
									</strong> */}
										<p className='who-we-des' >Advanced Construction Est. was established in 1982 in the kingdom of Saudi Arabia, and it
												became Advanced Construction Co. in 2002 after the huge expansion of works, then rapidly
												maintained anhonorable reputation in providing contractual expertise for executing contracts in
												various fields of Civil Project, Roads, underpasses and Bridges Construction, Infrastructure, Marine
												Construction,
												Electro-mechanical Project, Finishing Contracting all over the Kingdom.
												Our early history is intimately related to the booming era where every single company had to make
												a place under the sun of intensive and rushed projects. We managed all through to maintain a
												very sustainable development, steady growth and progress acquiring the needed experience to
												provide execellence in designing and executing projects.
												As a result, the Company expanded all over the Kingdom of Saudi Arabia in order to acquire a
												larger market share by providing wider contractual services.</p>
									</div>
									<div className='col-sm col-md-2' ></div>
								</div>
								<h3 className="who-h1 mt-2" >OUR MISSION</h3>
								<div className='row' >
									<div className='col-sm col-md-10' >
										{/* <strong>
									<p className='font-weight-bold who-we-des'>
									{whoWeAre.primary_description}
									</p>
									</strong> */}
										<p className='who-we-des' >
											Our professional teams are committed to deliver high quality construction, serving our society,
												satisfying our clients while leading us to new business opportunities.
										</p>
									</div>
									<div className='col-sm col-md-2' ></div>
								</div>
								<h3 className="who-h1 mt-2">OUR VISION</h3>
								<div className='row' >
									<div className='col-sm col-md-10' >
										{/* <strong>
									<p className='font-weight-bold who-we-des'>
									{whoWeAre.primary_description}
									</p>
									</strong> */}
										<p className='who-we-des' >
											Our clients are the most valuable assets to our company and we are sincere to herald their
											satisfaction in which we carefully invested our time and efforts to bring out the highest
											commitments. This company profile was the result of our joint efforts between management and
											staff with determination to bring our clients closer. This image was blended by highlighting our
											achievements, accomplishments, services, skills and management.
																				</p>
									</div>
									<div className='col-sm col-md-2' ></div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-5 col-sm-12  tex-box" style={{ marginTop: "50px" }}>
								<div className="inner" >
									<h3 className='who-we-are-heading font-weight-bold' style={{ paddingRight: '40px', fontSize: '34px' }} >{whoWeAre.ceo_message}</h3>
									<a href="#">CEO</a>
								</div>
							</div>
							<div className="col-md-7 col-sm-12 p-0" style={{ marginTop: "50px" }}>
								<img src={whoWeAre.ceo_message_image} className="img-fluid" />
							</div>
						</div>

						<div className="row contactUs-text-container">
							<div className="col-md-12 col-sm-12">
								<h3 className="who-h1">{whoWeAre.secondary_title}</h3>
								<p className='font-weight-bold who-we-are-heading' style={{ lineHeight: '2em', paddingRight: '100px' }} >
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
									<Link to="/work-at-acc" className='pl-5 mt-3' >Apply now</Link>
								</div>
							</div>
						</div>

					</div> : null}
				<br />
				<br />
			</main>
			<hr style={{ width: '95%', marginBottom: '0px' }} />
			<FooterComponent />
		</div>
	)
}

export default WhoWeArePage
