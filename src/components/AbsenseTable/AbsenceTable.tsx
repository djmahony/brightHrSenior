import react from 'react';
import AbsenceDisplay from '../AbsenceDisplay/AbsenceDisplay';
import styles from './AbsenceTable.module.scss';
import { Absence } from '../../types/absenceTypes';

interface AbsenceTableProps {
    absences: Absence[];
}

const AbsenceTable: React.FC<AbsenceTableProps> = ({ absences}) => {
    return (
        <section className={styles.absenceTable}>
            Table
        </section>
    )
}

export default AbsenceTable