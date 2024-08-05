'use client';
import { useState } from 'react';
import Button from './components/button';
import TextArea from './components/text-area';
import Answer from './components/answer';

export default function Container() {
  const [text, setText] = useState('');
  const [answer, setAnswer] = useState('');

  return (
    <div className="flex flex-col gap-5 w-4/5 items-center">
      <TextArea text={text} setText={setText} />
      <Button text={text} setAnswer={setAnswer} />
      <Answer answer={answer} />
    </div>
  );
}
