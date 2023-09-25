import { useState } from 'react';
import PageContainer from "../../components/PageContainer";
import { DeleteButton, EditButton, GraphContainer, TableContainer, Table, Main } from './Dashboard.style';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import ReactApexChart from 'react-apexcharts';


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
        position: 'bottom',
        fontSize: '18px',
        labels: {
          colors: '#3a3a3a',
        }
      },
      theme: {
        mode: 'light',
        palette: 'palette3'
      }
    });


  return (
    <PageContainer title="Início" subtitle={`Seja bem vindo á aplicação <Nome do Usuário>`}>
      <Main>
        <GraphContainer>
          <h2>Relação de salário / Contas </h2>
            <ReactApexChart 
                  options={salaryOptions} 
                  series={salaryOptions.series}
                  labels={salaryOptions.labels}
                  type={salaryOptions.chart.type} 
                  />
          </GraphContainer>
          <TableContainer>
          <Table>
                <thead>
                  <tr>
                    <th scope="col">Id.</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Data</th>
                    <th scope="col">Forma de Pagamento</th>
                    <th scope="col">#</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td data-label="Id">1</td>
                      <td data-label="Descrição">Café</td>
                      <td data-label="Valor">R$ 28,50</td>
                      <td data-label="Cadastrado">28/08/2023</td>
                      <td data-label="Pagamento">Cartão de crédito</td>
                      <td data-label="#">
                        <DeleteButton onClick={(e) => console.log('teste')} >
                          <AiOutlineDelete color='#FFF' size={17}/>
                        </DeleteButton>
                        <EditButton onClick={() => console.log('teste')} >
                          <AiOutlineEdit color='#FFF' size={17}/>
                        </EditButton>
                      </td>
                    </tr>
                </tbody>
              </Table>
        </TableContainer>
        </Main>
    </PageContainer>
  )
}

export default Dashboard;