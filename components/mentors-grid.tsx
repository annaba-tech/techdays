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
import Image from 'next/image';
import { Mentor } from '@lib/types';
import styles from './mentors-grid.module.css';

type Props = {
  mentors: Mentor[];
};

export default function MentorsGrid({ mentors }: Props) {
  return (
    <div className={styles.grid}>
      {mentors.map(mentor => (
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
                <h2 className={styles.name}>{mentor.name}</h2>
                <p className={styles.title}>{mentor.title}</p>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
