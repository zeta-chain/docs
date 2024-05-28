export type Heading = {
  id: string;
  text: string;
  level: number;
};

export const selectHeadingLinks = () => document.querySelectorAll(".heading-link");

export const getHeadings = (): Heading[] => {
  const headingLinks = selectHeadingLinks();

  const headings: Heading[] = [];

  headingLinks.forEach((element) => {
    headings.push({
      id: element.id,
      text: element.textContent || element.id,
      level: parseInt(element.tagName.substring(1)),
    });
  });

  return headings;
};

export const handleHeadingLinkClick = ({
  event,
  id,
  isMobile,
}: {
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>;
  id: string;
  isMobile?: boolean;
}) => {
  event.preventDefault();

  const headingLink = document.getElementById(id);

  if (headingLink) {
    window.scrollTo({
      top: headingLink.offsetTop - (isMobile ? 78 : 38),
      behavior: "smooth",
    });

    const href = event.currentTarget.getAttribute("href");

    history.pushState(null, "", href);
  }
};
