
import './graph.css'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TareasPorMesGraph = ({ tareasPorMes }) => {
  // Aquí asumimos que tareasPorMes es un arreglo con 12 valores, uno por cada mes
  const data = {
    labels: [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ], // Meses del año
    datasets: [
      {
        label: 'Tareas Asignadas',
        data: tareasPorMes, // El arreglo de tareas asignadas por mes
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de las barras
        borderColor: 'rgba(54, 162, 235, 1)', // Color de los bordes de las barras
        borderWidth: 1,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Tareas Asignadas por Mes',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Asegúrate de que el eje Y comience en cero
      },
    },
  };

  return (
    <div className="graph-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TareasPorMesGraph;