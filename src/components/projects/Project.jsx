import { motion } from "framer-motion";
import { Link } from "react-router";

const Project = ({ item }) => {
  const { id, title, head, description, isVertical } = item;

  const images = Array.isArray(head) ? head : [head];

  return (
    <Link to={`/projects/${id}`} state={{ item }}>
      <div className="mb-8 flex flex-wrap lg:justify-center">
        {/* Image carousel / multiple preview */}
        <div className="w-full lg:w-1/3 flex gap-2 overflow-x-auto">
          {images.map((img, index) => (
            <motion.img
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              src={img}
              alt={`${title} preview ${index + 1}`}
              className={`rounded-xl flex-shrink-0 
                ${isVertical 
                  ? "object-contain max-w-[120px] max-h-[220px]" 
                  : "object-cover max-w-[320px] max-h-[320px]"}`
              }
            />
          ))}
        </div>

        {/* Text info */}
        <motion.div
          className="w-full max-w-xl lg:w-1/4"
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
