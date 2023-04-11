import React from 'react'

const ComplaintForm = () => {
  return (
    <div className='container'>
      <form>
        <div className="row my-5">
          <div className="mb-3 col-12 col-md-3 col-sm-4">
            <label for="name_box" className="form-label">Name of the Complainant*</label>
            <input type="text" className="form-control" name='name' id="name_box" placeholder='Full Name' aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4">
            <label for="email_box" className="form-label">Email Address*</label>
            <input type="email" className="form-control" name='email' id="email_box" placeholder='Email' aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4" >
            <label for="contact_box" className="form-label">Contact No*</label>
            <input type="text" className="form-control" placeholder='Enter Your Contact Number' id="contact_box" required />
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4" >
            <label for="aadhar_box" className="form-label">Aadhar Card Id*</label>
            <input type="text" className="form-control" placeholder='Enter Your Aadhar Id' id="aadhar_box" required />
          </div>
        </div>
        <div className="row my-5">
          <div className="mb-3 col-12 col-md-3 col-sm-4">
            <label for="organization" className="form-label">Organization</label>
            <input type="text" className="form-control" name='organization' id="organization" placeholder='Your Organization' aria-describedby="emailHelp"  />
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4">
            <label for="email_box" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email_box" placeholder='Email' aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4" >
            <label for="contact_box" className="form-label">Contact No*</label>
            <input type="text" className="form-control" placeholder='Enter Your Contact Number' id="contact_box" required />
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4" >
            <label for="aadhar_box" className="form-label">Aadhar Card Id*</label>
            <input type="text" className="form-control" placeholder='Enter Your Aadhar Id' id="aadhar_box" required />
          </div>
        </div>
        <div className="row my-5">
          <div className="mb-3 col-12 col-md-3 col-sm-4">
            <label for="name_box" className="form-label">Name of the Complainant*</label>
            <input type="text" className="form-control" name='name' id="name_box" placeholder='Full Name' aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4">
            <label for="email_box" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' id="email_box" placeholder='Email' aria-describedby="emailHelp" required/>
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4" >
            <label for="contact_box" className="form-label">Contact No*</label>
            <input type="text" className="form-control" placeholder='Enter Your Contact Number' id="contact_box" required />
          </div>
          <div className="mb-3 col-12 col-md-3 col-sm-4" >
            <label for="aadhar_box" className="form-label">Aadhar Card Id*</label>
            <input type="text" className="form-control" placeholder='Enter Your Aadhar Id' id="aadhar_box" required />
          </div>
        </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default ComplaintForm
