const StaticItem = ({src}) => {
  return (
    <img  srcSet={`${src}.png, ${src}@2x.png 2x, ${src}@3x.png 3x`}
          src={`${src}.png`}
    />
  );
};

export default StaticItem;