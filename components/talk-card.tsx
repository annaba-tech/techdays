import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { Talk } from '@lib/types';
import styles from './talk-card.module.css';

type Props = {
  key: string;
  talk: Talk;
  stage: string;
  showTime: boolean;
};

const formatDate = (date: string) => {
  console.log(date);
  // https://github.com/date-fns/date-fns/issues/946
  return format(parseISO(date), "h:mmaaaaa'm'");
};

export default function TalkCard({
  talk: { slug, title, mentor, start, end, location },
  stage,
  showTime
}: Props) {
  const [startAndEndTime, setStartAndEndTime] = useState('');

  useEffect(() => {
    setStartAndEndTime(`${formatDate(start)} – ${formatDate(end)}`);
  }, []);

  return (
    <div key={title} className={styles.talk}>
      {showTime && <p className={styles.time}>{startAndEndTime || <>&nbsp;</>}</p>}
      {slug ? (
        <Link href={`${stage.toLowerCase()}/${slug}`}>
          <a className={styles.card}>
            <div className={styles['card-body']}>
              <h4 title={title} className={styles.title}>
                {title}
              </h4>
              <div className={styles.speaker}>
                <div className={styles['avatar-group']}>
                  {mentor.map(m => (
                    <div key={m.name} className={styles['avatar-wrapper']}>
                      <Image
                        loading="lazy"
                        alt={m.name}
                        className={styles.avatar}
                        src={m.image.url}
                        title={m.name}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}
                </div>
                <h5 className={styles.name}>
                  {mentor.length === 1 ? mentor[0].name : `${mentor.length} mentors`}
                </h5>
              </div>
              {location && <p className={styles.location}>{location}</p>}
            </div>
          </a>
        </Link>
      ) : (
        <div className={styles.card}>
          <div className={styles['card-body']}>
            <h4 title={title} className={styles.title}>
              {title}
            </h4>
          </div>
        </div>
      )}
    </div>
  );
}
