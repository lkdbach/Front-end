import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return <div>Pls select a book to get started</div>
        }
        return (
            <div>
                <h3>Detail for:</h3>
                <div>{ this.props.activeBook.title}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeBook: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);