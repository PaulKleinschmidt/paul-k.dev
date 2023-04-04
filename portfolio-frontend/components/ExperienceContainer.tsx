import { Experience } from '@/types/sanity-schema';
import { Icon } from 'react-feather';

type Props = {
  experience: Experience;
};

export const ExperienceContainer = ({ experience }: Props) => {
  return (
    <div className="mb-4 border-full border-indigo-500 border-2 p-4 rounded-lg">
      <div className="flex justify-between w-full">
        <a href={experience.link} className="text-indigo-400 underline">
          {experience.company}
        </a>

        <div>{experience.tenure}</div>
      </div>

      {experience.title}
      <p className="mt-4">Tech: {experience.tech}</p>
    </div>
  );
};
