import BillGraphCard from "../../components/BillGraphCard";
import PageContainer from "../../components/PageContainer";
import { BillGraph, TableContainer, BillDescription } from './Dashboard.style';
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
          colors: '#3a3a3a',
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
        {/* <h1>Bem vindo "nomeDoUsuario"</h1> */}
        <BillGraphCard options={salaryOptions} />
        <BillDescription>
          Salário: 2700
        </BillDescription>
      </BillGraph>
      <TableContainer>
      </TableContainer>
    </PageContainer>
  )
}

export default Dashboard;