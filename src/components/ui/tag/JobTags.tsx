import React from 'react';

const selectedClass = 'font-bold text-orange-600 border-b-4 border-orange-600';

type TagItemProps = {
  type: string;
  name: string;
  isSelected?: boolean;
  onClick: () => void;
};

const TagItem = ({ type, name, isSelected = false, onClick }: TagItemProps) => {
  return (
    <div
      id={type}
      onClick={onClick}
      className={`
      ${isSelected && selectedClass}
      py-4 text-base col-span-6 text-center hover:cursor-pointer`}
    >
      {name}
    </div>
  );
};

export enum TAG_TYPES {
  JD = 'jd',
  COMPANY = 'company',
}

type TagProp = {
  type: string;
  name: string;
  ref: React.RefObject<HTMLDivElement>;
};
type JobTagsProps = {
  listTags: TagProp[];
};

const JobTags = ({ listTags }: JobTagsProps) => {
  const [selectedTag, setTag] = React.useState<string>(listTags[0].type);

  const updateTag = (value: string) => {
    setTag(value);
    listTags.forEach((tag) => {
      if (tag.type === value) {
        tag.ref.current?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  return (
    <div className={`grid grid-cols-12 bg-white-900 shadow-md rounded rounded-b-none`}>
      {listTags.map((tagItem) => (
        <TagItem
          type={tagItem.type}
          name={tagItem.name}
          isSelected={selectedTag === tagItem.type ? true : false}
          onClick={() => {
            updateTag(tagItem.type);
          }}
        />
      ))}
    </div>
  );
};

export default JobTags;
