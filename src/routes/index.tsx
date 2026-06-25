import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Heart,
  Award,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Calendar as CalendarIcon,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";

import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  { name: "Manicure", desc: "Κλασικό μανικιούρ με λεπτομερή περιποίηση επωνυχίων.", price: "από 15€" },
  { name: "Pedicure", desc: "Επαγγελματικό πεντικιούρ με spa φροντίδα.", price: "από 25€" },
  { name: "Gel Νύχια", desc: "Μακράς διαρκείας με αψεγάδιαστη λάμψη.", price: "από 35€" },
  { name: "Acrylic", desc: "Τεχνητά νύχια με ανθεκτική κατασκευή.", price: "από 40€" },
  { name: "Nail Art", desc: "Μοναδικά χειροποίητα σχέδια & κρύσταλλα.", price: "από 10€" },
  { name: "Ημιμόνιμο", desc: "Βαφή διάρκειας έως 3 εβδομάδες.", price: "από 20€" },
];

const testimonials = [
  {
    name: "Μαρία Παπαδοπούλου",
    initials: "ΜΠ",
    text: "Το πιο όμορφο νυχοκομείο στην Αθήνα. Επαγγελματισμός, καθαριότητα και αποτέλεσμα που κρατάει εβδομάδες!",
  },
  {
    name: "Ελένη Γεωργίου",
    initials: "ΕΓ",
    text: "Κάθε επίσκεψη είναι μια εμπειρία πολυτέλειας. Οι κοπέλες είναι καλλιτέχνιδες, με κατάλαβαν αμέσως.",
  },
  {
    name: "Σοφία Δημητρίου",
    initials: "ΣΔ",
    text: "Premium υλικά, υπέροχος χώρος και τιμές που αξίζουν την κάθε στιγμή. Η μόνη μου διεύθυνση εδώ και 2 χρόνια.",
  },
];

