import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from 'react-bootstrap/Form';

function SearchForm() {
    return (
        <div style={{height:"230px"}}>
        <Tabs
        defaultActiveKey="home"
        transition={false}
        className="mb-3 container mt-4"
      >
        <Tab eventKey="home" title="Search" className="container">
        1. Service, product or HS code &nbsp;
        <small>(required)</small>
        <Form.Control type="text" placeholder="Normal text" className="row-1"/>
      <br />
        </Tab>
        <Tab eventKey="profile" title="Browse categories" className="container">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Download" className="container">
          Tab content for Contact
        </Tab>
      </Tabs>
      </div>
    );
}
export default SearchForm;
