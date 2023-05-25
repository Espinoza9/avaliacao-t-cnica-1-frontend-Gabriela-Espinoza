import { useEffect, useState } from "react";

import { Environment } from "../environment";
import classes from '../assets/ListagemFamily.module.css'
import { Family } from "../assets/type/Family";
import { LinearProgress, TableFooter, TableRow } from "@mui/material";
import StyledPagination from "../assets/StyledPagination";
import { API_URL } from "./FamilyForm";


const ListagemFamily: React.FC = () => {

  const [family, setFamily] = useState<Family[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const [totalCount, setTotalCount] = useState<number>(0);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const displayedFamilies = family.slice(startIndex, endIndex);




  useEffect(() => {

    const fetchFamilies = async () => {

      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/family`);
        const data = await response.json();
        setFamily(data);
        setIsLoading(false);

        const totalCount = data.length;
        const totalPages = Math.ceil(totalCount / perPage);
        setTotalCount(totalCount);
     

      } catch (error) {
        console.error('Erro ao buscar famílias:', error);
        setIsLoading(false);
      }
    };

    fetchFamilies();

  }, []);


  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div>

      <table className={classes.table_listagem_family}>
        <thead className={classes.listagem_family}>
          <tr> <th >Chefe Familiar</th></tr>
          <tr><td >Dependentes</td></tr>
          <tr><td >Renda total</td></tr>
          <tr><td >Pontos</td></tr>


        </thead>

        <hr className={classes.listagem_family_linha} />

        <tbody className={classes.listagem_family_dados} >

          {totalCount === 0 && !isLoading && (
            <caption className={classes.busca_listagem_alunos}>{Environment.BUSCA_VAZIA}</caption>
          )}

          < >
            {displayedFamilies.map((family) => (
              <tr><td key={family.chefeFamiliar}>
                <tr ><th className={classes.listagem_dados_chefefamiliar}> {family.chefeFamiliar ? family.chefeFamiliar : <span className={classes.listagem_dados_vazios} > {Environment.LISTAGEM_VAZIA} </span>}</th></tr>
                {family.dependentes.length > 0 ? (
                  <span>
                    {family.dependentes.map((dependente) => (
                      <span className={classes.listagem_dependente} key={dependente.id}>
                        {dependente.nome ? (
                          <span className={classes.listagem_dados_vazios}>
                            {dependente.nome} ({dependente.idade})
                          </span>
                        ) : (
                          <span className={classes.listagem_dados_vazios}>{Environment.LISTAGEM_VAZIA}</span>
                        )}
                      </span>
                    ))}
                  </span>
                ) : (
                  <span className={classes.listagem_dados_vazios}>{Environment.LISTAGEM_VAZIA}</span>
                )}

                <td className={classes.listagem_family_pontuaçao}> {family.rendaTotal ? family.rendaTotal : <span className={classes.listagem_dados_vazios}> {Environment.LISTAGEM_VAZIA} </span>}</td>
                <td className={classes.listagem_family_dados} > {family.pontuacao ? family.pontuacao : <span className={classes.listagem_dados_vazios} > {Environment.LISTAGEM_VAZIA} </span>}</td>
              </td>
              </tr>
            ))}

          </>

        </tbody>


        <tfoot className={classes.listagem_alunos_paginacao}>
        {(totalCount > 0 && totalCount > Environment.LIMITE_DE_LINHAS) && (
            
          <StyledPagination
            classes={{ root: classes.root }}
                 count={Math.ceil(family.length / perPage)}
            page={page}
            onChange={handlePageChange}
            showFirstButton
            showLastButton
            shape="rounded"


          />
          )}
        </tfoot>


        <TableFooter>
          {isLoading && (
            <TableRow>
              <LinearProgress variant="indeterminate" />
            </TableRow>
          )}
        </TableFooter>

      </table>

    </div>
  );
};


export default ListagemFamily;


