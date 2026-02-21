// components/dashboard/StatCard.jsx
import React from 'react';

const StatCard = ({ label, value, icon, trend }) => {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <div className="stat-icon-wrapper"><i className={icon}></i></div>
        {trend && <span className="stat-trend">+{trend}%</span>}
      </div>
      <div className="stat-body">
        <h3 className="stat-value">{value}</h3>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;