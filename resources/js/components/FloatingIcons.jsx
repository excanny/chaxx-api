
import { ChevronLeft, ChevronRight, Star, Scissors, Award, Users } from 'lucide-react';

const FloatingIcons = () => {
  const icons = [
    { Icon: Scissors, delay: '0s' },
    { Icon: Star, delay: '2s' },
    { Icon: Users, delay: '4s' },
    { Icon: Award, delay: '6s' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, delay }, index) => (
        <Icon
          key={index}
          size={24}
          className={`absolute text-white opacity-20 animate-float`}
          style={{
            left: `${20 + (index * 20)}%`,
            top: `${30 + (index * 15)}%`,
            animationDelay: delay,
            animationDuration: '8s'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingIcons;