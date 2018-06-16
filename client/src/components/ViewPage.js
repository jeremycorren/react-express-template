import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Selector from '../reducers/index';
import * as actions from '../actions/index';

class ViewPage extends Component {
	componentDidMount() {		
		const { fetchPage, match } = this.props;
    const pageId = match.params.id;
    if (pageId) {
      fetchPage(match.params.id);
    }
	}

  render() {
  	const { pages } = this.props;
    const page = pages[0];
    if (page) {
      return (
        <div>
          <h4>{page.title}</h4>
          <div>
            <Link to={'/edit/' + page.id}>Edit</Link>
          </div>
          <div>Created: {page.createTimestamp}</div>
          <div>{page.updateTimestamp != null 
            ? 'Updated: ' + page.updateTimestamp
            : ''
          }</div>
          <p>{page.content}</p>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => ({
	pages: Selector.getPages(state)
});

export default connect(
	mapStateToProps,
	actions
)(ViewPage);
