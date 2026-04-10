'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import { useCallback, useRef } from 'react';

/* ─── Toolbar Button ─── */
function ToolbarBtn({ onClick, active, children, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`px-2.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
        active ? 'bg-white/15 text-white' : 'text-gray-400 hover:text-white hover:bg-white/8'
      }`}
    >
      {children}
    </button>
  );
}

/* ─── Main Editor ─── */
export default function RichEditor({ content, onChange, token }) {
  const fileInput = useRef(null);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      ImageExtension.configure({
        inline: false,
        allowBase64: false,
      }),
      LinkExtension.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-emerald-400 underline' },
      }),
      Placeholder.configure({
        placeholder: 'Start writing your blog post...',
      }),
    ],
    content: content || '',
    onUpdate: ({ editor: e }) => {
      onChange?.(e.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none focus:outline-none min-h-[400px] px-6 py-4',
      },
    },
  });

  /* ─── Image upload handler ─── */
  const handleImageUpload = useCallback(async (e) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const data = await res.json();

      if (res.ok && data.url) {
        editor.chain().focus().setImage({ src: data.url, alt: file.name }).run();
      } else {
        alert(data.error || 'Upload failed');
      }
    } catch {
      alert('Upload error');
    }

    // Reset input
    if (fileInput.current) fileInput.current.value = '';
  }, [editor, token]);

  /* ─── Add link ─── */
  const handleLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes('link').href;
    const url = prompt('Enter URL:', prev || 'https://');
    if (url === null) return;
    if (url === '') {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="rounded-xl border border-white/10 overflow-hidden" style={{ background: 'rgba(17,24,39,0.8)' }}>
      {/* ── Toolbar ── */}
      <div className="flex flex-wrap items-center gap-0.5 p-2 border-b border-white/8 bg-white/3">
        {/* Text formatting */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold">
          <strong>B</strong>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic">
          <em>I</em>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strikethrough">
          <s>S</s>
        </ToolbarBtn>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Headings */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Heading 1">
          H1
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Heading 2">
          H2
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Heading 3">
          H3
        </ToolbarBtn>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Lists */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet List">
          • List
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered List">
          1. List
        </ToolbarBtn>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Block elements */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Quote">
          ❝
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code Block">
          {'</>'}
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Divider">
          ─
        </ToolbarBtn>

        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Link */}
        <ToolbarBtn onClick={handleLink} active={editor.isActive('link')} title="Add Link">
          🔗
        </ToolbarBtn>

        {/* Image */}
        <ToolbarBtn onClick={() => fileInput.current?.click()} title="Upload Image">
          🖼️
        </ToolbarBtn>
        <input
          ref={fileInput}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        <div className="flex-1" />

        {/* Undo / Redo */}
        <ToolbarBtn onClick={() => editor.chain().focus().undo().run()} title="Undo">
          ↶
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().redo().run()} title="Redo">
          ↷
        </ToolbarBtn>
      </div>

      {/* ── Editor content ── */}
      <EditorContent editor={editor} />

      {/* ── Editor styles ── */}
      <style jsx global>{`
        .ProseMirror {
          min-height: 400px;
          color: #e5e7eb;
          font-size: 16px;
          line-height: 1.75;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #4b5563;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror h1 { font-size: 2em; font-weight: 800; margin: 1em 0 0.5em; color: #fff; }
        .ProseMirror h2 { font-size: 1.5em; font-weight: 700; margin: 1em 0 0.4em; color: #fff; }
        .ProseMirror h3 { font-size: 1.25em; font-weight: 600; margin: 0.8em 0 0.3em; color: #fff; }
        .ProseMirror ul, .ProseMirror ol { padding-left: 1.5em; margin: 0.5em 0; }
        .ProseMirror li { margin: 0.25em 0; }
        .ProseMirror blockquote {
          border-left: 3px solid rgba(16,185,129,0.5);
          padding-left: 1em;
          margin: 1em 0;
          color: #9ca3af;
          font-style: italic;
        }
        .ProseMirror pre {
          background: rgba(0,0,0,0.3);
          padding: 1em;
          border-radius: 0.5em;
          overflow-x: auto;
          font-family: monospace;
          font-size: 0.9em;
          margin: 1em 0;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75em;
          margin: 1em 0;
        }
        .ProseMirror hr {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.1);
          margin: 2em 0;
        }
        .ProseMirror a {
          color: #34d399;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
