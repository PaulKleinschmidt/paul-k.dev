import { Experience } from '@/types/sanity-schema';
import { Icon } from 'react-feather';

type Props = {
  experience: Experience;
};

export const ExperienceContainer = ({ experience }: Props) => {
  const technologies = experience.tech.split(',');

  return (
    <div className="mb-4 border-full border-indigo-500 border-2 p-4 rounded-lg">
      <div className="flex justify-between w-full">
        <a href={experience.link} className="text-indigo-400 underline">
          {experience.company}
        </a>

        <div>{experience.tenure}</div>
      </div>

      {experience.title}
      <div>
        {technologies.map((tech) => (
          <div className="mr-3 bg-indigo-800 p-1 inline-block mt-4 rounded-sm">
            {tech.trim()}
          </div>
        ))}
      </div>
    </div>
  );
};
