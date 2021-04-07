/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Link from 'next/link';
import { Workshop } from '@lib/types';
import styles from './workshops-grid.module.css';

type Props = {
  workshops: Workshop[];
};

export default function WorkshopsGrid({ workshops }: Props) {
  return (
    <div className={styles.grid}>
      {workshops.map(workshop => (
        <Link key={workshop.title} href={`/workshops/${workshop.slug}`}>
          <a role="button" tabIndex={0} className={styles.card}>
            <div className={styles.cardBody}>
              <div>
                <h2 className={styles.name}>{workshop.title}</h2>
                <p className={styles.title}>{workshop.description}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
