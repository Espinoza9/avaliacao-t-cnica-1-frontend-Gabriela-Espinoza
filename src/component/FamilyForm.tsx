import axios from 'axios';
import classes from '../assets/FamilyForm.module.css'
import React, { useState } from 'react';

export const API_URL = 'http://localhost:8080';

export interface Dependente {
  dependente: any;
  id: number;
  nome: string[];
  idade: number;
}

interface Family {
  chefeFamiliar: string;
  rendaTotal: number;
  dependentes: Dependente[];
}

const FamilyForm: React.FC = () => {
  const [chefeFamiliar, setChefeFamiliar] = useState('');
  const [rendaTotal, setRendaTotal] = useState(0);
  const [dependentes, setDependentes] = useState([{ nome: '', idade: 0 }]);

  const handleAddDependente = () => {
    setDependentes([...dependentes, { nome: '', idade: 0 }]);
  };

  const handleDependenteChange = (index: number, field: string, value: string | number) => {
    const newDependentes = [...dependentes];
    newDependentes[index] = { ...newDependentes[index], [field]: value };
    setDependentes(newDependentes);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      chefeFamiliar,
      rendaTotal,
      dependentes,
    };

    try {
      const response = await axios.post(`${API_URL}/family/createWithDependentes`, data);
      console.log('Dados da família cadastrados:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao cadastrar família:', error);
    }
  };

  return (
    <form>
      <div className={classes.card_body}>
        <div className={classes.card}>
          <h1>Cadastrar</h1>

          <label htmlFor="chefeFamiliar">Chefe Familiar:</label>
          <input
            type="text"
            id="chefeFamiliar"
            value={chefeFamiliar}
            onChange={(e) => setChefeFamiliar(e.target.value)}
          />

          <label htmlFor="rendaTotal">Renda Total:</label>
          <input
            type="number"
            id="rendaTotal"
            value={rendaTotal}
            onChange={(e) => setRendaTotal(parseInt(e.target.value))}
          />

          <label>Dependentes:</label>
          {dependentes.map((dependente, index) => (
            <div key={index}>
              <label htmlFor={`dependenteNome-${index}`}>Nome do Dependente {index + 1}:</label>
              <input
                type="text"
                id={`dependenteNome-${index}`}
                value={dependente.nome}
                onChange={(e) => handleDependenteChange(index, 'nome', e.target.value)}
              />

              <label htmlFor={`dependenteIdade-${index}`}>Idade do Dependente {index + 1}:</label>
              <input
                type="number"
                id={`dependenteIdade-${index}`}
                value={dependente.idade}
                onChange={(e) => handleDependenteChange(index, 'idade', parseInt(e.target.value))}
              />
            </div>
          ))}
          <button type="button" onClick={handleAddDependente} className={classes.conteudo}>
            Adicionar Dependente
          </button>

          <button type="submit" onClick={handleSubmit} className={classes.conteudo}>
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FamilyForm;