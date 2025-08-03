import { Link } from "react-router-dom"
import './Dashboard.css';
import { useState } from "react";

function Dashboard () {

    const [selected, setSelected] = useState(0);

  const handleClick = (index) => {
    setSelected(index);
  };

    return <div className="shai">
        <section className="dashboard-menu">
        {['Website', 'Products', 'Analytics', 'Taxes'].map((label, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`dashboard-button ${selected === index ? 'current' : ''}`}
          >
            {label}
          </button>
        ))}
      </section>
        {/* <img className="dash-img" src="/blur2.jpg" alt="" /> */}
    </div>
}

export default Dashboard