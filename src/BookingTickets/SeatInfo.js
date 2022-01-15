import React, { Component } from 'react';
import { connect } from 'react-redux';
import {huyGheAction} from '../redux/actions/BookingActions';
class SeatInfo extends Component {

  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: '30px' }}>
            Unavailable Seats
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: '30px' }}>
            Current Seats
          </span>
          <br />
          <button className="ghe" style={{ margin: 0 }}></button>
          <span className="text-light" style={{ fontSize: '30px' }}>
            Available Seats
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: 25 }}>
                <th>Total Seats</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.danhSachGheDangDat.map((gheDangDat,index)=>{
                return <tr key={index} className="text-light" style={{ fontSize: '20px'}}>
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia.toLocaleString()}</td>
                  <td><button onClick={()=>{
                    this.props.dispatch(
                      huyGheAction(gheDangDat.soGhe)
                    )
                  }} className="btn btn-warning">Cancel</button></td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td>Total Price</td>
                <td>
                  {this.props.danhSachGheDangDat.reduce((total,gheDangDat,index)=>{
                    return total += gheDangDat.gia;
                  },0).toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    danhSachGheDangDat: state.BookingReducer.danhSachGheDangDat
  }
}
export default connect(mapStateToProps)(SeatInfo);