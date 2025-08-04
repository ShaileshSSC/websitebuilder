import React from 'react';
import './css/WebsitePage.css';

function WebsitePage() {
  return (
    <div className="website-content">
      <h2>Your Website</h2>
      <div className='iphone-div'>
        <img className='iphone-frame' src="/iphoneframe.png" alt="" />
        <div className='iphone-iframe-wrapper'>
        <iframe
                src="http://localhost:5173/test"
                title="Preview"
                className='iphone'
              />
        </div>
      </div>
    </div>
  );
}

export default WebsitePage;