const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid rgba(241, 193, 93, .5)',
  borderRadius: '4px',
};

const Main = (props) => (
  <div style={layoutStyle}>
    {props.children}
    <style jsx global>{`
      body {
        background: #263238;
        color: #f1c15d;
      }
    `}</style>
  </div>
);

export default Main;