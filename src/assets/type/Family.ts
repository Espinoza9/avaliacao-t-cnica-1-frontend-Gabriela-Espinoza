import { Dependente} from "../../component/FamilyForm";

export interface Family{
    id?:number;
    chefeFamiliar: string;
    rendaTotal: number;
    dependentes: Dependente[];
    pontuacao:number;
}