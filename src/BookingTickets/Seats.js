import React, { Component } from 'react';
import {connect} from 'react-redux';
import { datGheAction } from '../redux/actions/BookingActions';
class Seats extends Component {
  renderGhe = () => {
    return this.props.seat.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = '';
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = 'gheDuocChon';
        disabled = true;
      }
    //   state for seats which are placing by users
    let cssGheDangDat = '';
    let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat=> gheDangDat.soGhe === ghe.soGhe);
    if(indexGheDangDat !== -1){
        cssGheDangDat = 'gheDangChon'
    }

      return (
        <button onClick={()=>{
            this.props.datGhe(ghe);
        }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {index + 1}
        </button>
      );
    });
  };

  renderNumber = () => {
    return this.props.seat.danhSachGhe.map((ghe, index) => {
      return (
        <button disabled={false} className="rowNumber">
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSeats = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.seat.hang} {this.renderNumber()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.seat.hang} {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="text-light text-left ml-5 mt-1" style={{ fontSize: 30 }}>
        {this.renderSeats()}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {
        danhSachGheDangDat: state.BookingReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        datGhe: (ghe) => {
            dispatch(
                datGheAction(ghe)
            )
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Seats);