const galleryImages = [g1, g2, g3, g4, g5, g6];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-wide text-foreground">Luxury</span>
            <span className="font-display text-2xl italic text-gradient-gold">Nails</span>
          </a>
          <nav className="hidden items-center gap-10 text-sm tracking-[0.18em] uppercase text-muted-foreground lg:flex">
            <a href="#services" className="transition-colors hover:text-rose-gold">Υπηρεσίες</a>
            <a href="#gallery" className="transition-colors hover:text-rose-gold">Gallery</a>
            <a href="#about" className="transition-colors hover:text-rose-gold">Για Εμάς</a>
            <a href="#contact" className="transition-colors hover:text-rose-gold">Επικοινωνία</a>
          </nav>
          <a href="#booking">
            <Button className="rounded-none bg-foreground px-6 text-xs uppercase tracking-[0.25em] text-background hover:bg-rose-gold">
              Ραντεβού
            </Button>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={heroBg}
          alt="Luxury nail salon background"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/85 via-ivory/55 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
          <div className="max-w-2xl animate-[fade-in_1s_ease-out]">
            <span className="divider-gold mb-8">Athens · Est. 2020</span>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-7xl lg:text-[5.5rem]">
              Η <span className="italic text-gradient-gold">Τέχνη</span>
              <br />
              στα Νύχια σου
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Επαγγελματική φροντίδα νυχιών με αγάπη και μεράκι. Στην καρδιά της Αθήνας,
              ένας χώρος αφιερωμένος στην ομορφιά και την πολυτέλεια.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a href="#booking">
                <Button
                  size="lg"
                  className="group rounded-none bg-foreground px-10 py-7 text-xs uppercase tracking-[0.3em] text-background shadow-luxe transition-all hover:bg-rose-gold"
                >
                  <CalendarIcon className="mr-3 h-4 w-4" />
                  Online Κράτηση
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
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
            { icon: Award, title: "5 Χρόνια", sub: "Εμπειρίας & Αφοσίωσης" },
            { icon: Sparkles, title: "Premium", sub: "Υλικά Υψηλής Ποιότητας" },
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
                  0{i + 1}
                </div>
                <h3 className="font-display text-3xl text-foreground">{s.name}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-10 flex items-end justify-between border-t border-border pt-6">
                  <span className="font-display text-xl italic text-rose-gold">{s.price}</span>
                  <a
                    href="#booking"
                    className="text-xs uppercase tracking-[0.25em] text-foreground transition-colors group-hover:text-rose-gold"
                  >
                    Κράτηση →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-secondary/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-20 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="divider-gold">Gallery</span>
              <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
                Παλέτα <span className="italic text-gradient-gold">πολυτέλειας</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Αποχρώσεις, υφές και λεπτομέρειες που γεννούν την αισθητική μας ταυτότητα.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <div className="col-span-2 row-span-2 overflow-hidden">
              <img
                src={galleryImages[1]}
                alt="Pink silk texture"
                width={800}
                height={1000}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {[0, 2, 3, 4, 5].map((idx) => (
              <div key={idx} className="aspect-square overflow-hidden">
                <img
                  src={galleryImages[idx]}
                  alt={`Gallery ${idx + 1}`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-background py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Luxury Nails Studio interior"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover shadow-luxe"
            />
            <div className="absolute -bottom-8 -right-8 hidden h-40 w-40 border border-rose-gold/40 bg-blush/40 backdrop-blur lg:flex items-center justify-center text-center p-4">
              <div>
                <div className="font-display text-4xl text-rose-gold">5+</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Χρόνια Αγάπης
                </div>
              </div>
            </div>
          </div>
          <div>
            <span className="divider-gold">Για Εμάς</span>
            <h2 className="mt-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Κάθε γυναίκα αξίζει <span className="italic text-gradient-gold">να νιώθει όμορφη</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Στο Luxury Nails Studio πιστεύουμε ότι κάθε γυναίκα αξίζει να νιώθει όμορφη.
              Χρησιμοποιούμε αποκλειστικά premium υλικά και τεχνικές για να σας προσφέρουμε
              το καλύτερο αποτέλεσμα.
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
            <span className="divider-gold">Μαρτυρίες</span>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Οι πελάτισσες <span className="italic text-gradient-gold">μιλούν</span>
            </h2>
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

      {/* BOOKING */}
      <section id="booking" className="relative overflow-hidden bg-background py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blush/20 to-background" />
        <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
          <div className="mb-16 text-center">
            <span className="divider-gold">Online Κράτηση</span>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
              Κλείστε το <span className="italic text-gradient-gold">ραντεβού σας</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Κλείστε άμεσα το ραντεβού σας online μέσω του επαγγελματικού συστήματος κρατήσεών μας.
            </p>
          </div>

          <div className="bg-card p-2 shadow-luxe sm:p-4">
            <iframe
              src="https://nexusnkz9.setmore.com"
              title="Setmore Online Booking"
              className="w-full border-0"
              style={{ height: "700px" }}
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Powered by Setmore · Ασφαλής & Γρήγορη Κράτηση
          </p>
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
                { d: "Δευτέρα – Παρασκευή", h: "09:00 – 20:00" },
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
            <h2 className="mt-6 text-4xl sm:text-5xl">
              Θα σας περιμένουμε <span className="italic text-gradient-gold">με χαμόγελο</span>
            </h2>
            <div className="mt-10 space-y-6">
              <a href="tel:+302101234567" className="flex items-start gap-4 group">
                <Phone className="mt-1 h-5 w-5 text-rose-gold" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Τηλέφωνο</div>
                  <div className="mt-1 text-lg text-foreground group-hover:text-rose-gold transition-colors">
                    +30 210 123 4567
                  </div>
                </div>
              </a>
              <a href="mailto:hello@luxurynails.gr" className="flex items-start gap-4 group">
                <Mail className="mt-1 h-5 w-5 text-rose-gold" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</div>
                  <div className="mt-1 text-lg text-foreground group-hover:text-rose-gold transition-colors">
                    hello@luxurynails.gr
                  </div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-rose-gold" strokeWidth={1.5} />
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Διεύθυνση</div>
                  <div className="mt-1 text-lg text-foreground">
                    Σκουφά 42, Κολωνάκι<br />Αθήνα 106 73
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 aspect-[16/10] w-full overflow-hidden border border-border shadow-soft">
              <iframe
                title="Luxury Nails Studio location"
                src="https://www.google.com/maps?q=Skoufa+42,+Athens,+Greece&output=embed"
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
            <div className="text-center md:text-left">
              <div className="flex items-baseline justify-center gap-2 md:justify-start">
                <span className="font-display text-2xl text-foreground">Luxury</span>
                <span className="font-display text-2xl italic text-gradient-gold">Nails</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Studio · Αθήνα</p>
            </div>

            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row md:gap-8">
              <a href="tel:+302101234567" className="flex items-center gap-2 hover:text-rose-gold">
                <Phone className="h-4 w-4" strokeWidth={1.5} /> +30 210 123 4567
              </a>
              <a
                href="https://instagram.com"
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
            <span>© {new Date().getFullYear()} Luxury Nails Studio</span>
            <span>
              Designed by <span className="text-rose-gold">Nexus Media</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
