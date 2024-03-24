import React, { Component } from 'react'
import {Col, Row} from 'reactstrap';
import UsersList from '../usersPage/UsersList';
import MainPage from '../mainPage/MainPage';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="4" >
                        <UsersList />
                    </Col>
                    <Col xs="8" style={{margin:0,padding:0}}>
                        <MainPage />
                    </Col>
                </Row>
            </div>
        )
    }
}
