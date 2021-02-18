import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Constants
import * as actions from './actions';
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import {
    NavBar,
    PageLayout,
    Welcome,
    HoursLocation,
    Book
} from './components';

// Pages
import {
    BookInsert,
    BooksList,
    BooksTable,
    BookUpdate,
    AboutUs,
    Admin,
} from './pages';

class App extends Component {
    render() {

        const publicViews = (
            <Switch>
                <Route exact path={routes.HOME} component={Book} />
                <Route exact path={routes.ABOUT} component={AboutUs} />
                <Route exact path={routes.ADMIN} component={Admin} />
                <Route exact path={routes.BOOKS} component={BooksList} />
                <Route exact path={`${routes.BOOKS}/react-table-v6`} component={BooksTable} />
                <Route exact path={routes.BOOK_INSERT} component={BookInsert} />
                <Route exact path={routes.BOOK_UPDATE} component={BookUpdate} />
            </Switch>
        );

        return (
            <Router>
                <CssBaseline />
                <NavBar />
                <PageLayout >
                <div className="app--main container-fluid">
                    <div className="view-container">
                        {publicViews}
                    </div>
                </div>
                <HoursLocation />
                </PageLayout>
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
