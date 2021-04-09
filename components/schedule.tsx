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
import cn from 'classnames';
import { Stage, Talk } from '@lib/types';
import TalkCard from './talk-card';
import styles from './schedule.module.css';

function StageRow({ stage }: { stage: Stage }) {
  // Group talks by the time block
  const timeBlocks = stage.schedule.reduce((allBlocks: any, talk) => {
    allBlocks[talk.start] = [...(allBlocks[talk.start] || []), talk];
    return allBlocks;
  }, {});

  return (
    <div key={stage.name} className={styles.row}>
      <h3 className={cn(styles['stage-name'])}>
        <span>{stage.name}</span>
      </h3>
      <div className={cn(styles.talks)}>
        {Object.keys(timeBlocks).map((startTime: string) => (
          <div key={startTime}>
            {timeBlocks[startTime]
              .sort((a: Talk, b: Talk) => (a.location > b.location ? 1 : -1))
              .map((talk: Talk, index: number) => (
                <TalkCard key={talk.title} talk={talk} showTime={index === 0} stage={stage.name} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  allStages: Stage[];
};

export default function Schedule({ allStages }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles['row-wrapper']}>
        {allStages.map(stage => (
          <StageRow key={stage.name} stage={stage} />
        ))}
      </div>
    </div>
  );
}
