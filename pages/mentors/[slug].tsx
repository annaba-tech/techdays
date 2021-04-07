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
import MentorSection from '@components/mentor-section';
import Layout from '@components/layout';

import { getAllMentors } from '@lib/cms-api';
import { Mentor } from '@lib/types';
import { META_DESCRIPTION } from '@lib/constants';

type Props = {
  mentor: Mentor;
};

export default function MentorPage({ mentor }: Props) {
  const meta = {
    title: `${mentor.name} - Annaba Techdays`,
    description: META_DESCRIPTION
  };

  return (
    <Page meta={meta}>
      <Layout>
        <MentorSection mentor={mentor} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug;
  const mentors = await getAllMentors();
  const currentMentor = mentors.find((s: Mentor) => s.slug === slug) || null;

  if (!currentMentor) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      mentor: currentMentor
    },
    revalidate: 60
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const mentors = await getAllMentors();
  const slugs = mentors.map((s: Mentor) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false
  };
};
