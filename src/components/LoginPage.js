import React from 'react'

export default function LoginPage() {
  return (
    <div className='container' >
      <div className="row">
        <div className="offset-md-2 col-md-8 mt-5" style={{
            width:"50%",
            margin:"auto"
        }} >
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h4>Welcome to My App</h4>
                        <p>Please login to continue !</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label  htmlFor='userName'  >Username</label>
                        <input id='userName' className='form-control'/>
                    </div>
                    <div className="form-group mt-4">
                        <label  htmlFor='password'>Password</label>
                        <input id='password' className='form-control'/>
                    </div>
                </div>
                <div className="card-footer">
                    <button className='btn btn-primary'>
                        Login
                    </button>
                    <button className='btn btn-warning ' style={{
                        float:"right"
                    }}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
