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
import { Job, Partner, Stage, Mentor, Workshop, Talk } from '@lib/types';

const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN;

async function fetchCmsAPI(query: string, { variables }: { variables?: Record<string, any> } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  const json = await res.json();
  if (json.errors) {
    // eslint-disable-next-line no-console
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllMentors(): Promise<Mentor[]> {
  const data = await fetchCmsAPI(`
    {
      allMentors(first: 100) {
        name
        bio
        title
        company
        slug
        twitter
        github
        website
        facebook
        youtube
        linkedin
        workshop {
          title
          slug
          description
          image {
            url
          }
        }
        talk {
          title
          slug
          description
          image {
            url
          }
        }
        image {
          url(imgixParams: {fm: jpg, fit: crop, w: 300, h: 400})
        }
        imageSquare: image {
          url(imgixParams: {fm: jpg, fit: crop, w: 192, h: 192})
        }
      }
    }
  `);

  return data.allMentors;
}

export async function getAllWorkshops(): Promise<Workshop[]> {
  const data = await fetchCmsAPI(`
    {
      allWorkshops(first: 100) {
        title
        description
        slug
        mentor {
          slug
          name
          title
          image {
            url
          }
        }
        location
        start
        end
        image {
          url
        }
      }
    }
  `);

  return data.allWorkshops;
}

export async function getAllTalks(): Promise<Talk[]> {
  const data = await fetchCmsAPI(`
    {
      allTalks(first: 100) {
        title
        description
        slug
        mentor {
          slug
          name
          title
          image {
            url
          }
        }
        location
        start
        end
        image {
          url
        }
      }
    }
  `);

  return data.allTalks;
}

export async function getAllStages(): Promise<Stage[]> {
  const data = await fetchCmsAPI(`
    {
      allStages(first: 100, orderBy: order_ASC) {
        name
        slug
        stream
        discord
        schedule {
          title
          start
          end
          speaker {
            name
            slug
            image {
              url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
            }
          }
        }
      }
    }
  `);

  return data.allStages;
}

export async function getAllPartners(): Promise<Partner[]> {
  const data = await fetchCmsAPI(`
    {
      allPartners(first: 100) {
        name
        description
        slug
        website
        logo {
          url
        }
      }
    }
  `);

  return data.allPartners;
}

export async function getAllJobs(): Promise<Job[]> {
  const data = await fetchCmsAPI(`
    {
      allJobs(first: 100, orderBy: rank_ASC) {
        id
        companyName
        title
        description
        discord
        link
        rank
      }
    }
  `);

  return data.allJobs;
}
