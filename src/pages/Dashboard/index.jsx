import { useState } from 'react';
import PageContainer from "../../components/PageContainer";
import { DeleteButton, EditButton, Introduction, Table, TableContainer, TableFunctions } from './Dashboard.style';
import BillGraphCard from '../../components/BillGraphCard';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'


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
      <Introduction>
      <BillGraphCard options={salaryOptions} />
      </Introduction>
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
    </PageContainer>
  )
}

export default Dashboard;