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

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Schedule" description={meta.description} />
        <Schedule allStages={allStages} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allWorkshops = await getAllWorkshops();
  const allTalks = await getAllTalks();

  const allStages = [
    { name: 'Talks', schedule: allTalks.filter(s => s.start && s.end) },
    { name: 'Workshops', schedule: allWorkshops.filter(s => s.start && s.end) }
  ];
  return {
    props: {
      allStages
    },
    revalidate: 60
  };
};
