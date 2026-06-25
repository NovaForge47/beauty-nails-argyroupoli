import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Heart,
  Award,
  Star,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
} from "lucide-react";
import { Toaster } from "sonner";

import heroBg from "@/assets/hero-bg.jpg";

import logoAsset from "@/assets/beauty-nails-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { name: "Μανικιούρ", desc: "Περιποίηση και σχηματισμός νυχιών με έμφαση στην υγιεινή, την αισθητική και τη λεπτομέρεια. Επιλέξτε ανάμεσα σε κλασικό ή ημιμόνιμο μανικιούρ για άψογο αποτέλεσμα που διαρκεί." },
  { name: "Ημιμόνιμο Μανικιούρ", desc: "Ιδανική επιλογή για λαμπερά και περιποιημένα νύχια με μεγάλη διάρκεια. Εφαρμόζεται με επαγγελματικά προϊόντα υψηλής ποιότητας για άριστο αποτέλεσμα χωρίς φθορές." },
  { name: "Gel Νυχιών", desc: "Ενίσχυση και επιμήκυνση νυχιών με gel για φυσική εμφάνιση και υψηλή αντοχή. Διατίθεται σε μεγάλη ποικιλία σχεδίων, χρωμάτων και τεχνικών." },
  { name: "Acrygel", desc: "Συνδυάζει τα πλεονεκτήματα του ακρυλικού και του gel, προσφέροντας εξαιρετική αντοχή, άνεση και φυσικό αποτέλεσμα. Ιδανικό για όσες επιθυμούν δυνατά και καλοσχηματισμένα νύχια." },
  { name: "Συντήρηση Gel & Acrygel", desc: "Ανανέωση και συντήρηση της υπάρχουσας εφαρμογής ώστε τα νύχια να παραμένουν όμορφα, υγιή και καλοσχηματισμένα για μεγαλύτερο χρονικό διάστημα." },
  { name: "Nail Art", desc: "Μοναδικά σχέδια και δημιουργικές λεπτομέρειες που αναδεικνύουν το προσωπικό σας στυλ. Από minimal γραμμές έως πιο εντυπωσιακές καλλιτεχνικές δημιουργίες." },
  { name: "Pedicure", desc: "Ολοκληρωμένη περιποίηση ποδιών για υγιή και όμορφα άκρα. Περιλαμβάνει καθαρισμό, διαμόρφωση νυχιών και ενυδάτωση για αίσθηση φρεσκάδας και ευεξίας." },
  { name: "Ημιμόνιμο Pedicure", desc: "Μακράς διάρκειας χρώμα και άψογη εμφάνιση για τα νύχια των ποδιών. Ιδανική επιλογή για καθημερινότητα, διακοπές και ειδικές περιστάσεις." },
  { name: "Lash Lift", desc: "Ανόρθωση και καμπύλωση φυσικών βλεφαρίδων που χαρίζει πιο έντονο και ξεκούραστο βλέμμα χωρίς τη χρήση extensions." },
  { name: "Brow Lamination", desc: "Τεχνική διαμόρφωσης φρυδιών που προσφέρει συμμετρία, όγκο και φυσικό αποτέλεσμα, αναδεικνύοντας τα χαρακτηριστικά του προσώπου." },
  { name: "Αποτρίχωση Προσώπου", desc: "Γρήγορη και αποτελεσματική απομάκρυνση ανεπιθύμητης τριχοφυΐας με επαγγελματικές μεθόδους που σέβονται την επιδερμίδα." },
  { name: "Σχηματισμός & Βαφή Φρυδιών", desc: "Εξατομικευμένη διαμόρφωση φρυδιών σύμφωνα με τα χαρακτηριστικά του προσώπου για αρμονικό και καλοσχηματισμένο αποτέλεσμα." },
];

