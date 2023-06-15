// SettingsPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './SettingsPage.css';

Chart.register(...registerables);

const SettingsPage = () => {
  const [classicShirtCount, setClassicShirtCount] = useState(500);
  const [longSleeveShirtCount, setLongSleeveShirtCount] = useState(600);
  const [shortSleeveShirtCount, setShortSleeveShirtCount] = useState(200);
  const lineChartRef = useRef(null);

  useEffect(() => {
    const lineChartOptions = {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Camisas disponibles',
            data: [100, 150, 120, 200, 180],
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo del área bajo la línea
            borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        aspectRatio: 1.5,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const lineChart = new Chart(lineChartRef.current, lineChartOptions);

    return () => {
      lineChart.destroy();
    };
  }, []);

  const handleClassicShirtCountChange = (e) => {
    setClassicShirtCount(parseInt(e.target.value));
  };

  const handleLongSleeveShirtCountChange = (e) => {
    setLongSleeveShirtCount(parseInt(e.target.value));
  };

  const handleShortSleeveShirtCountChange = (e) => {
    setShortSleeveShirtCount(parseInt(e.target.value));
  };

  return (
    <div className="settings-container">
      <h2>Disponible</h2>

      <div className="shirt-counts">
        <h3>Cantidad de camisas disponibles</h3>
        <div>
          <label htmlFor="classic-shirt-count">Camisas de cuello clásicas:</label>
          <input
            type="number"
            id="classic-shirt-count"
            value={classicShirtCount}
            onChange={handleClassicShirtCountChange}
          />
        </div>

        <div>
          <label htmlFor="long-sleeve-shirt-count">Camisas de manga larga:</label>
          <input
            type="number"
            id="long-sleeve-shirt-count"
            value={longSleeveShirtCount}
            onChange={handleLongSleeveShirtCountChange}
          />
        </div>

        <div>
          <label htmlFor="short-sleeve-shirt-count">Camisas de manga corta:</label>
          <input
            type="number"
            id="short-sleeve-shirt-count"
            value={shortSleeveShirtCount}
            onChange={handleShortSleeveShirtCountChange}
          />
        </div>
      </div>

      <div className="chart-container">
        <canvas ref={lineChartRef}></canvas>
      </div>
    </div>
  );
};

export default SettingsPage;


