import { XYPosition } from '@xyflow/react';
import { CalculationElement, Transformer } from '../calculation/calculation.interface';
import { SEConnections, SEInterface, Sensor } from './se.interface';

interface SEProps {
    image?: string;
    imageWidth?: number;
    fixed?: boolean;
    connections?: SEConnections;
    availableTransformers?: string[];
    calculations?: CalculationElement[];
    massBalances?: MassBalanceElement[];
    dimensionElement?: JSX.Element;
    dimensionsBottomElement?: JSX.Element;
    transformerColor?: string;
}

interface MassBalanceElement {
    id: string;
    name: string;
    content: JSX.Element;
}

export default class SE implements SEInterface {
  id: string;
  position: XYPosition;

  label: string;
  calculations: CalculationElement[] = [];
  transformers: Transformer[] = [];
  sensors: Sensor[] = [];

  connections: SEConnections = {
  };

  image = {
    path: undefined,
    width: 0,
  };

  availableTransformers: string[];
  hideInfo = false;

  events: {
    isDraggingSensor: boolean;
    isDraggingTransformer: boolean;
  } = {
    isDraggingSensor: false,
    isDraggingTransformer: false,
  }

  massBalances: MassBalanceElement[] = [];
  dimensionElement: JSX.Element | undefined;
  dimensionsBottomElement: JSX.Element | undefined;
  transformerColor: string | undefined;

  constructor(
    label: string,
    position: XYPosition,
    options: SEProps = {},
  ) {
    this.label = label;
    this.id = label.toLocaleLowerCase().replace(' ', '-');
    this.position = position;

    this.availableTransformers = options.availableTransformers || this.availableTransformers;

    // optional info about the element
    this.image.path = options.image;
    this.image.width = options.imageWidth;
    this.connections = options.connections || this.connections;
    this.calculations = options.calculations || this.calculations;

    this.massBalances = options.massBalances || [];
    this.dimensionElement = options.dimensionElement;
    this.dimensionsBottomElement = options.dimensionsBottomElement;
    this.transformerColor = options.transformerColor;
    this.hideInfo = options.fixed || false;
  }
}
