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
import TalksGrid from '@components/talks-grid';
import Layout from '@components/layout';
import Header from '@components/header';

import { getAllTalks } from '@lib/cms-api';
import { Talk } from '@lib/types';

type Props = {
  talks: Talk[];
};

export default function Talks({ talks }: Props) {
  const meta = {
    title: 'Talks - Annaba Techdays',
    description: 'A variety of interesting talks to look up to.'
  };
  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Talks" description={meta.description} />
        <TalksGrid talks={talks} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const talks = await getAllTalks();

  return {
    props: {
      talks
    },
    revalidate: 60
  };
};
