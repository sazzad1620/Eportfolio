import { motion } from "framer-motion";
import { Link } from "react-router";

const Project = ({ item }) => {
  const { id, title, head, description } = item;

  // Head an array
  const images = Array.isArray(head) ? head : [head];

  return (
    <Link to={`/projects/${id}`} state={{ item }}>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        {/* Horizontal image row */}
        <div className="w-full lg:w-1/3 flex gap-2 overflow-x-auto">
          {images.map((img, index) => (
            <motion.img
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              src={img}
              alt={`${title} preview ${index + 1}`}
              className="rounded object-contain w-[140px] h-[180px] flex-shrink-0"
            />
          ))}
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
