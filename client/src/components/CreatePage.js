import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createPage } from '../actions';

const uid = require('uuid/v4');

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      pageId: null,
      redirect: false 
    };
  }

  render() {
    const { dispatch } = this.props;

    if (this.state.redirect && this.state.pageId) {
      return <Redirect to={'/view/' + this.state.pageId} />;
    }
    return (
      <div>
        <h4>Create a new article.</h4>
        <form onSubmit={(event) => {
          event.preventDefault();

          let title = this.title.value;
          let content = this.content.value;
          if (title && content) {
            const id = uid();
            this.setState({ pageId: id });
            dispatch(createPage(id, title, content));
          }

          this.title.value = '';
          this.content.value = '';

          this.setState({ redirect: true });
        }}>
          <div>Title</div>
          <input ref={(node) => this.title = node} />
          <div>Content</div>
          <textarea ref={(node) => this.content = node} />
          <br />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default connect()(CreatePage);
