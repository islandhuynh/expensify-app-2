import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount,} from '../../actions/filters'


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    }) 
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('should generate set text filter ', () => {
    const action = setTextFilter('abc');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'abc'
    });
});

test('should generate nothing for text filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: undefined
    });
});

test('should generate sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
})

test('should generate sort by date action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
})

// // SET_TEXT_FILTER
// export const setTextFilter = (text) => ({
//     type: 'SET_TEXT_FILTER',
//     text
// })

// // SORT_BY_DATE
// export const sortByDate = () => ({
//     type: 'SORT_BY_DATE',
// })

// // SORT_BY_AMOUNT
// export const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT',
// })

// // SET_START_DATE
// export const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// })

// // SET_END_DATE
// export const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// })