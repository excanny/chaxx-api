import { ChevronLeft, ChevronRight, Star, Scissors, Award, Users } from 'lucide-react';


const SocialProofAvatars = ({ colorCombos }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4 -space-x-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${colorCombos[i - 1]} border-4 border-white shadow-lg transform hover:scale-110 transition-transform duration-300`}
        ></div>
      ))}
    </div>
    <p className="text-gray-700 font-medium">
      Join <span className="font-black text-purple-600">500+</span> satisfied clients
    </p>
  </div>
);

export default SocialProofAvatars;