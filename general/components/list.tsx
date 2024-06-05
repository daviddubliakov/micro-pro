// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (_x, i) {
  return {
    id: i,
    title: 'Lorem ipsum dolor sit amet',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
  };
});

export default function GridListWithHeading() {
  return (
    <div>
      <span>
        <b>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </b>
        {features.map((feature) => (
          <div>
            <span>{feature.title}</span>
            <span>{feature.text}</span>
          </div>
        ))}
      </span>
    </div>
  );
}
