import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import projectService from "../services/front/project.service";
import CitiesService from "../services/cities.service";
import NoItemFound from "../components/noItemFound";
import ProjectComponent from "../components/ProjectComponent";
import {Modal} from 'react-bootstrap';
import { Carousel } from "react-responsive-carousel";
export default function ProjectsPage() {
  let history = useHistory();
  const [cities, setCitites] = useState();
  const [projectList, setProjectList] = useState();
  const [selectedCity, setSelectedCity] = useState();
  const [cityFilteredProjects, setCityFilteredProjects] = useState();
  const ciitesService = new CitiesService();
  const [projectType, setProjectType] = useState();
  const [currentProject , setCurrentProject] = useState(null)
  const [show, setShow] = useState(false);

  useEffect(() => {
    Promise.all([projectService.getAll(), ciitesService.getAll()]).then(res => {
      console.log("res check", res);
      setProjectList(res[0]);
      setCitites(res[1]);
      setSelectedCity(res[1][0].name);
      setProjectType('all')
      setCityFilteredProjects(
        res[0].filter(project => project.city === res[1][1].name)
      );
    });

  }, []);

  const onChangeCity = city => {
    setSelectedCity(city);
    setCityFilteredProjects(
      projectList.filter(project => project.city === city)
    );
    // setProjectIds(cityFilteredProjects.map(project=>project.id))
  };

  const onChangeProjectType = type => {
    setProjectType(type);
    setCityFilteredProjects(
      projectList.filter(
        project => project.type === type && selectedCity === project.city
      )
    );
  };

  const onChangeResetProjectType = reset_city => {
    setSelectedCity(reset_city);
    setProjectType('all')
    setCityFilteredProjects(
      projectList.filter(project => reset_city === project.city)
    );
  };
  const setCarosal = (c_project)=>{
    setCurrentProject(c_project)
    setShow(true)
  }
  const handleClose = () => setShow(false);
  return (
    <div style={{ background: '#fff' }}>
      <HeaderComponent topclassName={"fixed-top-header-top"}></HeaderComponent>
      <main style={{ background: "#fff" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="two-heding">
                <h3 className="h3-responsive font-weight-bold" style={{ marginTop: "30px" }}>
                  We have pride in our portfolio
                </h3>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">

                <div className="row">

                  <div className="col-md-9">
                    <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
                    
                      {cities ? cities.map(city => (
                            <li className="nav-item" key={city.id}>
                              <a className={ selectedCity === city.name ? "nav-link p-2 active"
                                  : "nav-link p-2" } id="one-tab" data-toggle="tab" href="#one" 
                                  role="tab" aria-controls={city.id} aria-selected="true" 
                                  onClick={() => onChangeCity(city.name)}>
                                {city.name}
                              </a>
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>

                  <div className="col-md-3">
                    <ul  className="nav nav-pills" id="myTab2" role="tablist">
                      <li  className="nav-item p-2 ml-2" 
                                  style={{borderBottom:projectType === 'resort'?'3px solid #C92027':'none'}}
                                   onClick={() => onChangeProjectType("resort")}>
                      <img src="/icon0-40x40.gif" /></li>
                      <li className="nav-item p-2 ml-2"
                              style={{borderBottom:projectType === 'building'?'3px solid #C92027':'none'}}
                                  onClick={() => onChangeProjectType("building")}>
                        <img style={{ width: "20", height: 20 }} src="/icon1-40x40.gif" />
                        </li>
                      <li className="nav-item p-2 ml-2" 
                      style={{borderBottom:projectType === 'road'?'3px solid #C92027':'none'}}
                      onClick={() => onChangeProjectType("road")}>
                        <img style={{ width: "20", height: 20 }} src="/building.png" />
                      </li>
                      <li className="nav-item p-2 ml-2"
                      style={{borderBottom:projectType === 'bridge'?'3px solid #C92027':'none'}}
                      onClick={() => onChangeProjectType("bridge")}>
                        <img style={{ width: "20", height: 20 }} src="/icon-40x40.gif" />
                      </li>
                      <li className="nav-item p-2 ml-2" 
                      style={{borderBottom:projectType === 'all'?'3px solid #C92027':'none'}}
                      onClick={() => onChangeResetProjectType(selectedCity)}>
                        <img style={{ width: "20", height: 20 }} src="/icon3-40x40.gif" />
                      </li>
                    </ul>
                  </div>

                </div>

                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="one" role="tabpanel"
                    aria-labelledby="one-tab">
                    <div className="container">
                      <div className="row">
                        {cityFilteredProjects && cityFilteredProjects.length ? (
                         cityFilteredProjects.map(project => (
                            <ProjectComponent
                            setCarosal={setCarosal}
                            project={project} 
                            onClick={()=>{history.push("/product-details/" + project.id, {projects:cityFilteredProjects})}}
                            key={project.id} 
                            />
                          ))
                        ) : (
                          <NoItemFound />
                        )}
                      </div> 
                    </div>
                  </div>
                </div>
 
             
            </div> 

         
            {/*<div className="col-md-12 border">
              <button className="btn btn-block">Load more   A JSX comment </button>
            </div>*/}

          </div>
        </div>
        <hr style={{width:'95%' , marginBottom:'0px'}} />
      </main>
      <FooterComponent></FooterComponent>
      {/* <Modal
          className='p-0'
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show} onHide={handleClose}>
          {
          currentProject === null ? '' 
          : 
          (
            <Carousel  autoPlay={true} showThumbs={false}
            showStatus={false} infiniteLoop stopOnHover
             >
            <div>
              <img style={{ height: "320px" }} src={currentProject.image} 
              className="img-fluid" />
            </div>
            <div>
              <img style={{ height: "320px" }} className="img-fluid"
                src={currentProject.mini_image1} />
            </div>
            <div>
              <img style={{ height: "320px" , width:'100%' }} className="img-fluid"
                src={currentProject.mini_image2} />
            </div>
          </Carousel>
          )
          }

      </Modal> */}
    </div>
  );
}

// setProjectIds(res[1][1].map(project=>project.id))