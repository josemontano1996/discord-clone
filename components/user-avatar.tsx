import React from 'react';
import { cn } from '../lib/utils';
import { Avatar, AvatarImage } from './ui/avatar';
interface Props {
  src?: string;
  className?: string;
}
export const UserAvatar = ({ src, className }: Props) => {
  return (
    <Avatar className={cn('h-7 w-7 md:h-10 md:w-10', className)}>
      <AvatarImage src={src} />
    </Avatar>
  );
};
