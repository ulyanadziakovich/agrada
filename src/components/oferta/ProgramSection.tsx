interface FormatPart {
  duration: string;
  description: string;
}

interface ArtTherapy {
  title: string;
  description: string;
  website: string;
}

interface Contact {
  label: string;
  emails: string[];
  phone: string;
}

interface ProgramSectionProps {
  tagline: string;
  intro: string;
  format: FormatPart[];
  formatNote: string;
  audiences: string[];
  programItems: string[];
  artTherapy: ArtTherapy;
  contact: Contact;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] tracking-[0.3em] uppercase text-accent-gold font-medium mb-3">
      {children}
    </p>
  );
}

export default function ProgramSection({
  tagline,
  intro,
  format,
  formatNote,
  audiences,
  programItems,
  artTherapy,
  contact,
}: ProgramSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-8 sm:py-10 space-y-8">

        {/* Tagline + intro */}
        <div>
          <p className="text-xs tracking-[0.2em] uppercase text-accent-gold mb-3">
            {tagline}
          </p>
          <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
            {intro}
          </p>
        </div>

        <div className="h-px bg-border" />

        {/* Format */}
        <div>
          <SectionLabel>Format warsztatu</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {format.map((part) => (
              <div key={part.duration} className="border border-border p-4">
                <p className="text-xl font-bold text-accent-gold mb-1">{part.duration}</p>
                <p className="text-xs text-foreground/70 leading-relaxed">{part.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground/55 leading-relaxed italic">{formatNote}</p>
        </div>

        <div className="h-px bg-border" />

        {/* Grupy docelowe + program — dwie kolumny */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <SectionLabel>Adresaci</SectionLabel>
            <ul className="space-y-1.5">
              {audiences.map((a) => (
                <li key={a} className="flex gap-2 text-xs sm:text-sm text-foreground/75 leading-snug">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent-gold/60" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>Program warsztatów</SectionLabel>
            <ul className="space-y-1.5">
              {programItems.map((item) => (
                <li key={item} className="flex gap-2 text-xs text-foreground/70 leading-snug">
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-border" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-border" />

        {/* Art terapia */}
        <div className="border-l-2 border-accent-gold/40 pl-4">
          <SectionLabel>{artTherapy.title}</SectionLabel>
          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed mb-1.5">
            {artTherapy.description}
          </p>
          <a
            href={`https://${artTherapy.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-secondary hover:text-accent-gold transition-colors duration-300 tracking-wide"
          >
            {artTherapy.website}
          </a>
        </div>

        <div className="h-px bg-border" />

        {/* Kontakt */}
        <div>
          <SectionLabel>{contact.label}</SectionLabel>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {contact.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="text-xs sm:text-sm text-foreground/75 hover:text-accent-gold transition-colors duration-300"
              >
                {email}
              </a>
            ))}
            <span className="text-xs sm:text-sm text-foreground/75">{contact.phone}</span>
          </div>
        </div>

      </div>
    </main>
  );
}
