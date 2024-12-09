import react from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AbsenceTable from './AbsenceTable';

const mockAbsences = [
    {"id":0,"startDate":"2022-05-28T04:39:06.470Z","days":9,"absenceType":"SICKNESS","employee":{"firstName":"Rahaf","lastName":"Deckard"},"approved":true},
    {"id":1,"startDate":"2022-02-08T08:02:47.543Z","days":5,"absenceType":"ANNUAL_LEAVE","employee":{"firstName":"Enya","lastName":"Behm"},"approved":true},
    {"id":2,"startDate":"2020-12-31T03:08:19.146Z","days":18,"absenceType":"ANNUAL_LEAVE","employee":{"firstName":"Amiah","lastName":"Fenton"},"approved":true},
    {"id":3,"startDate":"2022-01-01T13:12:13.562Z","days":14,"absenceType":"ANNUAL_LEAVE","employee":{"firstName":"Jabez","lastName":"Nasser"},"approved":true},
    {"id":4,"startDate":"2023-05-08T07:46:20.745Z","days":1,"absenceType":"ANNUAL_LEAVE","employee":{"firstName":"Jabez","lastName":"Nasser"}},
    {"id":5,"startDate":"2020-03-31T06:15:23.316Z","days":3,"absenceType":"ANNUAL_LEAVE","employee":{"firstName":"Alexi","lastName":"Schramm"}}
];

describe('AbscenceTable', () => {
    it('should sort the table by name', () => {
        render(<AbsenceTable abscences={mockAbsences} />);
        const filter = screen.getByTestId('sort-by');
        fireEvent.change(filter, { target: { value: 'name'}});

        const rows = screen.getAllByRole('row');
        const displayedAbsences = Array.from(rows)
            .slice(1);
        
        const sortedByName = [...mockAbsences].sort((a, b) => a.employee.firstName.localeCompare(b.employee.firstName));

        expect(displayedAbsences).toEqual(sortedByName);
    });

    it('should sort the table by date', () => {
        render(<AbsenceTable abscences={mockAbsences} />);
        const filter = screen.getByTestId('sort-by');
        fireEvent.change(filter, { target: { value: 'date'}});

        const rows = screen.getAllByRole('row');
        const displayedAbsences = Array.from(rows)
            .slice(1);
        
        const sortedByDate = [...mockAbsences].sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());

        expect(displayedAbsences).toEqual(sortedByDate);
    })

    it('should sort the table by absence type', () => {
        render(<AbsenceTable abscences={mockAbsences} />);
        const filter = screen.getByTestId('sort-by');
        fireEvent.change(filter, { target: { value: 'type'}});

        const rows = screen.getAllByRole('row');
        const displayedAbsences = Array.from(rows)
            .slice(1);
        
        const sortedByType = [...mockAbsences].sort((a, b) => a.absenceType.localeCompare(b.absenceType));

        expect(displayedAbsences).toEqual(sortedByType);
    })
});
