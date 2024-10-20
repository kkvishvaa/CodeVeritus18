import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const LoginPage = () => {
  const [activeForm, setActiveForm] = useState('user');
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleForm = (formType) => {
    setActiveForm(formType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add any authentication logic here if needed
    // Redirect to HomePage after login
    navigate('/home'); // Navigate to the HomePage
  };


  return (
    <div style={styles.body}>
      <div style={styles.loginContainer}>
        {/* Toggle between User and Admin */}
        <ul className="nav nav-pills mb-3" style={styles.navPills}>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeForm === 'user' ? 'active' : ''}`}
              onClick={() => toggleForm('user')}
            >
              User
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeForm === 'admin' ? 'active' : ''}`}
              onClick={() => toggleForm('admin')}
            >
              Admin
            </button>
          </li>
        </ul>

        {/* User Login Form */}
        {activeForm === 'user' && (
          <div className="form-container" style={styles.formContainer}>
            <h4 style={styles.h4}>Welcome, User</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={styles.formGroup}>
                <i className="fas fa-user input-icon" style={styles.inputIcon}></i>
                <input type="text" className="form-control" placeholder="Username" required style={styles.formControl} />
              </div>
              <div className="form-group" style={styles.formGroup}>
                <i className="fas fa-lock input-icon" style={styles.inputIcon}></i>
                <input type="password" className="form-control" placeholder="Password" required style={styles.formControl} />
              </div>
              <button type="submit" className="btn btn-custom btn-primary w-100" style={styles.btnCustom}>Login</button>
            </form>
          </div>
        )}

        {/* Admin Login Form */}
        {activeForm === 'admin' && (
          <div className="form-container" style={styles.formContainer}>
            <h4 style={styles.h4}>Admin Access</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={styles.formGroup}>
                <i className="fas fa-user-shield input-icon" style={styles.inputIcon}></i>
                <input type="text" className="form-control" placeholder="Admin Username" required style={styles.formControl} />
              </div>
              <div className="form-group" style={styles.formGroup}>
                <i className="fas fa-lock input-icon" style={styles.inputIcon}></i>
                <input type="password" className="form-control" placeholder="Admin Password" required style={styles.formControl} />
              </div>
              <button type="submit" className="btn btn-custom btn-danger w-100" style={styles.btnCustom}>Login</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  body: {
    height: '100vh',
    margin: 0,
    background: `url('https://i.ytimg.com/vi/6sbf6B3LAq8/maxresdefault.jpg') no-repeat center center/cover`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Quicksand', sans-serif",
  },
  loginContainer: {
    position: 'relative',
    width: '500px',
    padding: '40px',
    borderRadius: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px) brightness(120%)',
    boxShadow: '0px 15px 35px rgba(0, 0, 0, 0.3)',
    border: '1px solid white',
    opacity: 1,
  },
  navPills: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '25px',
  },
  formContainer: {
    display: 'block',
  },
  h4: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: '#FF6F61',
    animation: 'fadeIn 1s ease-out',
  },
  formGroup: {
    position: 'relative',
  },
  formControl: {
    borderRadius: '50px',
    paddingLeft: '50px',
    height: '50px',
    background: 'rgba(255, 255, 255, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    marginBottom: '15px',
    transition: 'box-shadow 0.3s, background-color 0.3s',
    color: '#333',
  },
  inputIcon: {
    position: 'absolute',
    left: '15px',
    top: '10px',
    color: '#6c757d',
    fontSize: '20px',
  },
  btnCustom: {
    borderRadius: '50px',
    height: '50px',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
};

export default LoginPage;
