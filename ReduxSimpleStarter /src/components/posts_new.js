/**
 * Created by bachlkd on 12/06/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    {...field.input}
                />
            </div>
        );
    }


    render() {
        return (
            <form>
                <Field
                    name="title"
                    component={ this.renderTitleField }
                />
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);