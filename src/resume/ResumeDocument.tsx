import { Document, Page, Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import { profile } from "../data/profile";
import { experience } from "../data/experience";
import { skillGroups } from "../data/skills";
import { projects } from "../data/projects";
import { education, certifications } from "../data/resume";

// A single-column, reverse-chronological, text-selectable résumé.
// Built with standard fonts and no tables/columns/icons so it stays
// ATS-friendly, and entirely from the site's own data so it stays in sync.

const ACCENT = "#5b3df5";
const INK = "#1a1a22";
const SUBTLE = "#55555f";
const RULE = "#d9d9e0";

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 44,
    paddingHorizontal: 46,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    lineHeight: 1.4,
    color: INK,
  },
  name: { fontSize: 22, fontFamily: "Helvetica-Bold", letterSpacing: 0.3, lineHeight: 1.15 },
  title: { fontSize: 11, color: ACCENT, fontFamily: "Helvetica-Bold", lineHeight: 1.2, marginTop: 4 },
  contactRow: { marginTop: 7, fontSize: 9, color: SUBTLE },
  link: { color: SUBTLE, textDecoration: "none" },

  section: { marginTop: 16 },
  sectionTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: ACCENT,
    textTransform: "uppercase",
    letterSpacing: 1,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: RULE,
    marginBottom: 8,
  },

  summary: { fontSize: 9.5, color: INK },

  entry: { marginBottom: 9 },
  entryHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" },
  entryTitle: { fontSize: 10, fontFamily: "Helvetica-Bold" },
  entryMeta: { fontSize: 9, color: SUBTLE },
  entryPeriod: { fontSize: 9, color: SUBTLE, fontFamily: "Helvetica-Bold" },

  bulletRow: { flexDirection: "row", marginTop: 2.5, paddingRight: 6 },
  bulletDot: { width: 9, fontSize: 9.5, color: ACCENT },
  bulletText: { flex: 1, fontSize: 9.5 },

  skillRow: { flexDirection: "row", marginBottom: 3 },
  skillLabel: { width: 96, fontSize: 9.5, fontFamily: "Helvetica-Bold" },
  skillItems: { flex: 1, fontSize: 9.5, color: INK },

  projTagline: { color: SUBTLE, fontFamily: "Helvetica" },
});

function contactSegments() {
  const segs: { text: string; href?: string }[] = [
    { text: profile.email, href: `mailto:${profile.email}` },
    { text: profile.location },
    { text: "github.com/bhuttoirfan", href: profile.socials.github },
    { text: "LinkedIn", href: profile.socials.linkedin },
  ];
  return segs;
}

export default function ResumeDocument() {
  const featured = projects.filter((p) => p.featured);
  const earlier = projects.filter((p) => !p.featured);

  return (
    <Document
      title={`${profile.name} — Résumé`}
      author={profile.name}
      subject={profile.title}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.title}>{profile.title}</Text>
          <Text style={styles.contactRow}>
            {contactSegments().map((s, i) => (
              <Text key={i}>
                {i > 0 ? "   |   " : ""}
                {s.href ? (
                  <Link src={s.href} style={styles.link}>
                    {s.text}
                  </Link>
                ) : (
                  s.text
                )}
              </Text>
            ))}
          </Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{profile.summary}</Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experience.map((job) => (
            <View key={job.company + job.period} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {job.role}, {job.company}
                </Text>
                <Text style={styles.entryPeriod}>{job.period}</Text>
              </View>
              <Text style={styles.entryMeta}>{job.location}</Text>
              {job.points.map((pt, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={styles.bulletText}>{pt}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Projects */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selected Projects</Text>
          {featured.map((p) => (
            <View key={p.slug} style={styles.bulletRow} wrap={false}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>{p.name}</Text>
                <Text style={styles.projTagline}> — {p.tagline}. </Text>
                {p.highlights[0]}
                {p.liveUrl ? (
                  <Text style={styles.projTagline}> ({p.liveUrl.replace(/^https?:\/\//, "")})</Text>
                ) : null}
              </Text>
            </View>
          ))}
          {earlier.length > 0 && (
            <View style={[styles.bulletRow, { marginTop: 4 }]} wrap={false}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>
                <Text style={{ fontFamily: "Helvetica-Bold" }}>Earlier work: </Text>
                {earlier.map((p) => `${p.name} (${p.tagline})`).join("; ")}.
              </Text>
            </View>
          )}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {skillGroups.map((g) => (
            <View key={g.label} style={styles.skillRow} wrap={false}>
              <Text style={styles.skillLabel}>{g.label}</Text>
              <Text style={styles.skillItems}>{g.items.join(", ")}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((e) => (
            <View key={e.degree} style={styles.entry} wrap={false}>
              <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>
                  {e.degree}, {e.institution}
                </Text>
                <Text style={styles.entryPeriod}>{e.period}</Text>
              </View>
              {e.details ? <Text style={styles.entryMeta}>{e.details}</Text> : null}
            </View>
          ))}
        </View>

        {/* Certifications */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certifications</Text>
          {certifications.map((c, i) => (
            <View key={i} style={styles.bulletRow} wrap={false}>
              <Text style={styles.bulletDot}>•</Text>
              <Text style={styles.bulletText}>{c}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
