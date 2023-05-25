


import { Api } from "../api/Api";
import { Family } from "../assets/type/Family";






 const getAll = async (): Promise<Family[] | Error> =>{
    try{
        
        const  {data }  = await Api().get('/family');
        return data;

        
       
    }catch (error) {
        console.error(error);

        return new Error((error as{messagem:string}).messagem ||'erro ao listar os registro.');
    }
};
const getById = async (id:number): Promise<Family[] | Error> =>{

    try { 
    const  {data}  = await Api().get(`/family/${id}`);

    if(data){
        return  data;
           
           
        
    }
    return new Error( 'erro ao listar os registro.');

        
    } catch (error) {
        console.error(error);

        return new Error((error as{messagem:string}).messagem ||'erro ao listar os registro.');
    }
};


const create = async (dataToCreate: Omit<Family, 'id'>): Promise<Family> => {
    try {
      const { data } = await Api().post('/family', dataToCreate);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error((error as { message: string }).message || 'Erro ao atualizar os registros.');
    }
  };


const updateById = async (id:number, dados:Family):  Promise<void | Error> =>{
    try { 
        const  {data}  = await Api().put(`family/${id}`,dados);
    
        
        } catch (error) {
            console.error(error);
    
            return new Error((error as{messagem:string}).messagem ||'erro ao atualizar os registro.');
        }
};


const deletById= async (id:number):  Promise<void | Error> =>{
    try { 
        const  {data}  = await Api().delete(`login/obter_colaboradores/${id}`);
    
        
        } catch (error) {
            console.error(error);
    
            return new Error((error as{messagem:string}).messagem ||'erro ao apagar os registro.');
        }
};



export const FamilyService={
    getAll,
    getById,
    create,
    updateById,
    deletById,
};