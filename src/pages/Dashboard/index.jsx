import BillGraphCard from "../../components/BillGraphCard";
import PageContainer from "../../components/PageContainer";
import { BillGraph, TableContainer } from './Dashboard.style';
import { useState } from 'react';

function Dashboard() {

  const[ salaryOptions, setSalaryOptions ] = useState({
      chart: {
        type: 'donut'
      },
      series: [2450, 1420],
      labels: ['Salário', 'Contas'],
      chartOptions: {
        labels: ['Salário', 'Contas']
      },
      legend: {
        fontSize: '18px',
        labels: {
          colors: '#fff',
        }
      }
    });

    const[ cardsOptions, setCardsOptions ] = useState({
      chart: {
        type: 'donut'
      },
      series: [2450, 1420],
      labels: ['Crédito', 'Débito'],
      chartOptions: {
        labels: ['Crédito', 'Débito']
      }
    });


  return (
    <PageContainer>
      <BillGraph>
      <BillGraphCard options={salaryOptions} />
        
      </BillGraph>
      <TableContainer>

      </TableContainer>
    </PageContainer>
  )
}

export default Dashboard;