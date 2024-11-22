import { StrictMode, React } from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import { GiftExpertApp } from './GiftExpertApp.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <GiftExpertApp />
  //</StrictMode>,
)
