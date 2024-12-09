import { useState, useEffect } from 'react';
import styles from './Absences.module.scss';
import AbsenceTable from '../AbsenseTable/AbsenceTable';
import { Absence } from '../../types/absenceTypes';

const getAbsences = async () => {
    try {

        const response = await fetch('https://front-end-kata.brighthr.workers.dev/api/absences');

        if(!response.ok) {
            throw new Error(`Error! Status: ${response.status}`);
        }

        const data = await response.json();
        
        return data;
    } catch(err) {
        console.log("Error fetching data:", err);
        return [];
    }
}

const Absences = () => {

    const [absences, setAbsences] = useState<Absence[]>([]);
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchAbsences = async () => {
            const data = await getAbsences();
            setAbsences(data);
            setLoading(false);
        };

        fetchAbsences();
    }, []);

    return (
        <section className={styles.absences}>
            <h1>Absences</h1>
            {loading ? <p>Loading</p> : <AbsenceTable absences={absences} />}
        </section>
    )
}

export default Absences;