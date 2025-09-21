import SectionHeader from "./SectionHeader";
import GalleryItem from "./GalleryItem";

const GallerySection = () => {
  const galleryItems = [
    { image: "assets/images/Photo-pages-pages-1_page-0001.jpg", title: "Bold Fade", color: "purple-500" },
    { image: "assets/images/Photo-pages-pages-2_page-0001.jpg", title: "Textured Waves", color: "cyan-500" },
   { image: "assets/images/Photo-pages-pages-4_page-0001.jpg", title: "Creative Cut", color: "orange-500" },
    { image: "assets/images/Photo-pages-pages-5_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-6_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-7_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-8_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-9_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-10_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-11_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-12_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-13_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-14_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-15_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-16_page-0001.jpg", title: "Full Transform", color: "pink-500" },
     { image: "assets/images/Photo-pages-pages-17_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-18_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-19_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-20_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-21_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-22_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-23_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
    { image: "assets/images/Photo-pages-pages-24_page-0001.jpg", title: "Full Transform", color: "pink-500" },
    { image: "assets/images/Photo-pages-pages-25_page-0001.jpg", title: "Beard Artistry", color: "yellow-500" },
  ]

  return (
    <section id="gallery" className="py-5 bg-purple-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          badge="📸 Style Showcase"
          title="Creative Gallery"
          subtitle="Check out some of our most vibrant transformations! 🌟"
          badgeColor="cyan-600"
          titleColor="cyan-600"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {galleryItems.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default GallerySection;