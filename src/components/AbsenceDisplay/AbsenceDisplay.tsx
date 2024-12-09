import styles from './AbsenceDisplay.module.scss';
import { Absence } from '../../types/absenceTypes';
import React from 'react';

interface AbsenceDisplayProps {
    absence: Absence;
}

const AbsenceDisplay: React.FC<AbsenceDisplayProps> = ({absence}) => {
    return (
        <tr>
            <td>{absence.id}</td>
            <td>{absence.startDate}</td>
            <td>{absence.days}</td>
            <td>{absence.absenceType}</td>
            <td>{absence.employee.firstName}</td>
            <td>{absence.employee.lastName}</td>
            <td>{absence.approved ? 'yes' : 'no'}</td>
            <td>{absence.conflicts ? 'yes' : 'no'}</td>
        </tr>
    )
}

export default AbsenceDisplay;