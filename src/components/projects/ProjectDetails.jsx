import { Link, useLocation } from "react-router"; // Correct import

const ProjectDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) return <div>Item not found</div>;

  return (
    <div className="container mx-auto max-w-7xl mt-8">
      <div className="images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {item.imgs?.length > 0 ? (
          item.imgs.map((img, index) => (
            <img key={index} src={img} alt={item.title} />
          ))
        ) : (
          <img src={item.head} alt={item.title} />
        )}
      </div>
      <div className="text">
        <h1 className="font-bold text-2xl">{item.title}</h1>
        <p className="py-6 font-semibold text-xl">{item.description}</p>
        {item.details && <p>{item.details}</p>}
        <Link to="/projects">
          <button className="btn mt-5">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
