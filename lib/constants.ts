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

export const SITE_URL = 'https://techdays-git-master-annabatech.vercel.app/';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'AnnabaTech';
export const BRAND_NAME = 'AnnabaTech';
export const SITE_NAME_MULTILINE = ['Annaba', 'Techdays'];
export const SITE_NAME = 'Annaba Techdays';
export const META_DESCRIPTION =
  'Annaba Tech Days, an annual event of focused workshops and meetups around everything software development, engineering, design and security.';
export const SITE_DESCRIPTION =
  'Practical Workshops Around Programming, Engineering, Devops, Design, Workflows and more..';
export const DATE = 'April 10, 2021';
export const SHORT_DATE = 'Apr 10 - 9:00am';
export const FULL_DATE = 'Apr 10th 9am (GMT+1)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT = '';
export const REPO = 'https://github.com/annaba-tech/techdays';
export const SAMPLE_TICKET_NUMBER = 12345;
export const NAVIGATION = [
  {
    name: 'Schedule',
    route: '/schedule'
  },
  {
    name: 'Talks',
    route: '/talks'
  },
  {
    name: 'Workshops',
    route: '/workshops'
  },
  {
    name: 'Mentors',
    route: '/mentors'
  },
  {
    name: 'Partners',
    route: '/partners'
  },
  {
    name: 'About',
    route: '/about'
  }
];

export type TicketGenerationState = 'default' | 'loading';
