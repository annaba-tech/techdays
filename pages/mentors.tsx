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
import MentorsGrid from '@components/mentors-grid';
import Layout from '@components/layout';
import Header from '@components/header';
import { META_DESCRIPTION } from '@lib/constants';
import { getAllMentors } from '@lib/cms-api';
import { Mentor } from '@lib/types';

type Props = {
  mentors: Mentor[];
};

export default function Mentors({ mentors }: Props) {
  const meta = {
    title: 'Mentors - Annaba Techdays',
    description: META_DESCRIPTION
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Mentors" description="Learn more about our event mentors." />
        <MentorsGrid mentors={mentors} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const mentors = await getAllMentors();

  return {
    props: {
      mentors
    },
    revalidate: 60
  };
};
