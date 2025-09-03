import { Link, useLocation } from "react-router";

const ProjectDetails = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item)
    return <div className="text-center mt-10 text-xl">Item not found</div>;

  // Use manual flag from JSON instead of guessing
  const isVerticalProject = item.isVertical || false;

  // Decide number of columns
  const colsClass = isVerticalProject
    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" // up to 6 in a row for vertical screenshots
    : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="container mx-auto max-w-7xl mt-8 px-4">
      {/* Title */}
      <h1 className="font-bold text-3xl mb-4">{item.title}</h1>

      {/* Description */}
      <p className="text-lg font-semibold mb-6">{item.description}</p>

      {/* Images */}
      <div className={`images grid ${colsClass} gap-5 mb-6`}>
        {item.imgs?.length > 0 ? (
          item.imgs.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${item.title} ${index + 1}`}
              className={`w-full h-auto rounded-xl shadow-md ${
                isVerticalProject ? "object-contain" : "object-cover"
              }`}
            />
          ))
        ) : (
          <img
            src={item.head}
            alt={item.title}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        )}
      </div>

      {/* Detailed Description */}
      {item.details && (
        <p className="text-lg mb-6">
          <span className="font-bold">Detailed description:</span> {item.details}
        </p>
      )}

      {/* Back Button */}
      <Link to="/projects">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
