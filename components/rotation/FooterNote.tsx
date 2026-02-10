interface FooterNoteProps {
  text?: string;
}

export function FooterNote({ text }: FooterNoteProps) {
  if (!text) return null;

  return (
    <div className="text-center text-white/50 text-sm">
      {text}
    </div>
  );
}
