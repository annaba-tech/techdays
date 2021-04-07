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
import styles from './partners-grid.module.css';

function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <Link key={partner.name} href={`/partners/${partner.slug}`}>
      <a role="button" tabIndex={0} className={cn(styles.card, styles.diamond)}>
        <div className={styles.imageWrapper}>
          <Image
            alt={partner.name}
            src={partner.logo.url}
            className={cn(styles.image)}
            loading="lazy"
            title={partner.name}
            width={900}
            height={500}
          />
        </div>
        <div className={styles.cardBody}>
          <div>
            <h2 className={styles.name}>{partner.name}</h2>
            <p className={styles.description}>{partner.description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

type Props = {
  partners: Partner[];
};

export default function PartnersGrid({ partners }: Props) {
  return (
    <>
      <div className={styles.grid}>
        {partners.map(partner => (
          <PartnerCard key={partner.name} partner={partner} />
        ))}
      </div>
    </>
  );
}
