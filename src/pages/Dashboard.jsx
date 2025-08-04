import './Dashboard.css';
import { useState } from "react";
import WebsitePage from '../components/WebsitePage';
import ProductsPage from '../components/ProductsPage';
import AnalyticsPage from '../components/AnalyticsPage';
import TaxesPage from '../components/TaxesPage';

function Dashboard () {
    const [selected, setSelected] = useState(0);

    const handleClick = (index) => {
      setSelected(index);
    };

    const renderContent = () => {
      switch(selected) {
        case 0: return <WebsitePage />;
        case 1: return <ProductsPage />;
        case 2: return <AnalyticsPage />;
        case 3: return <TaxesPage />;
        default: return <WebsitePage />;
      }
    };

    return (
      <div className="shai">
        <section className="dashboard-menu">
          {['Website', 'Products', 'Analytics', 'Taxes'].map((label, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={`dashboard-button ${selected === index ? 'current' : ''}`}
            >
              {label}
              <img className='dashboard-button-img' src={`/icons/` + index + '.png'} alt="" />
            </button>
          ))}
        </section>
        <div className="dashboard-main">
          {renderContent()}
        </div>
      </div>
    );
}

export default Dashboard;