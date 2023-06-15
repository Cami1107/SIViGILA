// DashboardPage.jsx
import React from 'react';
import './DashboardPage.css';
import home from '../img/home.png'; // Ruta de la imagen

const DashboardPage = () => {
  // Datos ficticios de ventas
  const salesData = [
    { month: 'Enero', amount: 1500 },
    { month: 'Febrero', amount: 2200 },
    { month: 'Marzo', amount: 1800 },
    { month: 'Abril', amount: 1200 },
    { month: 'Mayo', amount: 600 },
    
  ];

  
  const pendingOrders = [
    { id: 1, customer: 'Jaime Perez'  ,  total: 10000,  },
    { id: 2, customer: 'Yuli Narvaez', total: 2000000,  },
    { id: 3, customer: 'Alfonzo Llanos', total: 1200000,  },
    
  ];

  return (
    <div className="dashboard-page">
      <img src={home} alt="Descripción de la imagen" className="centrar-imagen"/>
    </div>
  );
};

export default DashboardPage;




















