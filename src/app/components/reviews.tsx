import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faq = [
  {
    q: "What is Medical Concierge?",
    a: `Medical Concierge is an exclusive form of Primary Health Care, that involves engaging a Doctor on a monthly retainer for oversight and co-ordination of treatment across multiple medical specialists to maximise patient health span.`,
  },
  {
    q: "What is included in the Medical Concierge service?",
    a: `The Medical Concierge service includes
<ul>
  <li>Unlimited teleconsultations</li>
  <li>Unlimited physician consultations at the physician's office</li>
  <li>Recommendations for specialists and assistance in selecting the best one for you</li>
  <li>Expedient appointment procurement with the right specialists</li>
  <li>Accompaniment to specialist appointments to integrate advice from various specialists and patient feedback into a personalized treatment plan</li>
  <li>Review and explanation of scans and test reports in layman terms for patients and families</li>
  <li>Oversight and coordination of treatment across multiple medical specialists</li>
</ul>
`,
  },
  {
    q: "Who can benefit from Medical Concierge?",
    a: `Medical Concierge is ideal for anyone aiming to maximize their health span and is willing to invest in their health. It is particularly beneficial for patients with multiple concurrent issues requiring coordination across specialties, such as heart, kidney, lung, diabetes, and/or blood pressure conditions. The focus is on extending a healthy, happy, and pain-free lifespan, known as "HealthSpan."
`,
  },
  {
    q: "What is the difference between Medical Concierge and a General Physician?",
    a: `A General Physician is a primary care doctor trained to diagnose and treat a wide range of conditions. A Medical Concierge, on the other hand, provides oversight and coordination of treatment across multiple medical specialists.

`,
  },
  {
    q: "What is the duration of the Medical Concierge service?",
    a: `The duration of the Medical Concierge service depends on the patient's needs. For some, it may be a few months to address a specific incident; for others, it could be lifelong guidance to maximize a healthy lifespan (HealthSpan).

`,
  },
  {
    q: "About Dr Rashmi Sama",
    a: `Dr. Rashmi Sama is a US Board Certified Pulmonologist, General Physician, and Medical Concierge, currently practicing at Sir Ganga Ram Hospital, Delhi. She completed her residency at St. Luke's Hospital at Columbia University and a fellowship at Thomas Jefferson and the University of Illinois Chicago. Previously, she worked as a Pulmonologist at Cook County Hospital in Chicago, IL, and as a General Physician at Thomas Jefferson Hospital in Philadelphia, PA, and St. Francis Hospital in San Francisco, CA.

`,
  },
  {
    q: "How do I contact Dr Rashmi Sama?",
    a: `You can contact Dr Rashmi Sama at rashmisama@gmail.com`,
  },
];
export default function Reviews() {
  return (
    <div>
      {faq.map((q, index) => (
        <Accordion key={index} sx={{ backgroundColor: "transparent" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography>{q.q}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              component="div"
              dangerouslySetInnerHTML={{ __html: q.a }}
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
