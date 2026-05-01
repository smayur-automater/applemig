"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultModal from "@/components/ConsultModal";

const visas = [
  {
    code: "500",
    name: "Student Visa (Subclass 500)",
    tag: "Education",
    tagColor: "bg-blue-100 text-blue-800",
    desc: "Student visa allows students from different nations to stay and study in Australia for the duration of their respective study. Can be applied for full time courses which includes Vocational Study, Higher Education.",
    requirements: [
      "Confirmation of Enrolment (CoE) from a CRICOS registered provider",
      "Genuine Temporary Entrant (GTE) statement",
      "English proficiency (IELTS / PTE / TOEFL)",
      "Overseas Student Health Cover (OSHC)",
      "Financial capacity to support yourself",
    ],
  },
  {
    code: "485",
    name: "Temporary Work Visa (Subclass 485)",
    tag: "Graduate",
    tagColor: "bg-purple-100 text-purple-800",
    desc: "Temporary Work visa is for those international students who recently graduated from Australian Education providers. Family members can also be part of the application. Duration varies from 18 months to 4 years depending on the individual.",
    requirements: [
      "Completed at least 2 years of Australian study",
      "Lodge within 6 months of course completion",
      "Under 50 years of age",
      "English proficiency",
      "Australian study requirement met",
    ],
  },
  {
    code: "820/801",
    name: "Partner Visas (Subclass 820/801, 309/100)",
    tag: "Family",
    tagColor: "bg-pink-100 text-pink-800",
    desc: "Partner Visa 820/801 is for onshore applicants. Partner 820 is a temporary visa that allows a de facto partner or spouse of an Australian citizen or permanent resident to live in Australia. The 309/100 is for offshore applicants.",
    requirements: [
      "Genuine de-facto or married relationship",
      "Australian citizen, PR or eligible NZ citizen sponsor",
      "Evidence of shared life (finances, household, social)",
      "Health and character checks",
      "Statutory declarations from friends/family",
    ],
  },
  {
    code: "103/143",
    name: "Parent Visa (Onshore / Offshore)",
    tag: "Family",
    tagColor: "bg-pink-100 text-pink-800",
    desc: "This visa enables parents to join their children in Australia, where one or more children are currently residing as Australian Citizens or Permanent Residents.",
    requirements: [
      "Child who is an Australian citizen or PR",
      "Balance of family test",
      "Assurance of Support (AoS) bond",
      "Health and character requirements",
      "Sufficient funds or sponsor's support",
    ],
  },
  {
    code: "590",
    name: "Student Guardian Visa (Subclass 590)",
    tag: "Education",
    tagColor: "bg-blue-100 text-blue-800",
    desc: "Student Guardian visas are for relatives of international students who are 18 years or younger. The guardian intends to come to Australia for the sole purpose of accompanying the student.",
    requirements: [
      "Student must be under 18 years of age",
      "Genuine guardian relationship",
      "Student must hold or be applying for subclass 500",
      "Financial capacity",
      "Health and character checks",
    ],
  },
  {
    code: "Student/TR",
    name: "Dependent Visas (Student / TR-485)",
    tag: "Family",
    tagColor: "bg-pink-100 text-pink-800",
    desc: "Student/TR Dependent (Subsequent Entrant) visas are for family members accompanying the main applicant, who can be a spouse/de-facto or a child for student dependent.",
    requirements: [
      "Main applicant holds a student or 485 visa",
      "Genuine relationship (spouse/de-facto or child)",
      "Health and character checks",
      "OSHC coverage for health",
      "Financial support from main applicant",
    ],
  },
  {
    code: "189",
    name: "Skilled Independent Visa (Subclass 189)",
    tag: "Skilled",
    tagColor: "bg-emerald-100 text-emerald-800",
    desc: "Skilled independent visa is based on a point system. It allows an eligible individual to migrate and live in Australia permanently, without any requirement for family or state sponsorship.",
    requirements: [
      "Expression of Interest (EOI) via SkillSelect",
      "Minimum 65 points on points test",
      "Invitation to Apply (ITA) from Department",
      "Skills assessment from relevant authority",
      "Under 45 years of age",
    ],
  },
  {
    code: "190/491/191",
    name: "State Sponsorship (Subclass 190, 491, 191)",
    tag: "Skilled",
    tagColor: "bg-emerald-100 text-emerald-800",
    desc: "The General Skilled Migration programme is for those who want to live, study and work in Australia. You can add family members such as Spouse/de-facto or child. This visa is points-based with additional points for state nomination.",
    requirements: [
      "Occupation on state/territory skilled occupation list",
      "State or territory nomination (5 extra points)",
      "Minimum 65 points (plus nomination points)",
      "EOI submitted in SkillSelect",
      "Skills assessment completed",
    ],
  },
  {
    code: "188",
    name: "Business Innovation & Investment (Subclass 188)",
    tag: "Business",
    tagColor: "bg-amber-100 text-amber-800",
    desc: "Business visa has five streams: 188A (Business Innovation), 188B (Investor), 188C (Significant Investor), 188D (Premium Investor), 188E (Entrepreneur). Lets you operate a new or existing business in Australia.",
    requirements: [
      "State/territory government nomination",
      "Business or investment background",
      "Net business or personal assets",
      "Turnover requirement (stream dependent)",
      "Points test score",
    ],
  },
  {
    code: "Citizenship",
    name: "Australian Citizenship",
    tag: "Permanent",
    tagColor: "bg-gray-100 text-gray-800",
    desc: "A permanent resident of Australia can acquire Citizenship by conferral. Duration of this process can take up to 12–24 months.",
    requirements: [
      "Be a permanent resident",
      "4 years lawful residence (1 year as PR)",
      "Pass citizenship test",
      "Character and identity requirements",
      "Intention to remain in Australia",
    ],
  },
  {
    code: "Skill",
    name: "Skill Assessments (CPA / ACS / ANMAC etc.)",
    tag: "Assessment",
    tagColor: "bg-orange-100 text-orange-800",
    desc: "There are different assessment bodies which assess whether the applicant meets the standard for the industry they intend to work in. Skill Assessment is mandatory for General Skilled Migration visas.",
    requirements: [
      "Relevant qualifications in your occupation",
      "Work experience evidence (payslips, references)",
      "Select the correct assessing authority",
      "Certified translations of documents",
      "Applicable to: CPA, ACS, ANMAC, Engineers Australia, VETASSESS and others",
    ],
  },
];

