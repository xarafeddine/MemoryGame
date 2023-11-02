const shuffle = () => {
  const assets = [
    { image: "/assets/css.png" },
    { image: "/assets/html5.png" },
    { image: "/assets/sql.png" },
    { image: "/assets/js.png" },
    { image: "/assets/nextjs.png" },
    { image: "/assets/node.png" },
    { image: "/assets/react.png" },
    { image: "/assets/ts.png" },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
