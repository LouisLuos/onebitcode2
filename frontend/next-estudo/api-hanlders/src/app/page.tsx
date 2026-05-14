import { PlanetsManager } from '@/src/components/PlanetsManager/page';
import { planetsMockup } from '@/src/data/planets';
import styles from './page.module.css';

export default async function Page() {
  // Bypassing fetch for internal data to avoid build-time errors and port issues
  const planets = planetsMockup;

  return (
    <div className={styles.page}>
      <h1>Planetas</h1>
      <PlanetsManager startingPlanets={planets} />
    </div>
  );
};
