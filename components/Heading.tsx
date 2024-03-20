import React from "react";

type headingTypeProps = {
  tag?: keyof React.JSX.IntrinsicElements,
  text: string,
}

const Heading = ({ tag, text }: headingTypeProps) => {
  const Tag = tag || 'h1';
  return <Tag>{text}</Tag>
};

export default Heading;
