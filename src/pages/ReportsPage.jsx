// ReportsPage.jsx
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ReportsPage = () => {
  const barChartRef = useRef(null);
  const doughnutChartRef = useRef(null);

  useEffect(() => {
    const barChartOptions = {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
          {
            label: 'Ventas',
            data: [2000, 1500, 1800, 2200, 2500],
            backgroundColor: '#4caf50', // Color de fondo de las barras
          },
        ],
      },
      options: {
        responsive: true, // Establecer a true para que el gráfico sea responsivo
        aspectRatio: 1.5, // Relación de aspecto deseada (ajusta según tus necesidades)
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    const doughnutChartOptions = {
      type: 'doughnut',
      data: {
        labels: ['Categoría 1', 'Categoría 2', 'Categoría 3'],
        datasets: [
          {
            data: [30, 40, 20],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'], // Colores de fondo de las porciones
          },
        ],
      },
      options: {
        responsive: true, // Establecer a true para que el gráfico sea responsivo
        aspectRatio: 1.5, // Relación de aspecto deseada (ajusta según tus necesidades)
      },
    };

    const barChart = new Chart(barChartRef.current, barChartOptions);
    const doughnutChart = new Chart(doughnutChartRef.current, doughnutChartOptions);

    return () => {
      barChart.destroy();
      doughnutChart.destroy();
    };
  }, []);

  return (
    <div className="reports-container">
      <h2>Reportes</h2>

      <div className="chart-row">
        <div className="chart-container">
          <canvas ref={barChartRef}></canvas>
        </div>

        <div className="chart-container">
          <canvas ref={doughnutChartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;







