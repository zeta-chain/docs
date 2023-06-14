import React from "react";

interface InfoComponentProps {
  infoText: { text: string; url: string };
  discordText: { text: string; url: string };
}

const InfoComponent: React.FC<InfoComponentProps> = ({
  infoText,
  discordText,
}) => {
  return (
    <pre>
      <code>
        Please see the{" "}
        <a
          className="font-bold"
          href={infoText.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {infoText.text}
        </a>{" "}
        or contact the team in the{" "}
        <a
          className="font-bold"
          href={discordText.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {discordText.text}
        </a>{" "}
        for more information.
      </code>
    </pre>
  );
};

export default InfoComponent;
