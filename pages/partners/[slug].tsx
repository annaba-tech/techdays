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

import { GetStaticProps, GetStaticPaths } from 'next';

import Page from '@components/page';
import PartnerSection from '@components/partner-section';
import Layout from '@components/layout';

import { getAllPartners } from '@lib/cms-api';
import { Partner } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  partner: Partner;
};

export default function PartnerPage({ partner }: Props) {
  const meta = {
    title: `${partner.name} - Annaba Techdays`,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <PartnerSection partner={partner} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const partners = await getAllPartners();
  const partner = partners.find((s: Partner) => s.slug === slug) || null;

  if (!partner) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      partner
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const partners = await getAllPartners();
  const slugs = partners.map((s: Partner) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: 'blocking'
  };
};
