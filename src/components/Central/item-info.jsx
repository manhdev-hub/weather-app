export const ItemInfo = ({ label, value, icon, id,index }) => {
  return (
    <div id={id} className={`col-${index}`}>
      {icon}
      <span>
        {label} <br /> <span id="hd">{value}</span>
      </span>
    </div>
  );
};
