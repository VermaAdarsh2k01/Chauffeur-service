import React from 'react';
import { PortableText as SanityPortableText } from '@portabletext/react';

interface PortableTextProps {
  content: unknown;
  className?: string;
}

const PortableText: React.FC<PortableTextProps> = ({ content, className = '' }) => {
  // Handle empty or invalid content
  if (!content || !Array.isArray(content) || content.length === 0) {
    return <p className="text-gray-500">No content available</p>;
  }

  return (
    <div className={className}>
      <SanityPortableText 
        value={content} 
        components={{
          block: {
            normal: ({children}) => <p className="mb-4 leading-relaxed">{children}</p>,
            h1: ({children}) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
            h2: ({children}) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
            h3: ({children}) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
            h4: ({children}) => <h4 className="text-lg font-bold mb-2">{children}</h4>,
            blockquote: ({children}) => (
              <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-600">
                {children}
              </blockquote>
            ),
          },
          list: {
            bullet: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
            number: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
          },
          listItem: {
            bullet: ({children}) => <li className="text-gray-700">{children}</li>,
            number: ({children}) => <li className="text-gray-700">{children}</li>,
          },
          marks: {
            strong: ({children}) => <strong className="font-bold">{children}</strong>,
            em: ({children}) => <em className="italic">{children}</em>,
            link: ({children, value}) => (
              <a 
                href={value?.href || '#'} 
                className="text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          },
        }}
      />
    </div>
  );
};

export default PortableText;
