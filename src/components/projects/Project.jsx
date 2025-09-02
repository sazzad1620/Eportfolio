import { motion } from "framer-motion";
import { Link } from "react-router";

const Project = ({ item }) => {
  const { id, title, head, description } = item;

  // Ensure head is an array
  const images = Array.isArray(head) ? head : [head];

  // Determine if this is the multi-vertical-image project
  const isMultiImage = images.length > 1;

  return (
    <Link to={`/projects/${id}`} state={{ item }}>
      <div className="mb-8 flex flex-wrap lg:justify-center items-start">
        {/* Image section */}
        <div className="w-full lg:w-1/3 flex gap-2">
          {images.map((img, index) =>
            isMultiImage ? (
              // 3 vertical images: divide width evenly to match horizontal project width
              <img
                key={index}
                src={img}
                alt={`${title} preview ${index + 1}`}
                className="rounded object-contain w-[100px] h-[180px]"
              />
            ) : (
              // Single horizontal image
              <motion.img
                key={index}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={img}
                alt={title}
                className="mb-6 rounded object-cover w-[300px] h-[200px]"
              />
            )
          )}
        </div>

        {/* Text info */}
        <motion.div
          className="w-full max-w-xl lg:w-1/4 mt-4 lg:mt-0 lg:ml-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h6 className="mb-6 font-semibold text-xl">{title}</h6>
          <p className="mb-4 text-neutral-400">{description}</p>
        </motion.div>
      </div>
    </Link>
  );
};

export default Project;
