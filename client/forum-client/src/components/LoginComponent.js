import React from 'react';

const LoginComponent = () => {
    return (
        <form>
            <h1>Login</h1>
            <div className="form-group">
                <label htmlFor="exampleInput1" className="bmd-label-floating">Email</label>
                <input type="email" className="form-control" id="exampleInput1" />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="exampleInput2" className="bmd-label-floating">Password</label>
                    <input type="password" className="form-control" id="exampleInput2" />
                </div>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" value="" />
                    Remember Me
                <span className="form-check-sign">
                        <span className="check"></span>
                    </span>
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
};

export default LoginComponent;

