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
import styles from './workshop-section.module.css';

type Props = {
  workshop: Workshop;
};

export default function WorkshopSection({ workshop }: Props) {
  return (
    <>
      <Link href="/workshops">
        <a className={styles.backlink}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to workshops
        </a>
      </Link>
      <div key={workshop.title} className={styles.container}>
        <div className={styles['workshop-details']}>
          <div>
            <h1 className={styles.title}>{workshop.title}</h1>
            <p className={styles.description}>{workshop.description}</p>
          </div>
        </div>
      </div>

      <div className={styles['workshop-details']}>
        <h3 className={styles['socials-header']}>{`Mentor: ${workshop.mentor.name}`}</h3>
      </div>
    </>
  );
}
