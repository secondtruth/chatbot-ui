import { useState, useEffect, useContext } from 'react';
import { ExternalAppsContext } from '@/context/ExternalAppsContext';

const ExternalAppsTab = () => {
  const { externalApps } = useContext(ExternalAppsContext);
  const [appsList, setAppsList] = useState([]);

  useEffect(() => {
    setAppsList(externalApps);
  }, [externalApps]);

  const handleAppClick = (app) => {
    if (app.embed) {
      const iframe = document.createElement('iframe');
      iframe.src = app.url;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      document.getElementById('main-ui').appendChild(iframe);
    } else {
      window.open(app.url, '_blank');
    }
  };

  return (
    <div>
      {appsList.map((app, index) => (
        <div key={index} onClick={() => handleAppClick(app)}>
          {app.name}
        </div>
      ))}
    </div>
  );
};

export default ExternalAppsTab;
