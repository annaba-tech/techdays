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

import { GetStaticProps } from 'next';

import Page from '@components/page';
import Schedule from '@components/schedule';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllWorkshops, getAllTalks } from '@lib/cms-api';
import { Stage } from '@lib/types';

type Props = {
  allStages: Stage[];
};

export default function SchedulePage({ allStages }: Props) {
  const meta = {
    title: 'Schedule - Annaba Techdays',
    description:
      'Event starts at 08:30am. Day 01 will feature a mix of talks and workshops. Day 02 schedule will be announced during Day 01.'
  };

  const sampleTalk = allStages[0].schedule[0];

  const opening = {
    name: 'Opening',
    schedule: [
      {
        ...sampleTalk,
        slug: '',
        title: 'Welcoming participants',
        start: '2021-04-10T08:30:00+01:00',
        end: '2021-04-10T09:00:00+01:00'
      },
      {
        ...sampleTalk,
        slug: '',
        title: 'National anthem',
        start: '2021-04-10T09:05:00+01:00',
        end: '2021-04-10T09:10:00+01:00'
      },
      {
        ...sampleTalk,
        slug: '',
        title: 'Welcome word',
        start: '2021-04-10T09:10:00+01:00',
        end: '2021-04-10T09:15:00+01:00'
      },
      {
        ...sampleTalk,
        slug: '',
        title: 'Official opening announcement ',
        start: '2021-04-10T09:15:00+01:00',
        end: '2021-04-10T09:30:00+01:00'
      },
      {
        ...sampleTalk,
        slug: '',
        title: 'Mohamed Salah TOURAB: Annaba as a tech hub ',
        start: '2021-04-10T09:30:00+01:00',
        end: '2021-04-10T10:00:30+01:00'
      }
    ]
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Schedule" description={meta.description} />
        <Schedule allStages={[opening, ...allStages]} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allWorkshops = await getAllWorkshops();
  const allTalks = await getAllTalks();

  const allStages = [
    {
      name: 'Talks',
      schedule: allTalks.filter(s => s.start && s.end).sort((a, b) => (a.start < b.start ? -1 : 1))
    },
    {
      name: 'Workshops',
      schedule: allWorkshops
        .filter(s => s.start && s.end)
        .sort((a, b) => (a.start < b.start ? -1 : 1))
    }
  ];
  return {
    props: {
      allStages
    },
    revalidate: 60
  };
};
