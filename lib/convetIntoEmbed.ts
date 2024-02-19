const convertIntoEmbed = (url: string) => {
  const link = new URL(url);
  const mainPart = link.searchParams.get("v");
  const embed = `https://www.youtube.com/embed/${mainPart}`;

  return embed;
};

export default convertIntoEmbed;
