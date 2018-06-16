import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Selector from '../reducers/index';
import * as actions from '../actions/index';

class ListPages extends Component {
	componentDidMount() {		
		const { fetchPages } = this.props;
		fetchPages();
	}

  render() {
  	const { pages } = this.props;
  	const pageList = pages.map((page) => 
  		<li key={page.id}>
  			<Link to={"/view/" + page.id}>{page.title}</Link>
  		</li>
  	);
    return (
      <div>
        <h4>My Articles.</h4>
        <ul>{pageList}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
	pages: Selector.getPages(state)
});

export default connect(
	mapStateToProps,
	actions
)(ListPages);
