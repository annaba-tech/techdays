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
import WorkshopsGrid from '@components/workshops-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllWorkshops } from '@lib/cms-api';
import { Talk } from '@lib/types';

type Props = {
  workshops: Talk[];
};

export default function Workshops({ workshops }: Props) {
  const meta = {
    title: 'Workshops - Annaba Techdays',
    description: "Various workshops to meet everyone's interests."
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Workshops" description={meta.description} />
        <WorkshopsGrid workshops={workshops} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const workshops = await getAllWorkshops();

  return {
    props: {
      workshops
    },
    revalidate: 60
  };
};
