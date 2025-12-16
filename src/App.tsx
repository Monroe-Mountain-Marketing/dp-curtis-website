import AppRoutes from "@/routes";
import { useEffect } from 'react';
import { SafeArea } from 'capacitor-plugin-safe-area';

import "@/App.css";

function App() {

  useEffect(() => {
    (async function(){
        const safeAreaData = await SafeArea.getSafeAreaInsets();
        const {insets} = safeAreaData;
        for (const [key, value] of Object.entries(insets)) {
            document.documentElement.style.setProperty(
                `--safe-area-inset-${key}`,
                `${value}px`,
            );
        }
    })()
}, []);

  return (
    <AppRoutes />
  );
}

export default App;
