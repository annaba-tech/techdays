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
import cn from 'classnames';
import { Partner } from '@lib/types';
import styles from './partner-section.module.css';
import styleUtils from './utils.module.css';

type Props = {
  partner: Partner;
};

export default function PartnerSection({ partner }: Props) {
  return (
    <>
      <Link href="/partners">
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
          Back to partners
        </a>
      </Link>
      <div className={styles.layout}>
        <div className={styles.container}>
          <div className={styles['name-and-logo']}>
            <Image
              alt={partner.name}
              src={partner.logo.url}
              className={styles.image}
              loading="lazy"
              title={partner.name}
              height={64}
              width={64}
            />
            <h1 className={styles.name}>{partner.name}</h1>
          </div>
          <p className={styles.description}>{partner.description}</p>

          <div className={styles.resources}>
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(styles.button, styles['button-resource'])}
            >
              <span className={styles.truncate}>Website</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                shapeRendering="geometricPrecision"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <path d="M15 3h6v6" />
                <path d="M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
