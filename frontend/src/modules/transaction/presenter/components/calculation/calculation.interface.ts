import { SimulationContextData } from "../../providers/simulation.provider";
import SE from "../simulation_element/se";

/**
 * Cria um registro que é mostrado na tela ao clicar no elemento
 */
export interface CalculationElement {
    name: string;
    variable: string;
    formula: string;
    value?: number;
    measurement?: string;
    calculationMethod: (values: CalculationValues, transformers: Transformer[], setValues: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>) => number;
    showOnScreen?: boolean;
    hideOnSidebar?: boolean;
    divider?: boolean;
}

/**
 * Responsável por transformar as variaveis utilizadas nos calculos
 */
export interface Transformer {
    // important settings used to identify transformer on drag and dro or any diagram card and calculation
    type: string;
    id: string;
    name: string;
    color: string;
    // used to place the info cards and calculation cards on the screen
    position?: { x: number; y: number };
    transformerContent?: JSX.Element;

    // transform the calculations inside any card to check the info
    transform: (value: number) => CalculationValues;

    // 
    onCreated?: (element: SE, useSimulation: SimulationContextData) => Promise<void>;
    onDeleted?: (element: SE, useSimulation: SimulationContextData) => Promise<void>;
}

/**
 * Lista genérica de todos os valores já calculados e disponíveis para outros calculos
 */
export type CalculationValues = { [key: string]: number };