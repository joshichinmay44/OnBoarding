import React from 'react';
import { Card } from '@mui/material';
import Picture from './components/picture.js';
import './style.css';

function App() {
  return (
    <div align="center">
      <Card style={{ overflow: 'auto' }}>
        <Picture />
      </Card>
    </div>
  );
}

export default App;
