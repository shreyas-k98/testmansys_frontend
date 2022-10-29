import React from 'react'

const Stafflogin = () => {
  return (
    <div className='container'>
      <br /><b><h2>Staff Login</h2></b><br />
            <form>
                <div className="container mb-3">
                    <label htmlFor="title" className="form-label">USER NAME</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="container mb-3">
                    <label htmlFor="desc" className="form-label">PASSWORD</label>
                    <input type="desc" className="form-control" id="desc" />
                </div>
                <div className='container'>
                    <button type="submit" className="btn btn-sn btn-success">LOGIN</button>
                </div>
            </form>
    </div>
  )
}

export default Stafflogin
