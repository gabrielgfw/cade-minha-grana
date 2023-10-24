import { Table } from 'antd';
import React, { useEffect, useState } from 'react';


function TabelaItens({ itens }) {
  const [filtroDescricao, setFiltroDescricao] = useState([{}]);

  useEffect(() => {
    if (itens.length > 0) {
      setFiltroDescricao(
        itens.map(i => {
          return {
            text: i.descricao,
            value: i.descricao
          }
        })
      );
    }
  }, [itens]);

  const columns = [
    {
      title: 'Descrição',
      dataIndex: 'descricao',
      filters: filtroDescricao,
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => {
        console.log(`# Value:`);
        console.log(value);
        console.log(`# Record:`);
        console.log(record);
        return record.descricao.indexOf(value) === 0
      },
      sorter: (a, b) => a.descricao.length - b.descricao.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Valor',
      dataIndex: 'valor',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.valor - b.valor,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      filters: [
        {
          text: 'London',
          value: 'London',
        },
        {
          text: 'New York',
          value: 'New York',
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table columns={columns} dataSource={itens} onChange={onChange} />
  )
}

export default TabelaItens;