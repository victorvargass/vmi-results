import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(() => import('react-plotly.js'), {
  ssr: false
})

const PercentilPlot = ({ values }) => {
  const { vmi, visual, motor } = values
  return (
    <DynamicPlot
      config={{
        displayModeBar: false
      }}
      data={[
        {
          x: ['', 'VMI', 'Visual', 'Motriz', '_'],
          y: ['', vmi, visual, motor, ''],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
          yaxis: 'y',
          name: 'Percentil'
        },
        {
          yaxis: 'y2'
        }
      ]}
      layout={{
        title: 'PERFIL',
        width: 450,
        height: 500,
        margin: { l: 55, r: 55, t: 55, b: 20 },
        xaxis: {
          titlefont: { color: '#1f77b4' },
          side: 'top',
          tickvals: [0, 1, 2, 3, 4],
          ticktext: ['', 'VMI', 'Visual', 'Motriz', '']
        },
        yaxis: {
          title: 'Puntuación estándar',
          titlefont: { color: '#1f77b4' },
          tickfont: { color: '#1f77b4' },
          side: 'left',
          range: [45, 155],
          dtick: 5,
          tick0: 45
        },
        yaxis2: {
          title: 'Percentil',
          titlefont: { color: '#9467bd' },
          tickfont: { color: '#9467bd' },
          side: 'right',
          overlaying: 'y1',
          range: [0.3, 100.0],
          tickvals: [0.3, 5, 9, 16, 25, 37, 50, 63, 75, 84, 91, 95, 100]
        }
      }}
    />
  )
}

export default PercentilPlot
