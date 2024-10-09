"use client";
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PublicationTimeChart = ({ news }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (!news || news.length === 0) {
      return;
    }

    const publicationTimes = news.map(article => {
      if (!article.publishedAt) return null; 
      const date = new Date(article.publishedAt);
      return date.getHours(); 
    }).filter(time => time !== null); 

    const hourCounts = Array(24).fill(0); 

    publicationTimes.forEach(hour => {
      hourCounts[hour] += 1; 
    });

    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Array.from({ length: 24 }, (_, i) => `${i}:00`),
        datasets: [
          {
            label: "Number of Articles Published",
            data: hourCounts,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Articles",
            },
          },
          x: {
            title: {
              display: true,
              text: "Hours",
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [news]);

  return (
    <div style={{ position: 'relative' }}>
      <canvas ref={chartRef} width="400" height="200" style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1 }}></canvas>
      {/* Other content like news cards can go here */}
      <div style={{ marginTop: '220px' }}> {/* Adjust this value as needed */}
        {/* Your news cards here */}
      </div>
    </div>
  );
};

export default PublicationTimeChart;
