import { Project } from '@/types/sanity-schema';
import imageUrlBuilder from '@/utils/imageUrlBuilder';
import { Code, Icon, Link } from 'react-feather';
import { IconLink } from './IconLink';

type Props = {
  project: Project;
  index: number;
};

export const ProjectContainer = ({ project, index }: Props) => {
  const isEven = index % 2 == 0;

  const image = (
    <img
      className="h-36 w-36"
      src={imageUrlBuilder(project.picture).height(200).width(200).url()}
    />
  );

  const content = (
    <div className="">
      <div className="flex mb-2">
        <h2 className="mt-0 text-2xl">{project.title}</h2>
        <div className="flex mt-1 ml-4 justify-between w-10">
          <IconLink IconComponent={Code} url={project.source} />
          {project.url && <IconLink IconComponent={Link} url={project.url} />}
        </div>
      </div>
      <p>{project.description}</p>
    </div>
  );

  return (
    <div className="mb-12">
      {isEven ? (
        <div className="flex">
          {image}
          <div className="px-4">{content}</div>
        </div>
      ) : (
        <div className="flex">
          {content}
          {image}
        </div>
      )}
    </div>
  );
};
