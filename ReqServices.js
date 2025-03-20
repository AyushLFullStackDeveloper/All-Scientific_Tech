import React, { useState } from 'react';
import '../styles/ReqServices.css';
import TextField from './common/TextField';
import TextArea from './common/TextArea';
import Button from './common/Button';
import Title from './common/Title';

// Service request form component
const ReqServices = () => {
  const [formData, setFormData] = useState({
    locationName: '',
    labName: '',
    floorRoom: '',
    address: '',
    cityStateZip: '',
    firstName: '',
    lastName: '',
    email: '',
    officePhone: '',
    cellPhone: '',
    alternateCell: '',
    manufacturer1: '',
    modelNumber1: '',
    serialNumber1: '',
    manufacturer2: '',
    modelNumber2: '',
    serialNumber2: '',
    comments: '',
    serviceType: '',
    urgency: 'normal',
    preferredDate: '',
    preferredTime: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Service request submitted successfully!");
    // Reset form after submission
    setFormData({
      locationName: '',
      labName: '',
      floorRoom: '',
      address: '',
      cityStateZip: '',
      firstName: '',
      lastName: '',
      email: '',
      officePhone: '',
      cellPhone: '',
      alternateCell: '',
      manufacturer1: '',
      modelNumber1: '',
      serialNumber1: '',
      manufacturer2: '',
      modelNumber2: '',
      serialNumber2: '',
      comments: '',
      serviceType: '',
      urgency: 'normal',
      preferredDate: '',
      preferredTime: ''
    });
  };

  return (
    <div className="req-services-container">
      <div className="req-services">
        <div className="req-services-header">
          <h1>Request Service</h1>
          <p>Complete the form below to request service for your equipment</p>
        </div>
        <div className="req-services-form-container">
          <Title level={2}>Service Request Form</Title>
          <form onSubmit={handleSubmit}>
            {/* Service Type */}
            <div className="form-row">
              <div className="form-group full-width">
                <label htmlFor="serviceType">Service Type *</label>
                <select 
                  name="serviceType" 
                  id="serviceType" 
                  value={formData.serviceType} 
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Select Service Type</option>
                  <option value="repair">Repair</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="installation">Installation</option>
                  <option value="calibration">Calibration</option>
                  <option value="inspection">Inspection</option>
                </select>
              </div>
            </div>

            {/* Location Details */}
            <div className="form-section">
              <h3>Location Details</h3>
              <div className="form-row">
                <TextField label="Location Name *" name="locationName" value={formData.locationName} onChange={handleChange} required />
                <TextField label="Lab Name" name="labName" value={formData.labName} onChange={handleChange} />
                <TextField label="Floor / Room *" name="floorRoom" value={formData.floorRoom} onChange={handleChange} required />
              </div>

              {/* Address Details */}
              <div className="form-row">
                <TextField label="Address *" name="address" value={formData.address} onChange={handleChange} required className="wide" />
                <TextField label="City, State, Zip *" name="cityStateZip" value={formData.cityStateZip} onChange={handleChange} required className="wide" />
              </div>
            </div>

            {/* Personal Information */}
            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-row">
                <TextField label="First Name *" name="firstName" value={formData.firstName} onChange={handleChange} required />
                <TextField label="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <TextField label="Email *" type="email" name="email" value={formData.email} onChange={handleChange} required className="full-width" />
              </div>

              {/* Contact Numbers */}
              <div className="form-row">
                <TextField label="Office Phone" name="officePhone" value={formData.officePhone} onChange={handleChange} />
                <TextField label="Cell Phone *" name="cellPhone" value={formData.cellPhone} onChange={handleChange} required />
                <TextField label="Alternate Contact" name="alternateCell" value={formData.alternateCell} onChange={handleChange} />
              </div>
            </div>

            {/* Equipment Details */}
            <div className="form-section equipment-section">
              <h3>Equipment Details</h3>
              <div className="form-row">
                <TextField label="Manufacturer *" name="manufacturer1" value={formData.manufacturer1} onChange={handleChange} required />
                <TextField label="Model # *" name="modelNumber1" value={formData.modelNumber1} onChange={handleChange} required />
                <TextField label="Serial # *" name="serialNumber1" value={formData.serialNumber1} onChange={handleChange} required />
              </div>
              <div className="form-row">
                <TextField label="Manufacturer #2" name="manufacturer2" value={formData.manufacturer2} onChange={handleChange} />
                <TextField label="Model #" name="modelNumber2" value={formData.modelNumber2} onChange={handleChange} />
                <TextField label="Serial #" name="serialNumber2" value={formData.serialNumber2} onChange={handleChange} />
              </div>
            </div>

            {/* Service Details */}
            <div className="form-section">
              <h3>Service Details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="urgency">Urgency *</label>
                  <select 
                    name="urgency" 
                    id="urgency" 
                    value={formData.urgency} 
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="low">Low</option>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="critical">Critical</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input 
                    type="date" 
                    name="preferredDate" 
                    id="preferredDate"
                    value={formData.preferredDate} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTime">Preferred Time</label>
                  <input 
                    type="time" 
                    name="preferredTime" 
                    id="preferredTime"
                    value={formData.preferredTime} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              {/* Additional Comments */}
              <div className="form-row">
                <TextArea 
                  label="Issue Description *" 
                  name="comments" 
                  value={formData.comments} 
                  onChange={handleChange} 
                  className="full-width"
                  required
                  placeholder="Please describe the issue in detail..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-row">
              <Button type="submit" className="submit-button">Submit Service Request</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReqServices;