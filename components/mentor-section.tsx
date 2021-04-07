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
import styles from './mentor-section.module.css';

type Props = {
  mentor: Mentor;
};

export default function MentorSection({ mentor }: Props) {
  return (
    <>
      <Link href="/mentors">
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
          Back to mentors
        </a>
      </Link>
      <div key={mentor.name} className={styles.container}>
        <div style={{ minWidth: '300px' }}>
          <Image
            alt={mentor.name}
            title={mentor.name}
            src={mentor.image.url}
            className={styles.image}
            loading="lazy"
            height={400}
            width={300}
          />
        </div>
        <div className={styles['mentor-details']}>
          <div>
            <h1 className={styles.name}>{mentor.name}</h1>
            <p className={styles.title}>{mentor.title}</p>
            <h2 className={styles['bio-header']}>Bio</h2>
            <p dangerouslySetInnerHTML={{ __html: mentor.bio }} className={styles.bio}></p>
            <h3 className={styles['socials-header']}>Social Media</h3>
            <div className={styles['social-icons']}>
              {mentor.twitter && (
                <a
                  aria-label="Twitter"
                  href={mentor.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    viewBox="0 0 24 24"
                    fill="#D8D8D8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.643 4.93695C22.808 5.30695 21.911 5.55695 20.968 5.66995C21.93 5.09395 22.668 4.17995 23.016 3.09195C22.116 3.62595 21.119 4.01395 20.058 4.22195C19.208 3.31795 17.998 2.75195 16.658 2.75195C14.086 2.75195 12 4.83795 12 7.41195C12 7.77595 12.042 8.12995 12.12 8.47195C8.24701 8.27695 4.81601 6.42195 2.51801 3.60395C2.11801 4.29395 1.88801 5.09395 1.88801 5.94595C1.88801 7.56195 2.71101 8.98895 3.96001 9.82395C3.19601 9.79895 2.47801 9.58995 1.85001 9.24095V9.30095C1.85001 11.558 3.45501 13.441 5.58701 13.869C5.19501 13.975 4.78401 14.031 4.36001 14.031C4.06001 14.031 3.76701 14.003 3.48301 13.949C4.07601 15.799 5.79601 17.147 7.83501 17.183C6.24001 18.433 4.23101 19.178 2.04901 19.178C1.67301 19.178 1.30201 19.156 0.937012 19.113C2.99901 20.436 5.44701 21.206 8.07701 21.206C16.647 21.206 21.332 14.108 21.332 7.95195C21.332 7.75195 21.327 7.54995 21.318 7.34995C22.228 6.69195 23.018 5.87295 23.641 4.93995L23.643 4.93695Z" />
                  </svg>
                </a>
              )}
              {mentor.github && (
                <a
                  aria-label="GitHub"
                  href={mentor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                      fill="#D8D8D8"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                </a>
              )}
              {mentor.linkedin && (
                <a
                  aria-label="LinkedIn"
                  href={mentor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    viewBox="0 0 20 20"
                    fill="#D8D8D8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 1.67079C0 0.748038 0.747522 0 1.67079 0H18.3292C19.252 0 20 0.747522 20 1.67079V18.3292C20 19.252 19.2525 20 18.3292 20H1.67079C0.748038 20 0 19.2525 0 18.3292V1.67079ZM7.91667 7.625H10.625V8.98583C11.0154 8.20333 12.0158 7.5 13.5187 7.5C16.3996 7.5 17.0833 9.0575 17.0833 11.9154V17.2083H14.1667V12.5662C14.1667 10.9388 13.7762 10.0208 12.7833 10.0208C11.4062 10.0208 10.8333 11.0104 10.8333 12.5662V17.2083H7.91667V7.625ZM2.91667 17.0833H5.83333V7.5H2.91667V17.0833ZM6.25 4.375C6.25 5.41042 5.41042 6.25 4.375 6.25C3.33958 6.25 2.5 5.41042 2.5 4.375C2.5 3.33958 3.33958 2.5 4.375 2.5C5.41042 2.5 6.25 3.33958 6.25 4.375Z"
                    />
                  </svg>
                </a>
              )}
              {mentor.facebook && (
                <a
                  aria-label="Facebook"
                  href={mentor.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="#D8D8D8"
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    ></path>
                  </svg>
                </a>
              )}
              {mentor.youtube && (
                <a
                  aria-label="Youtube"
                  href={mentor.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      fill="#D8D8D8"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                    ></path>
                  </svg>
                </a>
              )}
              {mentor.website && (
                <a
                  aria-label="Website"
                  href={mentor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                      fill="#D8D8D8"
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                    ></path>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {mentor.workshop && (
        <div className={styles['workshop-details']}>
          <h3 className={styles['socials-header']}>{`Workshop: ${mentor.workshop.title}`}</h3>
          <div>{mentor.workshop.description}</div>
        </div>
      )}
    </>
  );
}
