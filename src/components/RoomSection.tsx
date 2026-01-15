import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import roomLiving from "@/assets/room-living.jpg";
import roomBedroom from "@/assets/room-bedroom.jpg";
import roomKitchen from "@/assets/room-kitchen.jpg";
import roomGarden from "@/assets/room-garden.jpg";
import roomSmall from "@/assets/room-small.jpg";
import roomBathroom from "@/assets/room-bathroom.jpg";

const rooms = [
  { name: "Living Room", image: roomLiving, href: "/rooms/living-room", description: "Cozy gathering spaces" },
  { name: "Bedroom", image: roomBedroom, href: "/rooms/bedroom", description: "Peaceful retreats" },
  { name: "Kitchen", image: roomKitchen, href: "/rooms/kitchen", description: "Heart of the home" },
  { name: "Garden", image: roomGarden, href: "/rooms/garden", description: "Outdoor sanctuaries" },
  { name: "Small Spaces", image: roomSmall, href: "/rooms/small-spaces", description: "Maximized beauty" },
  { name: "Bathroom", image: roomBathroom, href: "/rooms/bathroom", description: "Spa-like serenity" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function RoomSection() {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Curated Inspiration
          </p>
          <h2 className="section-title mb-4">Design by Room</h2>
          <p className="section-subtitle mx-auto">
            Explore our carefully curated collection of interior inspirations, organized by room type.
          </p>
        </motion.div>

        {/* Room Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {rooms.map((room) => (
            <motion.div key={room.name} variants={itemVariants}>
              <Link to={room.href} className="category-card group block aspect-[4/5]">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                  <p className="text-card/80 text-xs font-medium tracking-wider uppercase mb-1">
                    {room.description}
                  </p>
                  <h3 className="text-card text-2xl md:text-3xl font-serif font-medium">
                    {room.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
