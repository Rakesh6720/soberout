export default function GroupDetailComponent({ group }) {
  const bodyStyle = {
    fontFamily: "sans-serif",
  };
  return (
    <>
      <div style={bodyStyle}>
        <h2>What we're about</h2>
        <p>{group.description}</p>
      </div>
    </>
  );
}
