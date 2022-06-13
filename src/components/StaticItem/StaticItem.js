const StaticItem = ({src}) => {
  return (
    <li>
      <img  srcSet={`${src}.png,
              ${src}@2x.png 2x,
              ${src}@3x.png 3x`}
            src={`${src}.png` }
      />
    </li>
  );
};

export default StaticItem;