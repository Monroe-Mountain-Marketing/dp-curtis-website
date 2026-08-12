import React, { useEffect } from 'react';

const SCRIPT_ID = 'leadconnector-form-embed-script';

export const LeadConnectorForm: React.FC = () => {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ minHeight: '716px' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/8UO0LuKNWwtMVvLZRIWY"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id="inline-8UO0LuKNWwtMVvLZRIWY"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Contact"
        data-height="716"
        data-layout-iframe-id="inline-8UO0LuKNWwtMVvLZRIWY"
        data-form-id="8UO0LuKNWwtMVvLZRIWY"
        title="Contact"
      />
    </div>
  );
};
