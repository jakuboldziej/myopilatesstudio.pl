import * as React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'lb-schedule-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        category?: string;
        'class-service'?: string;
        member?: string;
        location?: string;
      };
    }
  }
}