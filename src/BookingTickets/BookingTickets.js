import React, { Component } from 'react';
import './style/style.css';
import Seats from './Seats';
import SeatInfo from './SeatInfo';
import data from './data';
export default class BookingTickets extends Component {
    renderSeats = () => {
        return data.map((seat,index) => {
            return <div key={{index}}>
                <Seats seat={seat} soHangGhe={index}/>
        </div>
        })
    }

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: '100%',
        }}
      >
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">
                  Book a Ticket with Us
                </div>
                <div className="mt-5 text-light" style={{ fontSize: '15px' }}>
                  Screen
                </div>
                <div
                  className="mt-1"
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div className="screen"></div>
                  {this.renderSeats()}
                </div>

              </div>
              <div className="col-4">
                <div style={{ fontSize: '35px', textAlign: 'center' }} className="mt-2 text-warning">
                  Your Booking Information
                </div>
                <SeatInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
