import sih from "./assets/icons/sih.jpg";
import cohesive from "./assets/icons/cohesive.jpeg"
import reliableai from "./assets/icons/reliableai.png"
import bitcoinpe from "./assets/icons/bitcoinpe.jpeg"

const all_experience = [
    {
        logo:bitcoinpe,
        position: "Full Stack Developer Intern",
        company: "BitcoinPe",
        duration: "Oct. 2024 - Present",
        summary: ["Built and optimized UI for an INR lending platform with Bitcoin collateral, enhancing user experience.",
            "Integrated APIs, linked KYC details for 100% user verification, and managed end-to-end flow from loan request to fund transfer.",
            "Currently implementing payouts API; making product ready for pilot testing with 20-25 users."
        ]
    }, {
        logo: reliableai,
        position: "UI & UX Intern",
        company: "thereliable.ai",
        duration: "Mar. 2024 - Jun. 2024",
        summary: ["Designed and implemented a user-friendly dashboard, facilitating database connectivity with up to 3 databases.",
            "Integrated the dashboard with backend APIs and WebSocket-based chat functionality, building the first MVP.",
            "Accepted text feedback for model training and displayed running SQL queries, enabling users to submit corrections for accurate outputs.",
            "Empowered data analysts to generate and provide unique time-sensitive chat links (valid for 72 hours) to clients."
        ]
    }, {
        logo: sih,
        position: "Team 8bit Squad [UI/UX Designer]",
        company: "Smart India Hackathon 2023",
        duration: "Sep. 2023 - Dec. 2023",
        summary: ["Contributed as a UI/UX Designer in addressing an AICTE problem statement during a 36-hour hackathon.",
            "Designed a collaborative portal for educational experts and industry leaders to draft and refine curriculums.",
            `Led ideation sessions with a team of 6 to define key features such as user roles, model curriculum templates, a resource library, and analytics.(<a href="https://bit.ly/3IsFLH2" target="_blank">Prototype</a>)`,
            "Integrated a mobile application to collect feedback from professors and (HODs) ensuring annual updates to the curriculum."
        ]
    }, {
        logo: cohesive,
        position: "Lead UI/UX Designer",
        company: "Cohesive Health",
        duration: "Jun. 2023 - Oct. 2023",
        summary: [
            "Pioneered product design of three softwares to build the company’s product in the healthcare sector streamlining the system between their stakeholders: patients, doctors and labs.",
            `Designed and developed comprehensive company’s website as well (<a href="https://cohesivehealth.in" target="_blank">https://cohesivehealth.in</a>)`,
            `Doctor's App: <a href="https://bit.ly/4cRW91F" target="_blank">Prototype</a>`,
            `Patient's App: <a href="https://bit.ly/43VS34u" target="_blank">Prototype</a>`
        ]
    }]

export default all_experience;
