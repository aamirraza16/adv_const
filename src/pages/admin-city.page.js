import React, { useState, useEffect } from 'react'
import DataTable from 'react-data-table-component';
import { Spinner, Modal, Button, Form, Col, Row } from 'react-bootstrap';

import AdminHeaderComponent from '../components/admin-header.component';
import CitiesService from '../services/cities.service';

function AdminCityPage() {

    const columns = [
            {
                name: 'Id',
                selector: 'id',
                sortable: true,
            },
            {
                name: 'Name',
                selector: 'name',
                sortable: true,
                right: true,
            },
            {
                name: 'Delete',
                right: true,
                cell: row => <button class="btn btn-danger" onClick={() => onSelectCity(row.id)}><i class="fas fa-trash-alt"></i></button>
            },
            {
                name: 'Update',
                right: true,
                cell: row => <button class="btn btn-info" onClick={() => onSelectEditCity(row)}><i class="fas fa-pencil-alt"></i></button>
            }
        ];

    const [cities, setCities] = useState();
    const [city, setCity] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [showEditCity, setShowEditCity] = useState(false);
    const [selectedCity, setSelectedCity] = useState();

    const citiesService = new CitiesService();


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEditClose = () => setShowEditCity(false);
    const handleEditShow = () => setShowEditCity(true);

    useEffect(() => {
        citiesService.getAll().then(res => { 
                setCities(res);
                setIsLoading(false);
            });
    }, [])

    const addCity = () => {
        citiesService.create({ name: city }).then(res => console.log('res ', res));
    }

    const confirmDelete = () => { 
        citiesService.delete(selectedCity);
        handleClose();
    }

    const onSelectCity = (id) => {
        setSelectedCity(id);
        handleShow();
    }

    const onSelectEditCity = (row) => {
        console.log('row ', row);
        setName(row.name);
        setSelectedCity(row.id)
        handleEditShow();
    }

    const confirmEditCity = async () => {
        const data = {
            city_id: selectedCity,
            name,
        }
        citiesService.updateCity(data).then(res => {
            if (res.status === 200) {
                setShowEditCity(false);
            }
        });
        handleEditClose();
    }
    return (
       <div>
           <AdminHeaderComponent />
            <div className="container mt-md-4">
              <div className="row justify-content-md-center">
                <div className="col-8 col-offset-2">
                    <button  type="button" className="btn btn-primary btn-lg float-right" data-toggle="modal" data-target="#myModal">Add City</button>
                { cities ?  <DataTable
                    title="Project List"
                    columns={columns}
                    data={cities}
                    />: null }
                </div>
              </div>
              <div className="row">
                    <div className="col-md-6 offset-md-6 mt-md-5 py-5">
                        {isLoading ? (<Spinner animation="border" />): null}
                    </div>
              </div>
              <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        {/* <h4 className="modal-title float-left">Add City</h4> */}
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" className="mt-md-2">City</label>
                                <input 
                                    className="form-control w-75 float-right" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-default" onClick={() => addCity()} >Save</button>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Delete City</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete City</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={confirmDelete}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal size="lg" show={showEditCity} onHide={handleEditClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update City</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={e => setName(e.target.value)} />
                        </Form.Group>
                    </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleEditClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={confirmEditCity}>
                    Update
                </Button>
                </Modal.Footer>
            </Modal>
       </div>
    )
}

export default AdminCityPage
