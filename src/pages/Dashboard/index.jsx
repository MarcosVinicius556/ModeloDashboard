import { useState } from 'react';
import PageContainer from "../../components/PageContainer";
import { DeleteButton, EditButton, GraphContainer, TableContainer, Table, TableFunctions, Main } from './Dashboard.style';
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
                  <th>ID</th>
                  <th>Descrição</th>
                  <th>Valor Gasto</th>
                  <th>Data</th>
                  <th>Tipo de pagamento</th>
                  <th>Funções</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Café</td>
                  <td>R$ 28,50</td>
                  <td>14/09/2023</td>
                  <td>Cartão de crédito</td>
                  <TableFunctions>
                      <EditButton>
                        <AiOutlineEdit size={30}/>
                      </EditButton>
                      <DeleteButton>
                        <AiOutlineDelete size={30}/>
                      </DeleteButton>
                  </TableFunctions>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Café</td>
                  <td>R$ 28,50</td>
                  <td>14/09/2023</td>
                  <td>Cartão de crédito</td>
                  <TableFunctions>
                      <EditButton>
                        <AiOutlineEdit size={30}/>
                      </EditButton>
                      <DeleteButton>
                        <AiOutlineDelete size={30}/>
                      </DeleteButton>
                  </TableFunctions>
                </tr>
            </tbody>
          </Table>
        </TableContainer>
        </Main>
    </PageContainer>
  )
}

export default Dashboard;