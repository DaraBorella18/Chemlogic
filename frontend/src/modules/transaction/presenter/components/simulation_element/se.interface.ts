import { XYPosition } from "@xyflow/react";
import { CalculationElement, Transformer } from "../calculation/calculation.interface";

export interface Sensor {
    id: string;
    name: string;
    tooltip: string;
    type: string;    
}

export interface SEConnections {
    left?: "source" | "target";
    right?: "source" | "target";
    bottom?: "source" | "target";
    top?: "source" | "target";
}

/**
 * SE
 * Simulation Element interface
 */
export interface SEInterface {
    // react flow variables
    id: string;
    position: XYPosition,

    label: string;
    calculations: CalculationElement[];
    transformers: Transformer[];
    sensors: Sensor[];
    availableTransformers: string[];
    connections: SEConnections;
}