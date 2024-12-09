import { useState } from 'react';
import AbsenceDisplay from '../AbsenceDisplay/AbsenceDisplay';
import styles from './AbsenceTable.module.scss';
import { Absence } from '../../types/absenceTypes';

interface AbsenceTableProps {
    absences: Absence[];
}

const AbsenceTable: React.FC<AbsenceTableProps> = ({ absences}) => {

    const [sortOption, setSortOption] = useState<'id' | 'name' | 'date' | 'type'>('name');

    const sortedAbsences = absences.sort((a, b) => {
        if(sortOption === 'id') {
            return a.id - b.id;
        }
        if (sortOption === 'name') {
            return a.employee.lastName.localeCompare(b.employee.lastName);
        }
        if (sortOption === 'date') {
            const dateA = a.startDate ? new Date(a.startDate).getTime() : 0;
            const dateB = b.startDate ? new Date(b.startDate).getTime() : 0;
            return dateA - dateB;
        }
        if (sortOption === 'type') {
            return a.absenceType.localeCompare(b.absenceType);
        }
        return 0;
    });


    return (
        <section className={styles.absenceTable}>
            <header className={styles.controls}>
                <div className={styles.sort}>
                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value as 'id' | 'name' | 'date' | 'type')}
                        className={styles.sortSelect}
                    >
                        <option value="id">Sort by ID</option>
                        <option value="name">Sort by Name</option>
                        <option value="date">Sort by Date Added</option>
                        <option value="type">Sort by Type</option>
                    </select>
                </div>
            </header>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Date</td>
                        <td>Days</td>
                        <td>Type</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Approved</td>
                        <td>conflicts</td>
                    </tr>
                </thead>
                <tbody>
                    {sortedAbsences.map((absence, index) => (
                        <AbsenceDisplay key={`${absence.id}-${index}`} absence={absence} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default AbsenceTable