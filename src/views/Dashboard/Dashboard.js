import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Table,
  ButtonDropdown,
  ButtonGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import Pagination from "react-js-pagination";
import {
  get_list,
  get_filtered_list_region,
  get_filtered_list_lendingType,
  get_filtered_list_incomeLevel
} from "../../actions/index.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      total: 304
    };
  }
  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
    this.props.get_list(this.state.activePage);
  };
  componentDidMount() {
    let Seasons = [];
    let total;
    this.props.get_list(this.state.activePage);
    this.props.get_filtered_list_region();
    this.props.get_filtered_list_incomeLevel();
    this.props.get_filtered_list_lendingType();
    if (this.props.country.data != null) {
      Seasons = this.props.country.data;
      Seasons.map(season => {
        if (season.page) {
          total = season.total;
          this.setState({ total });
        }
      });
    }
  }
  countTotalItems = totalPage => {
    this.setState({ total: totalPage });
  };
  render() {
    let Seasons = [];
    let Winners = [];
    var lis = [];

    let region = [];
    let incomeLevel = [];
    let lendingType = [];
    var total;
    if (this.props.country.data != null) {
      Seasons = this.props.country.data;
      Seasons.map(season => {
        if (!season.page) {
          Winners = season;
        }
      });
    }
    if (this.props.region.data != null) {
      region = this.props.region.data;
      region.map(area => {
        if (!area.page) {
          region = area;
        }
      });
    }
    if (this.props.lendingType.data != null) {
      lendingType = this.props.lendingType.data;
      lendingType.map(area => {
        if (!area.page) {
          lendingType = area;
        }
      });
    }
    if (this.props.incomeLevel.data != null) {
      incomeLevel = this.props.incomeLevel.data;
      incomeLevel.map(area => {
        if (!area.page) {
          incomeLevel = area;
        }
      });
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <Card>
                      <CardHeader>
                        <strong>World Bank</strong>
                      </CardHeader>
                      <CardBody>
                        <Row>
                          <Col xs="12">
                            <CardBody>
                              <Table responsive hover>
                                <thead>
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">ISO2 Code</th>
                                    <th scope="col">
                                      Region
                                      <ButtonGroup className="float-right">
                                        <ButtonDropdown
                                          id="card1"
                                          direction="down"
                                          isOpen={this.state.card1}
                                          toggle={() => {
                                            this.setState({
                                              card1: !this.state.card1
                                            });
                                          }}
                                        >
                                          <DropdownToggle caret className="p-0">
                                            <i className="icon-filter" />
                                          </DropdownToggle>
                                          <DropdownMenu
                                            modifiers={{
                                              setMaxHeight: {
                                                enabled: true,
                                                order: 890,
                                                fn: data => {
                                                  return {
                                                    ...data,
                                                    styles: {
                                                      ...data.styles,
                                                      overflow: "auto",
                                                      maxHeight: 500
                                                    }
                                                  };
                                                }
                                              }
                                            }}
                                          >
                                            {region.map(area => {
                                              return (
                                                <DropdownItem
                                                  key={area.code}
                                                  onClick={() =>
                                                    this.props.get_list(
                                                      1,
                                                      "region",
                                                      area.id
                                                    )
                                                  }
                                                >
                                                  {" "}
                                                  {area.name}{" "}
                                                </DropdownItem>
                                              );
                                            })}
                                          </DropdownMenu>
                                        </ButtonDropdown>
                                      </ButtonGroup>
                                    </th>
                                    <th scope="col">Capital</th>
                                    <th scope="col">
                                      Lending Type
                                      <ButtonGroup className="float-right">
                                        <ButtonDropdown
                                          id="card2"
                                          isOpen={this.state.card2}
                                          toggle={() => {
                                            this.setState({
                                              card2: !this.state.card2
                                            });
                                          }}
                                        >
                                          <DropdownToggle caret className="p-0">
                                            <i className="icon-filter" />
                                          </DropdownToggle>
                                          <DropdownMenu>
                                            {lendingType.map(area => {
                                              return (
                                                <DropdownItem
                                                  key={area.id}
                                                  onClick={() =>
                                                    this.props.get_list(
                                                      1,
                                                      "lendingTypes",
                                                      area.id
                                                    )
                                                  }
                                                >
                                                  {" "}
                                                  {area.value}{" "}
                                                </DropdownItem>
                                              );
                                            })}
                                          </DropdownMenu>
                                        </ButtonDropdown>
                                      </ButtonGroup>
                                    </th>
                                    <th scope="col">
                                      Income Level
                                      <ButtonGroup className="float-right">
                                        <ButtonDropdown
                                          id="card3"
                                          isOpen={this.state.card3}
                                          toggle={() => {
                                            this.setState({
                                              card3: !this.state.card3
                                            });
                                          }}
                                        >
                                          <DropdownToggle caret className="p-0">
                                            <i className="icon-filter" />
                                          </DropdownToggle>
                                          <DropdownMenu>
                                            {incomeLevel.map(area => {
                                              return (
                                                <DropdownItem
                                                  key={area.id}
                                                  onClick={() =>
                                                    this.props.get_list(
                                                      1,
                                                      "incomeLevel",
                                                      area.id
                                                    )
                                                  }
                                                >
                                                  {" "}
                                                  {area.value}{" "}
                                                </DropdownItem>
                                              );
                                            })}
                                          </DropdownMenu>
                                        </ButtonDropdown>
                                      </ButtonGroup>
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Winners.map(winners => {
                                    return (
                                      <tr key={winners.id}>
                                        <td>{winners.name} </td>
                                        <td>{winners.iso2Code}</td>
                                        <td>{winners.region.value}</td>
                                        <td>{winners.capitalCity}</td>
                                        <td>{winners.lendingType.value}</td>
                                        <td>{winners.incomeLevel.value}</td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </Table>
                              <div className="panel-body">
                                <div className="align-center">
                                  <Pagination
                                    hideNavigation
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={10}
                                    totalItemsCount={this.state.total}
                                    pageRangeDisplayed={10}
                                    onChange={this.handlePageChange}
                                  />
                                </div>
                              </div>
                            </CardBody>
                          </Col>
                        </Row>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    country: state.country.champ,
    region: state.country.region,
    lendingType: state.country.lendingType,
    incomeLevel: state.country.incomelevel
  };
};

export default connect(
  mapStateToProps,
  {
    get_list,
    get_filtered_list_region,
    get_filtered_list_lendingType,
    get_filtered_list_incomeLevel
  }
)(Dashboard);
