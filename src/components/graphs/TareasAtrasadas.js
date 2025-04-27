
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

const TareasGraph = ({ tareasFinalizadas, tareasAtrasadas }) => {
  const data = {
    labels: ['Tareas'], // Etiqueta para la categoría, en este caso solo una barra: Tareas
    datasets: [
      {
        label: 'Tareas Finalizadas dentro del Tiempo Estimado',
        data: [tareasFinalizadas], // Valor para las tareas finalizadas
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color para las tareas finalizadas
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Tareas Atrasadas o Fuera del Tiempo Estimado',
        data: [tareasAtrasadas], // Valor para las tareas atrasadas
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Color para las tareas atrasadas
        borderColor: 'rgba(255, 99, 132, 1)',
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
        text: 'Tareas Finalizadas vs Tareas Atrasadas',
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Asegúrate de que el eje Y comience en cero
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default TareasGraph;