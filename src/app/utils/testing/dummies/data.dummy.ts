import { Newspaper } from './../../../core/models/newspaper.model';
import { of, throwError } from 'rxjs';
import { Analysis } from 'src/app/core/models/analysis.model';
import { StatInfo } from 'src/app/core/models/stat-info.model';

// Dummy trends
export const dummyTrends = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
];

export const dummyTrends2 = [
    { Framework: 'Salut', Stars: '116443', Released: '2012' },
    { Framework: 'Ca', Stars: '50793', Released: '2013' },
    { Framework: 'Va', Stars: '62342', Released: '2019' },
    { Framework: 'Sale', Stars: '37647', Released: '2010' },
    { Framework: 'Pute', Stars: '1471', Released: '2011' },
];
export const dummyTrendsResponse = of(dummyTrends);

export const dummyAnalyses = [
    new Analysis('Topics', new StatInfo('Health', '47%'), [dummyTrends]),
    // new Analysis('NA', new StatInfo('info', 'top'), []),
    new Analysis('Gender tracker', new StatInfo('Men', '78%'), [dummyTrends]),
    new Analysis('Sentiment', new StatInfo('Positive', '65%'), [dummyTrends]),
    // new Analysis('NA', new StatInfo('info', 'bottom'), []),
    new Analysis('Keywords', new StatInfo('', '"pute"'), [dummyTrends]),
    new Analysis('Sources', new StatInfo('Sources', '147'), [dummyTrends]),
    new Analysis('Diversity', new StatInfo('Information', '0.58%'), [dummyTrends]),
];

export const dummyNewspaper = (newspaperName: string) => new Newspaper(newspaperName, new StatInfo('articles', '13290', ['from 12.07.2018', 'to 03.03.2021']), dummyAnalyses);

export const dummyNewspaperResponse = (newspaperName: string) => of(dummyNewspaper(newspaperName));

export const dummyErrorResponse = throwError(new Error());
