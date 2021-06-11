import { Newspaper } from 'src/app/core/models/newspaper.model';
import { StatInfo } from 'src/app/core/models/stat-info.model';
import { of, throwError } from 'rxjs';
import { Analysis } from 'src/app/core/models/analysis.model';
import { dummyTopicsGraph, dummyGendertrackerGraph, dummySentimentGraph, dummyKeywordsGraph } from './graphs.dummies';

export const dummyAnalyses = [
    new Analysis('topics', 'Topics', new StatInfo('Health', '47%'), [dummyTopicsGraph]),
    new Analysis('gendertracker', 'Gender tracker', new StatInfo('Men', '78%'), [dummyGendertrackerGraph]),
    new Analysis('sentiment', 'Sentiment', new StatInfo('Positive', '65%'), [dummySentimentGraph]),
    new Analysis('keywords', 'Keywords', new StatInfo('', '"pute"'), [dummyKeywordsGraph]),
    new Analysis('sources', 'Sources', new StatInfo('Sources', '147'), []),
    new Analysis('diversity', 'Diversity', new StatInfo('Information', '0.58%'), []),
];

export const dummyNewspaper = (newspaperName: string) => new Newspaper(
    newspaperName.toLowerCase().replace('_', ''),
    newspaperName.toUpperCase(),
    new StatInfo('articles', '13290', ['from 12.07.2018', 'to 03.03.2021']),
    dummyAnalyses
);

export const dummyNewspaperResponse = (newspaperName: string) => of(dummyNewspaper(newspaperName));

export const dummyErrorResponse = throwError(new Error());
