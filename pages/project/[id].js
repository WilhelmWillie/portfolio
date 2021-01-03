const Project = ({ data }) => {
  return (
    <>
      <h1>{data.message}</h1>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "auxq" } }, { params: { id: "urglowin" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:3000/data/projects/${id}.json`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Project;
