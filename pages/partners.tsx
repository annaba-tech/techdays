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
import PartnersGrid from '@components/partners-grid';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllPartners } from '@lib/cms-api';
import { Partner } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  partners: Partner[];
};

export default function PartnersPage({ partners }: Props) {
  const meta = {
    title: 'Partners - Annaba Techdays',
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Partners" description={meta.description} />
        <PartnersGrid partners={partners} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const partners = await getAllPartners();

  return {
    props: {
      partners
    },
    revalidate: 60
  };
};
