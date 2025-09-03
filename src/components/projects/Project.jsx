import { motion } from "framer-motion";
import { Link } from "react-router";

const Project = ({ item }) => {
  const { id, title, head, description, isVertical } = item;

  // Ensure head is always an array
  const headImages = Array.isArray(head) ? head : [head];

  return (
    <Link to={`/projects/${id}`} state={{ item }}>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        {/* Images */}
        <div className="flex gap-3">
          {headImages.map((img, index) => (
            <motion.img
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              src={img}
              alt={title}
              className={`mb-6 rounded-xl shadow-md 
                ${isVertical 
                  ? "w-[120px] h-[220px] object-contain"   // vertical → no crop, slim/tall
                  : "w-[300px] h-[200px] object-cover"}   // horizontal → wide, cropped
              `}
            />
          ))}
        </div>

        {/* Text */}
        <motion.div
          className="w-full max-w-xl lg:w-1/4"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <h6 className="mb-6 font-semibold text-xl">{title}</h6>
          <p className="mb-4 text-neutral-400">{description}</p>
        </motion.div>
      </div>
    </Link>
  );
};

export default Project;
