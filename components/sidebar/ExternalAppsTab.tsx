import { useState, useEffect } from 'react';

const ExternalAppsTab = () => {
  const [appsList, setAppsList] = useState([]);

  useEffect(() => {
    fetch('/config/externalAppsConfig.json')
      .then((response) => response.json())
      .then((data) => setAppsList(data.externalApps));
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