const testimonials = [
  {
    name: "Anastasia Roumpou",
    initials: "AR",
    text: "The best salon in Athens, keep it up! So proud of you keep going, the energy in there is so hyped and the nail tech is really sweet. My experience there was the best, thank you! I suggest. 🩷",
  },
  {
    name: "Michaella",
    initials: "M",
    text: "Excellent service and good price for detailed design, I recommend.",
  },
  {
    name: "Sophia",
    initials: "S",
    text: "Fantastic job! The nails came out exactly as I wanted. Nina was very kind and helpful. The place is very clean and beautiful and the prices are very good.",
  },
];



function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Beauty Nails Αργυρούπολη logo"
      className={`${className} rounded-full object-cover`}
    />
  );
}

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <a href="#top" className="flex items-center gap-4">
            <Logo className="h-16 w-16" />
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl tracking-wide text-foreground">Beauty</span>
              <span className="font-display text-2xl italic text-gradient-gold">Nails</span>
            </div>
          </a>
          <nav className="hidden items-center gap-10 text-sm tracking-[0.18em] uppercase text-muted-foreground lg:flex">
            <a href="#services" className="transition-colors hover:text-rose-gold">Υπηρεσίες</a>
            
            <a href="#about" className="transition-colors hover:text-rose-gold">Για Εμάς</a>
            <a href="#contact" className="transition-colors hover:text-rose-gold">Επικοινωνία</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroBg}
          alt="Beauty Nails salon background"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/85 via-ivory/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
          <div className="max-w-2xl animate-[fade-in_1s_ease-out]">
            <span className="divider-gold mb-8">Αργυρούπολη · Beauty Nail Salon</span>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-7xl lg:text-[5.5rem]">
              Η <span className="italic text-gradient-gold">Τέχνη</span>
              <br />
              στα Νύχια σου
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Επαγγελματική φροντίδα νυχιών και αισθητικής με αγάπη και μεράκι.
              Στην καρδιά της Αργυρούπολης, ένας χώρος αφιερωμένος στην ομορφιά και την περιποίηση.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#services" className="text-xs uppercase tracking-[0.3em] text-foreground story-link">
                Δείτε τις υπηρεσίες
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="border-y border-border/60 bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-border md:grid-cols-3 md:divide-x">
          {[
            { icon: Heart, title: "500+", sub: "Ευχαριστημένες Πελάτισσες" },
            { icon: Award, title: "Premium", sub: "Υλικά Υψηλής Ποιότητας" },
            { icon: Sparkles, title: "Αισθητική", sub: "Νύχια, Βλεφαρίδες & Φρύδια" },
          ].map((b) => (
            <div key={b.sub} className="flex items-center gap-5 px-8 py-10 lg:px-12">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-rose-gold/40 text-rose-gold">
                <b.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-display text-2xl text-foreground">{b.title}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 text-center">
            <span className="divider-gold">Οι Υπηρεσίες μας</span>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Εξειδικευμένη φροντίδα <span className="italic text-gradient-gold">για εσάς</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.name}
                className="group relative bg-card p-10 transition-all duration-500 hover:bg-blush/40"
              >
                <div className="mb-8 text-xs uppercase tracking-[0.3em] text-rose-gold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-3xl text-foreground">{s.name}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="bg-background py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">

          <div>
            <span className="divider-gold">Ποιοι Είμαστε</span>
            <h2 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Ποιοι <span className="italic text-gradient-gold">είμαστε</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Στο Beauty Nail Salon Αργυρούπολη πιστεύουμε ότι η περιποίηση είναι μια μικρή
              πολυτέλεια που αξίζει κάθε γυναίκα. Με επαγγελματισμό, υψηλά πρότυπα υγιεινής και
              αγάπη για την ομορφιά, προσφέρουμε υπηρεσίες νυχιών και αισθητικής που αναδεικνύουν
              το προσωπικό σας στυλ. Στόχος μας είναι κάθε επίσκεψη να αποτελεί μια ευχάριστη
              εμπειρία χαλάρωσης και φροντίδας, σε έναν σύγχρονο και φιλόξενο χώρο.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 border-t border-border pt-10">
              <div>
                <div className="font-display text-4xl text-rose-gold">100%</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Hypoallergenic Υλικά
                </div>
              </div>
              <div>
                <div className="font-display text-4xl text-rose-gold">∞</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Σχέδια & Επιλογές
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 text-center">
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Οι πελάτισσες <span className="italic text-gradient-gold">μιλούν</span>
            </h2>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl text-rose-gold">4.7</span>
                <div className="flex gap-1 text-rose-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" strokeWidth={0} />
                  ))}
                </div>
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                από 217 αξιολογήσεις
              </div>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex h-full flex-col bg-card p-10 shadow-soft transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="flex gap-1 text-rose-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-6 grow font-display text-xl leading-relaxed italic text-foreground">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-gold to-rose-gold-light text-sm font-medium text-primary-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{t.name}</div>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Verified Client
                    </div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS + CONTACT */}
      <section id="contact" className="bg-background py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div>
            <span className="divider-gold">Ωράριο</span>
            <h2 className="mt-6 text-4xl sm:text-5xl">
              Πάντα <span className="italic text-gradient-gold">δίπλα σας</span>
            </h2>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {[
                { d: "Δευτέρα", h: "09:00 – 20:00" },
                { d: "Τρίτη", h: "09:00 – 21:00" },
                { d: "Τετάρτη", h: "09:00 – 21:00" },
                { d: "Πέμπτη", h: "09:00 – 21:00" },
                { d: "Παρασκευή", h: "09:00 – 21:00" },
                { d: "Σάββατο", h: "09:00 – 18:00" },
                { d: "Κυριακή", h: "Κλειστά" },
              ].map((row) => (
                <li key={row.d} className="flex items-center justify-between py-5">
                  <span className="flex items-center gap-3 text-foreground">
                    <Clock className="h-4 w-4 text-rose-gold" strokeWidth={1.5} />
                    {row.d}
                  </span>
                  <span className="font-display text-lg italic text-rose-gold">{row.h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="divider-gold">Επικοινωνία</span>
            <div className="mt-10 space-y-6">
              <a href="tel:+302110123079" className="flex items-start gap-4 group">
                <Phone className="mt-1 h-5 w-5 text-rose-gold" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Τηλέφωνο</div>
                  <div className="mt-1 text-lg text-foreground group-hover:text-rose-gold transition-colors">
                    21 1012 3079
                  </div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/beauty__nail__salon__/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <Instagram className="mt-1 h-5 w-5 text-rose-gold" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Instagram</div>
                  <div className="mt-1 text-lg text-foreground group-hover:text-rose-gold transition-colors">
                    @beauty__nail__salon__
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-rose-gold" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Διεύθυνση</div>
                  <div className="mt-1 text-lg text-foreground">
                    Beauty Nail Salon<br />Λεωφ. Κύπρου 58, Αργυρούπολη 164 51
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 aspect-[16/10] w-full overflow-hidden border border-border shadow-soft">
              <iframe
                title="Beauty Nails Αργυρούπολη location"
                src="https://www.google.com/maps?q=Beauty+Nail+Salon,+Leof.+Kiprou+58,+Argiroupoli+164+51&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
            <div className="flex items-center gap-4 text-center md:text-left">
              <Logo className="h-14 w-14" />
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-2xl text-foreground">Beauty</span>
                  <span className="font-display text-2xl italic text-gradient-gold">Nails</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Αργυρούπολη</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:gap-8">
              <a href="tel:+302110123079" className="flex items-center gap-2 hover:text-rose-gold">
                <Phone className="h-4 w-4" strokeWidth={1.5} /> 21 1012 3079
              </a>
              <a
                href="https://www.instagram.com/beauty__nail__salon__/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 hover:text-rose-gold"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 hover:text-rose-gold"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} /> Facebook
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row">
            <span>© {new Date().getFullYear()} Beauty Nails Αργυρούπολη</span>
            <span>
              Designed by <span className="text-rose-gold">Nexus Media</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
