import { ItemInfo } from "./item-info";

export const CentralItem = ({ title, id, data }) => {
  return (
    <li id={id}>
      <p className="li_title">{title}</p>
      {data.map((data, index) => (
        <ItemInfo
          key={data.id}
          id={data.id}
          label={data.label}
          value={data.value}
          icon={data.icon}
          index={index + 1}
        />
      ))}
    </li>
  );
};
