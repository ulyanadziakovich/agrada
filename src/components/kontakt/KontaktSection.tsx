interface KontaktSectionProps {
  emails: string[];
  phone: string;
}

function IconMail() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function KontaktSection({ emails, phone }: KontaktSectionProps) {
  return (
    <main className="animate-fade-in">
      <div className="flex justify-center">
        <div className="w-full max-w-3xl mx-auto px-6 sm:px-8 py-14 sm:py-20">

          {/* Ozdobna linia górna */}
          <div className="flex items-center gap-3 mb-12 sm:mb-14">
            <div className="flex-1 h-px bg-border" />
            <div className="w-[5px] h-[5px] shrink-0 bg-accent-gold rotate-45 opacity-70" />
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Kolumny obok siebie */}
          <div className="flex flex-col sm:flex-row sm:divide-x sm:divide-border gap-10 sm:gap-0">

            {/* Email */}
            <div className="sm:flex-1 sm:pr-10 lg:pr-16">
              <div className="flex items-center gap-2.5 mb-4 text-accent-gold">
                <IconMail />
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-secondary">
                  Email
                </span>
              </div>
              <div className="pl-6 border-l border-accent-gold/25 space-y-2.5">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block text-sm sm:text-base text-foreground/75 hover:text-accent-gold transition-colors duration-300"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>

            {/* Telefon */}
            <div className="sm:flex-1 sm:pl-10 lg:pl-16">
              <div className="flex items-center gap-2.5 mb-4 text-accent-gold">
                <IconPhone />
                <span className="text-[10px] tracking-[0.3em] uppercase font-medium text-secondary">
                  Telefon
                </span>
              </div>
              <div className="pl-6 border-l border-accent-gold/25">
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-sm sm:text-base tracking-wide text-foreground/75 hover:text-accent-gold transition-colors duration-300"
                >
                  {phone}
                </a>
              </div>
            </div>

          </div>

          {/* Ozdobna linia dolna */}
          <div className="flex items-center gap-3 mt-12 sm:mt-14">
            <div className="flex-1 h-px bg-border" />
            <div className="w-[5px] h-[5px] shrink-0 bg-accent-gold rotate-45 opacity-70" />
            <div className="flex-1 h-px bg-border" />
          </div>

        </div>
      </div>
    </main>
  );
}
