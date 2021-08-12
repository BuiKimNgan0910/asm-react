import React, { Component } from "react";
import { connect } from "react-redux";
import Catalog from "../components/Catalog";
import callAPI from "../utils/apiCaller";


class CatalogsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalogs: [],
    };
  }

  componentDidMount() {
    callAPI("catalogs", "GET", null).then((res) => {
      this.setState({
        catalogs: res.data,
      });
    });
  }
  render() {
    let { catalogs } = this.state;
    return <div className='row'>{this.showCatalogs(catalogs)}</div>;
  }

  showCatalogs = (catalogs) => {
    let result = null;
    // let id = window.location.pathname.split("/")[2];
    // console.log(id);
    if (catalogs.length > 0) {
      result = catalogs.map((catalogs, index) => {
        return (
          <Catalog key={index} 
          catalogs={catalogs} 
          />
        );
      })
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    catalogs: state.catalogs,
  };
};

export default connect(mapStateToProps, null)(CatalogsContainer);
