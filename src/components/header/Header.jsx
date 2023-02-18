import React from 'react'
import { questions } from './../../db/db';

export const Header = () => {
  return (
    <div>
      {questions.length}
    </div>
  )
}
