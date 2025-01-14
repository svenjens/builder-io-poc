'use client'

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { FC } from 'react';

interface RenderBuilderContentProps {
  content: any;
  model: string;
}

export const RenderBuilderContent: FC<RenderBuilderContentProps> = ({ content, model }) => {
  const isPreviewing = useIsPreviewing();

  if (!content && !isPreviewing) {
    console.log("No content found in RenderBuilderContent");
    return (
      <div>
        <h1>Welcome to our Publishing Portal</h1>
        <p>This is a default page. Please create content in Builder.io for this page.</p>
      </div>
    );
  }

  return (
    <BuilderComponent
      model={model}
      content={content}
    />
  );
}

