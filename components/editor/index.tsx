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
    toolbarPlugin,
    ConditionalContents,
    toolbarContents$,
    ChangeCodeMirrorLanguage,
    UndoRedo,
} from '@mdxeditor/editor'
import type { ForwardedRef } from 'react';
import { basicDark } from 'cm6-theme-basic-dark'
import './dark-editor.css';
import { useTheme } from 'next-themes';
import { Separator } from '@radix-ui/react-dropdown-menu';

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
    const { resolvedTheme } = useTheme();

    const theme = resolvedTheme === 'dark' ? [basicDark] : [];

    return (
      <MDXEditor
        key={resolvedTheme}
        markdown={value}
        ref={editorRef}
        className="background-light800_dark200 light-border-2 markdown-editor dark-editor w-full border"
        onChange={fieldChange}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          markdownShortcutPlugin(),
          toolbarPlugin({
            toolbarContents: () => {
            <ConditionalContents
              options={[
                {
                  when: (editor) => editor?.editorType === 'codeblock',
                  contents: () => <ChangeCodeMirrorLanguage />
                },
                {
                  fallback: () => (
                    <>
                      <UndoRedo />
                      <Separator />
                    </>
                  )
                }
              ]}
            />
            }
          })
        ]}
        {...props}
      />
    );
  };

export default Editor