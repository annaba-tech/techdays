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

import cn from 'classnames';
import styleUtils from './utils.module.css';
import styles from './hero.module.css';
import { BRAND_NAME, DATE, SITE_DESCRIPTION } from '@lib/constants';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className={styles.wrapper}>
      <div className={cn(styleUtils.appear, styleUtils['appear-third'], styles.logo)}>
        <Image alt="annabatech logo" src="/g27.png" height={169} width={500} />
        <h2 className={styles.edition}>
          2<sup>nd</sup> Edition
        </h2>
      </div>

      <p className={cn(styleUtils.appear, styleUtils['appear-third'], styles.hero)}>
        Toward a Community of Problem Solvers
        <br className={styleUtils['show-on-desktop']} />
      </p>

      <div className={cn(styleUtils.appear, styleUtils['appear-fourth'], styles.info)}>
        <p>{DATE}</p>
        <div className={styles['description-separator']} />
        <p>
          <strong>Sheraton Hotel, Annaba</strong>
        </p>
      </div>
      <a
        className={cn(styleUtils.appear, styleUtils['appear-fifth'], styles.registration)}
        href="https://annabatechday.eventbrite.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        REGISTER
      </a>
    </div>
  );
}
