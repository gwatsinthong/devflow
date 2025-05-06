'use client'
// InitializedMDXEditor.tsx
import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    type MDXEditorMethods,
} from '@mdxeditor/editor'
import type { ForwardedRef } from 'react';
import './dark-editor.css';

interface Props {
        value: string; 
        fieldChange: (value: string) => void; 
        editorRef: ForwardedRef<MDXEditorMethods> | null; 
}

const Editor = ({
    value,
    editorRef,
    fieldChange,
    ...props
  }: Props) => {
    return (
      <MDXEditor
        markdown={value}
        className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border"
        onChange={fieldChange}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin()
        ]}
        {...props}
        ref={editorRef}
      />
    );
  };

export default Editor