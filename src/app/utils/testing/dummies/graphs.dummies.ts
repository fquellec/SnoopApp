import { GraphTypeEnum } from 'src/app/core/models/graph-type.enum';
import { Graph } from 'src/app/core/models/graph.model';
import { dummyTopicsGraphData, dummyGenderData } from './data.dummy';

// tslint:disable-next-line: max-line-length
export const dummyTopicsGraph = new Graph('id', 'Ranking of topics covered by the newspaper', dummyTopicsGraphData, GraphTypeEnum.BarsHorizontal);

// tslint:disable-next-line: max-line-length
export const dummyKeywordsGraph = new Graph('id', 'Ranking of keywords used by the newspaper', dummyTopicsGraphData, GraphTypeEnum.BarsVertical);

export const dummyGendertrackerGraph = new Graph('id', 'Number of women and men quoted', dummyGenderData, GraphTypeEnum.Linear);

export const dummySentimentGraph = new Graph('id', 'Main sentiment present by topic', dummyTopicsGraphData, GraphTypeEnum.Gauge);

