import React from 'react'

const ContactCardGroup = () => {
  return (
    <div className="container contactInfo">
      <div className="row">
        <div className="col-md-4 col-12  contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>0736 230 063</p>
          </div>
        </div>
        <div className="col-md-4 col-12 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquarter</h5>
            <p>Arusha Njiro Pepsi</p>
          </div>
        </div>
        <div className="col-md-4 col-12 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>Fax</h5>
            <p>0736 230 063</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCardGroup
