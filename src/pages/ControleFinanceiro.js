import React, { useState } from "react";
import { Button, Card, Space } from 'antd';
import './ControleFinanceiro.css';
import TabelaItens from "../components/TabelaItens";

function ControleFinanceiro() {
  const [despesas, setDespesas] = useState([]);
  const [ganhos, setGanhos] = useState([]);

  function criarDespesa() {
    setDespesas(
      [
        {
          descricao: "Uber",
          valor: 500.00
        },
        {
          descricao: "Escola",
          valor: 200.00
        },
        {
          descricao: "Comida",
          valor: 100.00
        },
        {
          descricao: "Meercado",
          valor: 40.00
        },
      ]
    );
  }

  return (
    <>
      {/* <div class="content-wrapper"> */}
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <Card className="container">
          <div style={{ paddingBottom: "10px" }}>
            <Button
              size={"large"}
              danger
              type="primary"
              onClick={criarDespesa}
            >+ CONTA</Button>
          </div>
          <div>
            <TabelaItens itens={despesas} />
          </div>
          <span>Teste</span>
        </Card>
        <Card className="container">
          <Button size={"large"} type="primary">+ GRANA</Button>
          Teste 2
        </Card>
      </Space>
      {/* </div> */}
    </>
  );
}

export default ControleFinanceiro;