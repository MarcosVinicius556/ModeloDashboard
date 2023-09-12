import { GraphCard } from './BillGraphCard.style.jsx';

export default function BillGraphCard({ options }) {
    return(
        <GraphCard 
            options={options} 
            series={options.series}
            labels={options.labels}
            type={options.chart.type} 
        />
    );
}