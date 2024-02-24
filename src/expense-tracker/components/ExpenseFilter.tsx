import React from "react";
import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;

// import React from "react";
// interface Props {
//   onSelectCategory: (category: string) => void;
// }
// const ExpenseFilter = ({ onSelectCategory }: Props) => {
//   return (
//     <select
//       className="form-select"
//       onChange={(event) => onSelectCategory(event.target.value)}
//     >
//       <option value="">All Categories</option>
//       <option value="groceries">groceries</option>
//       <option value="utilities">utilities</option>
//       <option value="entertainment">entertainment</option>
//     </select>
//   );
// };

// export default ExpenseFilter;
