
import './graph.css'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

// Registramos los componentes necesarios de Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const ProgresoTareasGraph = ({ tareasCompletadas, tareasTotales }) => {
  const porcentajeCompletado = tareasCompletadas / tareasTotales * 100;

  // Datos del gráfico de progreso (tipo Doughnut)
  const data = {
    labels: ['Tareas Completadas', 'Tareas Pendientes'],
    datasets: [
      {
        data: [porcentajeCompletado, 100 - porcentajeCompletado],
        backgroundColor: ['#4caf50', '#e0e0e0'], // verde para completadas, gris para pendientes
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          // Mostrar el porcentaje en el tooltip
          label: function (context) {
            const value = context.raw;
            return `${value.toFixed(2)}%`;
          },
        },
      },
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Progreso de Tareas',
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProgresoTareasGraph;