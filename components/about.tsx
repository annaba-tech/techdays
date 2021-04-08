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

import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <p>
        Annaba Tech is a <strong>community-driven</strong> initiative with the goal to create a
        dynamic local ecosystem of developers, startups, entrepreneurs, researchers, experts, tech
        promoters and users in general. We call them <strong>“problem solvers”</strong>. 
      </p>
      <p>
        We tackle Algeria’s most demanding challenges through tech. Not only as business owners and
        startups, but also by evolving a community of coders, designers and hackers. 
      </p>
      <p>Instead of chasing hard-to-find talents, we raise them. </p>
      <p>
        One of the projects of Annaba Tech as a community is Annaba Tech Days event. The first
        edition took place on December 15, 2018.
      </p>
      <p>
        The 2nd edition of Annaba Tech Days will take place on April 10th & April 11th, 2021. This
        time, it’ll take a hybrid format, an opening on-site first day, and a second day of
        remote/online workshops. With a mix of local and international speakers and mentors.
      </p>
      <p>
        During the first day, there’ll be an opening session, around ~05 guest (national &
        international) talks, and 06 workshops.
      </p>
      <p>The second day will be for 06 other online workshops.</p>
      <p>
        All of the sessions, talks and workshops will be recorded, and published on Annaba Tech
        Youtube channel (upon the permission of the mentor/speaker).
      </p>
      <p>Annaba Tech Days 2nd edition themes will be around the following domains:</p>
      <ul>
        <li>Software engineering</li>
        <li>Mobile & Cross platform app development</li>
        <li>Product Design </li>
        <li>System administration & devops </li>
        <li>Cybersecurity</li>
      </ul>
    </div>
  );
}
