import "./Dashboard.scss";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [bannerConfig, setBannerConfig] = useState({
    isVisible: true,
    description: '',
    timer: 60,
    link: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/api/banner')
      .then((response) => {
        setBannerConfig(response.data);
      })
      .catch((error) => {
        setError('Failed to fetch banner configuration.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBannerConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value
    }));
  };

  const handleToggle = () => {
    setBannerConfig((prevConfig) => ({
      ...prevConfig,
      isVisible: !prevConfig.isVisible
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('http://localhost:5000/api/banner', bannerConfig)
      .then(() => {
        alert('Banner configuration updated!');
      })
      .catch(() => {
        setError('Failed to update banner configuration.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="Dashboard">
      <div className="Content">
        <div className="Title">Dashboard</div>
        {error && <p className="Error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="FormRow Visible">
            <label htmlFor="isVisible">Is Visible:</label>
            <input
              type="checkbox"
              id="isVisible"
              name="isVisible"
              checked={bannerConfig.isVisible}
              onChange={handleToggle}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={bannerConfig.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="timer">Timer:</label>
            <input
              type="number"
              id="timer"
              name="timer"
              value={bannerConfig.timer}
              onChange={handleInputChange}
            />
          </div>
          <div className="FormRow">
            <label htmlFor="link">Link:</label>
            <input
              type="text"
              id="link"
              name="link"
              value={bannerConfig.link}
              onChange={handleInputChange}
            />
          </div>
          <div className="FormRow">
            <button className="Button" type="submit" disabled={loading}>
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
