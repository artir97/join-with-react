import React from "react";
import { Heading, Section, Text } from "../components/text/StylizedText"

const placeholderStudent = {
    name: 'Ash Ketchum',
    address: 'Kicked out from his house at 10',
    city: '01 Pallet Town, Kanto region'
}

const email = "[Email]";
const students = [placeholderStudent];

const contents = [
    {
        header: 'Exploring the board',
        texts: [`Email: ${email}`]
    },
    {
        header: 'Acceptance of terms',
        texts: [
            'By accessing and using Join (Product), you acknowledge and agree to the following terms and conditions, and any policies, guidelines, or amendments thereto that may be presented to you from time to time. We, the listed students, may update or change the terms and conditions from time to time without notice.'
        ]
    },
    {
        header: 'Scope and ownership of the product',
        texts: [
            'Join has been developed as part of a student group project in a web development bootcamp at the Developer Akademie GmbH. It has an educational purpose and is not intended for extensive personal & business usage. As such, we cannot guarantee consistent availability, reliability, accuracy, or any other aspect of quality regarding this Product.',
            'The design of Join is owned by the Developer Akademie GmbH. Unauthorized use, reproduction, modification, distribution, or replication of the design is strictly prohibited.'
        ]
    },
    {
        header: 'Proprietary rights',
        texts: [
            'Aside from the design owned by Developer Akademie GmbH, we, the listed students, retain all proprietary rights in Join, including any associated copyrighted material, trademarks, and other proprietary information.'
        ]
    },
    {
        header: 'Use of the product',
        texts: [
            'Join is intended to be used for lawful purposes only, in accordance with all applicable laws and regulations. Any use of Join for illegal activities, or to harass, harm, threaten, or intimidate another person, is strictly prohibited. You are solely responsible for your interactions with other users of Join.'
        ]
    },
    {
        header: 'Disclaimer of warranties and limitation of liability',
        texts: [
            'Join is provided "as is" without warranty of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event will we, the listed students, or the Developer Akademie, be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages, arising out of or in connection with the use or performance of Join.'
        ]
    },
    {
        header: 'Indemnity',
        texts: [
            'You agree to indemnify, defend and hold harmless us, the listed students, the Developer Akademie, and our affiliates, partners, officers, directors, agents, and employees, from and against any claim, demand, loss, damage, cost, or liability (including reasonable legal fees) arising out of or relating to your use of Join and/or your breach of this Legal Notice.'
        ]
    },
    {
        texts: [`For any questions or notices, please contact us at ${email}.`]
    },
    {
        texts: ["Date: July 26, 2023"]
    }
];


const LegalNotice = () => {
    return (
        <div className="p-4 lg:p-10 page-content overflow-y-scroll">
            <Section>
                <Heading>Legal Notice</Heading>
                <Section>
                    <Section>
                        <Heading>Imprint</Heading>
                        <ul>
                            {students.map(student =>
                                <React.Fragment key={student.name}>
                                    <li>{student.name}</li>
                                    <li>{student.address}</li>
                                    <li>{student.city}</li>
                                </React.Fragment>
                            )}
                        </ul>

                        {contents.map((content, i) =>
                            <React.Fragment key={i}>
                                {content.header && <Heading>{content.header}</Heading>}
                                {content.texts.map((text, j) => <Text key={j}>{text}</Text>)}
                            </React.Fragment>
                        )}
                    </Section>
                </Section>
            </Section>
        </div>
    );
}

export default LegalNotice;