import { of, throwError } from 'rxjs';

// Dummy trends
export const dummyTrends = [
    { Framework: 'Vue', Stars: '166443', Released: '2014' },
    { Framework: 'React', Stars: '150793', Released: '2013' },
    { Framework: 'Angular', Stars: '62342', Released: '2016' },
    { Framework: 'Backbone', Stars: '27647', Released: '2010' },
    { Framework: 'Ember', Stars: '21471', Released: '2011' },
];
export const dummyTrendsResponse = of(dummyTrends);

// Dummy newspaper data
export const dummyNewspaperInfo = [
    { title: 'Info 1', content: 'info c1' },
    { title: 'Info 2', content: 'info top' },
    { title: 'Info 3', content: 'info c2' },
    { title: 'Info 4', content: 'info left' },
    { title: 'Dummy newspaper', content: 'general info' },
    { title: 'Info 5', content: 'info right' },
    { title: 'Info 6', content: 'info c3' },
    { title: 'Info 7', content: 'info bottom' },
    { title: 'Info 8', content: 'info c4' },
];

export const dummyNewspaperInfoResponse = of(dummyNewspaperInfo);

export const dummyErrorResponse = throwError(new Error());
