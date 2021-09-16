import { Search } from './Search';
import { FilterType } from './FilterType';

export const Filters = () => {
  return (
    <div className="md:flex justify-between items-center xl:container mx-auto">
      <Search />
      <FilterType />
    </div>
  );
};
