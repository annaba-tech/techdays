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
import Image from 'next/image';
import Link from 'next/link';
import { Talk } from '@lib/types';
import styles from './workshop-section.module.css';

type Props = {
  workshop: Talk;
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
            <h2 className={styles['description-header']}>Overview</h2>
            <p className={styles.description}>{workshop.description}</p>
            <h2 className={styles['description-header']}>
              {workshop.mentor.length > 1 ? 'Mentors' : 'Mentor'}
            </h2>
            <div className={styles['mentors-grid']}>
              {workshop.mentor.map(mentor => (
                <Link key={mentor.name} href={`/mentors/${mentor.slug}`}>
                  <a role="button" tabIndex={0} className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <Image
                        alt={mentor.name}
                        src={mentor.image.url}
                        className={styles.image}
                        loading="lazy"
                        quality="50"
                        title={mentor.name}
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <div>
                        <h2 className={styles.mentorName}>{mentor.name}</h2>
                        <p className={styles.mentorTitle}>{mentor.title}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
