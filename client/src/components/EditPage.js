import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as Selector from '../reducers/index';
import { fetchPage, updatePage } from '../actions';

class EditPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      redirect: false 
    };
  }

  componentDidMount() {   
    const { match } = this.props;
    const pageId = match.params.id;
    if (pageId) {
      fetchPage(match.params.id);
    }
  }

  render() {
    const { dispatch, pages } = this.props;
    const page = pages[0];
    if (page) {
      if (this.state.redirect && page.id) {
        return <Redirect to={'/view/' + page.id} />;
      }
      return (
        <div>
          <h4>Edit an article.</h4>
          <form onSubmit={(event) => {
            event.preventDefault();

            let title = this.title.value;
            let content = this.content.value;
            if (title && content) {
              dispatch(updatePage(page.id, title, content, page.createTimestamp));
            }

            this.title.value = '';
            this.content.value = '';

            this.setState({ redirect: true });
          }}>
            <div>Title</div>
            <input 
              defaultValue={page.title}
              ref={(node) => this.title = node} 
            />
            <div>Content</div>
            <textarea 
              defaultValue={page.content}
              ref={(node) => this.content = node} 
            />
            <br />
            <input type="submit" value="Update" />
          </form>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => ({
  pages: Selector.getPages(state)
});

export default connect(
  mapStateToProps
)(EditPage);
