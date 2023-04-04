import { Icon } from 'react-feather';

type Props = {
  IconComponent: Icon;
  url: string;
};

export const IconLink = ({ IconComponent, url }: Props) => {
  return (
    <a target="_blank" href={url}>
      <IconComponent className="mr-8 hover:stroke-indigo-300 transition-all" />
    </a>
  );
};
