// pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import StatCard from '../components/dashboard/StatCard';
import '../../public/CSS/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <main className="dashboard-content">
        <header className="content-header">
          <div className="header-text">
            <h1>Student Dashboard</h1>
            <p>Ready to continue your learning journey?</p>
          </div>
          <div className="header-actions">
            <i className="bi bi-bell-fill notification-btn"></i>
            <span className='header-avatar'><i className='bi bi-person-fill avatar'></i></span>
            {/* <img src="/avatar.png" alt="Profile" className="header-avatar" /> */}
          </div>
        </header>

        <section className="stats-section">
          <StatCard label="Enrolled Courses" value="12" icon="bi bi-journals" trend="12" />
          <StatCard label="Hours Spent" value="142h" icon="bi bi-alarm-fill" trend="8" />
          <StatCard label="Completed" value="08" icon="bi bi-trophy-fill" />
          <StatCard label="Avg. Score" value="94%" icon="bi bi-graph-up-arrow" />
        </section>

        <div className="dashboard-grid">
          {/* Recent Courses List */}
          <div className="grid-item main-item">
            <h2>Recently Accessed</h2>
            <div className="course-list-mini">
              {/* You can map actual data here later */}
              <div className="mini-card">React Patterns <span>75%</span></div>
              <div className="mini-card">UI Design <span>30%</span></div>
            </div>
          </div>

          {/* Calendar/Schedule mini-view */}
          <div className="grid-item side-item">
            <h2>Schedule</h2>
            <p>No sessions for today.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;