const tags = ["All", "Skilled", "Education", "Family", "Business", "Graduate", "Assessment", "Permanent"];

export default function ImmigrationPage() {
  const [selected, setSelected] = useState<typeof visas[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? visas : visas.filter(v => v.tag === filter);

  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-[#0a4a2e] to-[#1a6b42] py-20 px-6 text-center">
        <p className="text-[#e8c96a] text-xs uppercase tracking-widest mb-3">Immigration Services</p>
        <h1 className="font-playfair text-4xl font-bold text-white mb-4">Australian Immigration Services</h1>
        <p className="text-white/70 max-w-xl mx-auto text-base leading-relaxed">
          We handle all major Australian visa categories. Click any visa to see requirements, then book a free consultation with our team.
        </p>
      </section>

      <section className="py-16 px-6 bg-[#faf7f2]">
        <div className="max-w-5xl mx-auto">
          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === t
                    ? "bg-[#1a6b42] text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#1a6b42]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filtered.map(v => (
              <div
                key={v.code}
                onClick={() => setSelected(selected?.code === v.code ? null : v)}
                className={`bg-white border-l-4 border-[#1a6b42] border rounded-lg p-5 cursor-pointer transition-all duration-200 ${
                  selected?.code === v.code ? "shadow-lg ring-1 ring-[#1a6b42]/20" : "hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-xs text-gray-400 font-mono block mb-0.5">Subclass {v.code}</span>
                    <h3 className="font-medium text-gray-900 text-sm">{v.name}</h3>
                  </div>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ml-2 ${v.tagColor}`}>{v.tag}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>

                {selected?.code === v.code && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-3">Key Requirements</p>
                    <ul className="space-y-2 mb-4">
                      {v.requirements.map(r => (
                        <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#1a6b42] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={e => { e.stopPropagation(); setModalOpen(true); }}
                      className="bg-[#1a6b42] text-white text-sm px-5 py-2 rounded hover:bg-[#0a4a2e] transition-colors"
                    >
                      Enquire about this visa →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-[#0a4a2e] rounded-2xl p-8 text-center text-white">
            <h3 className="font-playfair text-2xl font-bold mb-3">Not Sure Which Visa is Right for You?</h3>
            <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
              Book a free consultation with our team. We'll assess your situation and recommend the best pathway.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#c8a84b] text-[#0a4a2e] font-medium px-8 py-3 rounded hover:bg-[#e8c96a] transition-colors"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ConsultModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

