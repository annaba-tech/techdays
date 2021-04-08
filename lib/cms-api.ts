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

import * as datoCmsApi from './cms-providers/dato';

let cmsApi: {
  getAllMentors: () => Promise<Mentor[]>;
  getAllWorkshops: () => Promise<Workshop[]>;
  getAllTalks: () => Promise<Talk[]>;
  getAllStages: () => Promise<Stage[]>;
  getAllPartners: () => Promise<Partner[]>;
  getAllJobs: () => Promise<Job[]>;
};

if (process.env.DATOCMS_READ_ONLY_API_TOKEN) {
  cmsApi = datoCmsApi;
}

export async function getAllMentors(): Promise<Mentor[]> {
  return cmsApi.getAllMentors();
}

export async function getAllWorkshops(): Promise<Workshop[]> {
  return cmsApi.getAllWorkshops();
}

export async function getAllTalks(): Promise<Talk[]> {
  return cmsApi.getAllTalks();
}

export async function getAllStages(): Promise<Stage[]> {
  return cmsApi.getAllStages();
}

export async function getAllPartners(): Promise<Partner[]> {
  return cmsApi.getAllPartners();
}

export async function getAllJobs(): Promise<Job[]> {
  return cmsApi.getAllJobs();
}
