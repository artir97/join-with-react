import React from "react";
import { Heading, Section, Text } from "../components/text/StylizedText";

const contents = [
    {
        header: "Subtitile",
        texts: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio felis, iaculis ut massa eget, ornare lacinia urna. In dignissim justo eu velit sagittis, in scelerisque nulla convallis. Vestibulum eros lorem, sollicitudin eget eros non, varius aliquam mauris. Sed turpis ipsum, condimentum quis nulla at, lobortis facilisis ipsum. Nunc erat justo, hendrerit vel enim vitae, feugiat mattis dui. In auctor dignissim luctus. Mauris ornare ipsum at ultrices eleifend. Praesent tempus congue magna. Quisque libero erat, pharetra a neque et, imperdiet semper justo."]
    },
    {
        header: "Subtitile",
        texts: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio felis, iaculis ut massa eget, ornare lacinia urna. In dignissim justo eu velit sagittis, in scelerisque nulla convallis. Vestibulum eros lorem, sollicitudin eget eros non, varius aliquam mauris. Sed turpis ipsum, condimentum quis nulla at, lobortis facilisis ipsum. Nunc erat justo, hendrerit vel enim vitae, feugiat mattis dui. In auctor dignissim luctus. Mauris ornare ipsum at ultrices eleifend. Praesent tempus congue magna. Quisque libero erat, pharetra a neque et, imperdiet semper justo."]
    }
]

const PrivacyPolicy = () => {
    return (
        <div className="p-4 lg:p-10 page-content overflow-y-scroll">
            <Section>
                <Heading>Privacy Policy</Heading>

                <Section>
                    <Section>
                        {contents.map((content, i) =>
                            <React.Fragment key={i}>
                                <Heading>{content.header}</Heading>
                                {content.texts.map((text, j) =>
                                    <Text key={j}>{text}</Text>
                                 )}
                            </React.Fragment>
                        )}
                    </Section>
                </Section>
            </Section>
        </div>
    );
}

export default PrivacyPolicy;