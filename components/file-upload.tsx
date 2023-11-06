'use client';
import { X } from 'lucide-react';
import Image from 'next/image';
import { UploadDropzone } from '@/lib/uploadthing';

import '@uploadthing/react/styles.css';
import { split } from 'postcss/lib/list';

interface Props {
  onChange: (url?: string) => void;
  value: string;
  endpoint: 'messageFile' | 'serverImage';
}

export const FileUpload = ({ onChange, value, endpoint }: Props) => {
  const fileType = value?.split('.').pop();
  if (value && fileType !== 'pdf') {
    return (
      <div className='relative h-20 w-20'>
        <Image fill src={value} alt='Upload' className='rounded-full' />
        <button
          onClick={() => onChange('')}
          className='bg-rose-500 p-1 text-white rounded-full absolute top-0 right-0 shadow-sm'
        >
          <X className='h-4 w-4' />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
