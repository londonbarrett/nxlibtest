import { FC, memo } from 'react';

export type ScheisseProps = {
  subject: string;
};

export const Scheisse: FC<ScheisseProps> = memo(({ subject }) => (
  <div>Scheisse {subject}!</div>
));
